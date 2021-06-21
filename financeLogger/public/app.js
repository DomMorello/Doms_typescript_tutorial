import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// //두 클래스가 HasFormatter 인터페이스를 구현했디 때문에 가능하다.
// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing work', 200);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// const invOne = new Invoice('morello', 'work on the morello website', 250);
// const invTwo = new Invoice('dom', 'work on the dom website', 300);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(inv => {
//   console.log(inv.client, inv.amount, inv.format());
// });
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //이렇게 하는 것이 tuple이다.
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
//GENERICS
// const addUID = <T extends {name: string}>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// };
// let docOne = addUID({name: 'yoshi', age: 40});
// // let docTwo = addUID('hello');
// console.log(docOne);
// //ENUMS
// enum ResourceType { BOOK, AUTHOR, DIRECTOR, PERSON};
// //with interfaces
// interface Resource<T> {
//   uid: number;
//   resourceType: ResourceType;
//   data: T;
// }
// const docOne: Resource<object> = {
//   uid: 1,
//   resourceType: ResourceType.BOOK,
//   data: {title: 'name of the wind'},
// };
// const docTwo: Resource<object> = {
//   uid: 10,
//   resourceType: ResourceType.PERSON,
//   data: {name: 'yoshi'},
// };
// console.log(docOne, docTwo);
// const docThree: Resource<object> = {
//   uid: 1,
//   resourceName: 'person',
//   data: {name: 'shaun'},
// };
// const docFour: Resource<string[]> = {
//   uid: 2,
//   resourceName: 'shoppingList',
//   data: ['test', 'bread'],
// };
// tuples
// let arr = ['tyu', 23, true];
// arr[0] = false;
// arr[1] = 'yoshi';
// arr = [30, false, 'yoshi'];
// let tup: [string, number, boolean] = ['ryu', 23, true]; //순서를 바꿀 수 없다
// tup[0] = 'ken';
// tup[1] = 3;
// let student: [string, number];
// student = ['chun-li', 23223];
