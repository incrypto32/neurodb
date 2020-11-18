import firebase from 'firebase/app'
import "firebase/firestore";

import { Patient, PatientInterface } from "../models/models";

export class FireStoreHelper {
  store: firebase.firestore.Firestore;
  patients: firebase.firestore.CollectionReference;

  increment = firebase.firestore.FieldValue.increment(1);

  constructor(app: any) {
    this.store = app.firestore();
    this.patients = this.store.collection("patients");
  }

  async addPatient(patient: Patient): Promise<string> {
    const doc = await this.patients.add(Object.assign({}, patient));
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

  async getPatient(id: string): Promise<PatientInterface> {
    const doc = await this.patients.doc(id).get();
    const patient = doc.data() as PatientInterface;
    if (patient) {
      return patient;
    } else {
      throw "Patient does not exist";
    }
  }

  async getAllPatients(): Promise<Array<PatientInterface>> {
    const patients: Array<PatientInterface> = [];

    const snap = await this.patients.get();

    snap.docs.forEach((doc) => {
      const patient=doc.data()
      patient.id=doc.id
      patients.push(patient as PatientInterface);
    });
    console.log(JSON.stringify(patients))

    return patients;
  }

  async deletePatient(id: string): Promise<boolean>{
    try {
      await this.patients.doc(id).delete()
      return true
    } catch (error) {
      console.log(error)
      return false
    }
   
  }
}
