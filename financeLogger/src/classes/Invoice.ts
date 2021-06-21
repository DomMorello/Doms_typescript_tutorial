import {HasFormatter} from "../interfaces/HasFormatter.js";

//인터페이스 구현, 인터페이스 구조를 강제함. 
export class Invoice implements HasFormatter {
  // readonly client: string;
  // private details: string;
  // public amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ) {}
  //접근제어자를 붙이면 객체를 생성할 때 넣어준 인자들이 생성자 각각의 값에 할당된다.

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;  
  }
}