import {HasFormatter} from "../interfaces/HasFormatter.js";

//인터페이스 구현, 인터페이스 구조를 강제함. 
export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number,
  ) {}

  format() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;  
  }
}