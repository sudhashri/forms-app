export class Employee {
  constructor(
    public firstName: string,
    public lastName: string,
    public type: string,
    public paymentType: string,
    public primaryLang: string,
    public doj: Date
  ) { }
}
