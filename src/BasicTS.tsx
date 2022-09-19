import React from 'react';
import './App.css';

function TS() {
  let name: string;
  let fullName: any | unknown;
  let age: string | number;
  let hobbies: string[];
  let isBoolean: boolean;
  let mixed: [string, number];
  mixed = ['fjdkjf', 999];

  type Person = {
    name: string;
    age?: number;
  };
  let person: Person;
  person = { name: 'name' };
  console.log(person);
  let lotsOfPersons: Person[];

  let PrintName: (person: Person) => void; // void means return could be anything
  let newFunc: (person: Person) => never; //can not return undifined like something

  PrintName = (person: Person) => {
    console.log(person);
  };
  PrintName({ name: 'taher', age: 22 });

  //Difference type and interface

  type X = {
    a: string;
    b: number;
  };
  type Y = X & {
    c: string;
    d: number;
  };

  let y: Y = {
    // it is working fine
    a: 'something',
    b: 4343,
    c: 'something',
    d: 4343,
  };
  // let z: Y = {
  //   // it is not working
  //   c: 'something',
  //   d: 4343,
  // };

  //Interface
  interface InterfacePerson {
    name: string;
    age?: number;
  }
  interface Guy extends InterfacePerson {
    profession: string;
  }
  let NewPerson: Guy;
  NewPerson = {
    name: 'nae',
    profession: 'somentin',
  };
  return <div className="TS"></div>;
}

export default TS;
