export class Order {
  constructor(
    public number:string,
    public product:string,
    public quantity:string,
    public weight:string,
    public shipping_date:string
  ) {
  }
}
