import firebase from "firebase/app";
import "firebase/storage";

export class FireStorageHelper {
  storage: firebase.storage.Storage;

  constructor(app: firebase.app.App) {
    this.storage = app.storage();
  }

  getPatientRef(id: string) {
    return this.storage.ref("/").child(`${id}`);
  }

  uploadPatientFile(
    id: string,
    file: File,
    fileName: string,
    snapshotListener = (percent: any) => {
      console.log("snap listener");
    },
    onError = (err: any) => {
      console.log("on error");
    },
    onComplete = (url: string) => {
      console.log("on upload complete ");
      console.log(url);
    }
  ) {
    const ref = this.getPatientRef(id).child(fileName);
    const upTask = ref.put(file);
    upTask.on(
      "state_changed",
      // Provides upload snapshots
      (snap) => {
        const percent = (snap.bytesTransferred / snap.totalBytes) * 100;
        snapshotListener(percent);
      },
      // Fires When upload is unsuccessfull
      (err) => {
        console.log(err);
        onError(err);
      },
      // Fires on upload success
      async () => {
        console.log("Completed");
        const url = await ref.getDownloadURL();
        onComplete(url);
      }
    );
  }

  async deletePatientFile(
    id: string,
    name: string,
    onComplete: Function,
    onError: Function
  ) {
    try {
      await this.getPatientRef(id)
        .child(name)
        .delete();
      onComplete();
    } catch (error) {
      console.log("Error while deleting patient file");
      onError();
    }
  }
}
