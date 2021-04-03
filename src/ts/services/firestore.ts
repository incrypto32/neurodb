import firebase from "firebase/app";
import "firebase/firestore";

import { Patient, PatientInterface } from "../models/models";

export class FireStoreHelper {
  store: firebase.firestore.Firestore;
  patients: firebase.firestore.CollectionReference;
  numdata: firebase.firestore.CollectionReference;
  lastDoc!: firebase.firestore.DocumentSnapshot;
  increment = firebase.firestore.FieldValue.increment(1);

  constructor(app: any) {
    this.store = app.firestore();
    this.patients = this.store.collection("patients");
    this.numdata = this.store.collection("numdata");
  }

  async addPatient(patient: Patient): Promise<string> {
    const tStamp = firebase.firestore.Timestamp.fromDate(patient.date);
    patient.date = tStamp;
    const doc = await this.patients.add(Object.assign({}, patient));

    try {
      await this.numdata.doc("numbers").update({
        inPatients: firebase.firestore.FieldValue.increment(1),
        patients: firebase.firestore.FieldValue.increment(1),
      });
    } catch (error) {
      await this.patients.doc(doc.id).delete();
      console.log(error);
      throw "Could'nt update numbers";
    }

    return doc.id;
  }

  async editPatient(id: string, patient: Patient): Promise<boolean> {
    try {
      await this.patients.doc(id).update(Object.assign({}, patient));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async addPatientFiles(
    id: string,
    file: any,
    onError: Function,
    onComplete: Function
  ): Promise<string | undefined> {
    console.log("Add patient files to firestore");
    console.log(`ID : ${id} , Title : ${file.title} , Name : ${file.name}`);
    try {
      const doc = await this.patients
        .doc(id)
        .collection("files")
        .add(file);
      onComplete();
      return doc.id;
    } catch (error) {
      console.log(error);
      console.log("Error while adding patient files details to firestore");
      onError();
    }
  }

  async getPatient(id: string): Promise<PatientInterface> {
    const doc = await this.patients.doc(id).get();
    const patient = doc.data() as PatientInterface;
    patient.id = doc.id;
    if (patient) {
      return patient;
    } else {
      throw "Patient does not exist";
    }
  }

  async getPatientFiles(id: string) {
    const snap = await this.patients
      .doc(id)
      .collection("files")
      .get();
    return snap.docs.map((doc) => {
      const res = doc.data();
      res.id = doc.id;
      return res;
    });
  }

  async deletePatientFile(id: string, fileId: string) {
    await this.patients
      .doc(id)
      .collection("files")
      .doc(fileId)
      .delete();
  }

  async getAllPatients(limit = 20): Promise<Array<PatientInterface>> {
    const patients: Array<PatientInterface> = [];
    let query = this.patients.orderBy("date", "desc");

    // console.log(JSON.stringify(this.lastDoc?.data()), getMore);

    // if (this.lastDoc) {
    //   query = query.startAfter(this.lastDoc);
    // }

    query = query.limit(limit);
    const snap = await query.get();
    // this.lastDoc = snap.docs[snap.docs.length - 1];

    snap.docs.forEach((doc) => {
      try {
        const patient = doc.data();
        if (patient.date) {
          patient.date = (patient.date as firebase.firestore.Timestamp).toDate();
        } else {
          patient.date = "";
        }

        patient.id = doc.id;
        patients.push(patient as PatientInterface);
      } catch (error) {
        console.log(error);
      }
    });

    console.log(patients);

    return patients;
  }

  async deletePatient(id: string, inPatient: boolean): Promise<boolean> {
    try {
      await this.patients.doc(id).delete();
      await this.numdata.doc("numbers").update({
        inPatients: firebase.firestore.FieldValue.increment(inPatient ? -1 : 0),
        patients: firebase.firestore.FieldValue.increment(-1),
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async checkInOrOut(id: string, value: boolean): Promise<boolean> {
    try {
      const cTstamp = firebase.firestore.FieldValue.serverTimestamp();
      console.log(`${id}`);
      await this.patients.doc(id).update({ inPatient: value, cDate: cTstamp });

      console.log(value);
      await this.numdata.doc("numbers").update({
        inPatients: firebase.firestore.FieldValue.increment(value ? 1 : -1),
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
