import { Product } from "./model";

export class ProductList {
  list: Product[];

  constructor () {
    this.list = [
      {id: 1, name: "ML", number: 742545.125, checked: false},
      {id: 2, name: "Mq", number: 7499998888, checked: false},
      {id: 3, name: "ML", number: 7464565555, checked: false},
      {id: 4, name: "ML", number: 3333553545, checked: false},
      {id: 5, name: "ML", number: 742545, checked: false},
      {id: 6, name: "Mj", number: 54464654, checked: false},
      {id: 7, name: "Mk", number: 5466456465, checked: false},
      {id: 8, name: "Mu", number: 8254554544, checked: false},
      {id: 9, name: "Mr", number: 7425, checked: false},

    ]
  }

  // getData(): Product[] {
  //   return this.list;
  // }

  // addProduct(item: Product): void {
  //   this.list.push(item)
  // }
  // remuveProduct(item: Product): void{
  //   this.list.splice(this.list.findIndex(item => item.name == name), 1)
  // }

}
