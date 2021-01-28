export interface PatientInterface {
  id: string;
  opid: string;
  name: string;
  sex: string;
  age: number;
  room: string;
  date: any;
  entryDate: any;
  address: string;
  phone: string;
  alternatePhone: string;
  currentMedication: string;
  inPatient: boolean;

  diagnosis: {
    pd1?: string;
    pd2?: string;
    pd3?: string;
    final?: string;
    icd?: string;
  };


  presentHistory: {
    ph1: { description?: string; duration?: string };
    ph2: { description?: string; duration?: string };
    ph3: { description?: string; duration?: string };
    ph4: { description?: string; duration?: string };
    ph5: { description?: string; duration?: string };
  };

  pastHistory: {
    diabates?: boolean;
    hyperTension?: boolean;
    cva?: boolean;
    cad?: boolean;
    other?: string;
  };

  personalHistory: {
    currentSmoker?: boolean;
    exSmoker?: boolean;
    alcoholic?: boolean;
    sleep?: string;
    bowelBladderHistory?: string;
    familyHistory?: string;
    otherRemarks?: string;
    tobaccoChewing?: string;
  };


  vitals: {
    bp?: string;
    pulse?: string;
    respRate?: string;
    sp02?: string;
    grbs?: string;
  };

  higherMentalFunction: {
    levelOfConsiousness?: string;
    memory?: string;
    attention?: string;
    speech?: string;
    mmse?: string;
  };

  cranialNerve: {
    motorSystem?: string;
    sensorySystem?: string;
    cerebellarSign?: string;
    menengealSign?: string;
    peripheralNerves?: string;
    skullAndSpine?: string;
  };
}

export class Patient implements PatientInterface {
  id!: string;
  opid!: string;
  name!: string;
  sex!: string;
  age!: number;
  room!: string;
  date!: any;
  entryDate!: any;
  address!: string;
  phone!: string;
  alternatePhone!: string;
  inPatient!: boolean;


  diagnosis: {
    pd1?: string;
    pd2?: string;
    pd3?: string;
    final?: string;
    icd?: string;
  };

  presentHistory: {
    ph1: { description?: string; duration?: string };
    ph2: { description?: string; duration?: string };
    ph3: { description?: string; duration?: string };
    ph4: { description?: string; duration?: string };
    ph5: { description?: string; duration?: string };
  };
 
  pastHistory: {
    diabates?: boolean;
    hyperTension?: boolean;
    cva?: boolean;
    cad?: boolean;
    other?: string;
  };

  constructor(){
    this.diagnosis={};
    this.presentHistory={
      ph1:{},
      ph2:{},
      ph3:{},
      ph4:{},
      ph5:{}
    };
    this.pastHistory={};
    this.personalHistory={};
    this.vitals={};
    this.higherMentalFunction={};
    this.cranialNerve={};
 
  }


  personalHistory: {
    currentSmoker?: boolean;
    exSmoker?: boolean;
    alcoholic?: boolean;
    sleep?: string;
    bowelBladderHistory?: string;
    familyHistory?: string;
    otherRemarks?: string;
    tobaccoChewing?: string;
  };

  currentMedication!: string;

  vitals: {
    bp?: string;
    pulse?: string;
    respRate?: string;
    sp02?: string;
    grbs?: string;
  };

  higherMentalFunction: {
    levelOfConsiousness?: string;
    memory?: string;
    attention?: string;
    speech?: string;
    mmse?: string;
  };

  cranialNerve: {
    motorSystem?: string;
    sensorySystem?: string;
    cerebellarSign?: string;
    menengealSign?: string;
    peripheralNerves?: string;
    skullAndSpine?: string;
  };
}
