export class Customer {

    constructor({id, name_c, city, active}) {
        this.id = id ? id : 0;
        this.name_c = name_c;
        this.city = city;
        this.active = active;
      }
}

// var customer = new Customer(name_c="teste", city="teste2", active=true);