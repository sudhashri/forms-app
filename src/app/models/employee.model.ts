export class Employee {
  constructor(
    public firstName: string,
    public lastName: string,
    public isFullTime: boolean,
    public paymentType: string,
    public primaryLang: string
  ) { }
}