export interface PatientInterface {
  id: string;
  name: string;
  sex: string;
  age: number;
  room: string;
  date: Date;
  address: string;
  phone: string;
  currentMedication: string;
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
    cerebralSign?: string;
    menengialSign?: string;
    periferalNerves?: string;
    skullAndSpine?: string;
  };
}

export class Patient implements PatientInterface {
  id!: string;
  name!: string;
  sex!: string;
  age!: number;
  room!: string;
  date!: Date;
  address!: string;
  phone!: string;


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
    cerebralSign?: string;
    menengialSign?: string;
    preiferalNerves?: string;
    skullAndSpine?: string;
  };
}

export interface Restaurant {
  id: string;
  name: string;
  closed: boolean;
  type: string;
  phone: string;
  locationUrl: string;
  location: any;
  email: string;
  logo: string;
  address: string;
}

export interface Order {
  id: string;
  rid: string;
  uid: string;
  address: Address;
  items: Map<string, number>;
  meals: Array<Meal>;
  summary: Array<Summary>;
  user: User;
  restaurant: Restaurant;
  time: any;
  price: number;
  total: number;
  deliveryCharge: number;
  status: string;
  statusCode: number;
}

export interface User {
  id: string;
  uid: string;
  name: string;
  phone: string;
  email: string;
  address: Map<string, Address>;
}

export interface Address {
  place: PlaceInfo;
  title: string;
  zone: string;
  adl2: string;
  adl3: string;
  adl4: string;
}

export interface PlaceInfo {
  name: string;
  details: string;
  latitude: number;
  longitude: number;
}

export interface Summary {
  meal: Meal;
  count: number;
  price: number;
}

export interface Meal {
  id: string;
  rid: string;
  name: string;
  available: boolean;
  spice: boolean;
  special: boolean;
  price: number;
  strikedPrice: number;
}

export type VForm = Vue & any;
