import * as productsJson from "./products.json";

// Llevó dos dias completarlo

class ListaDeCosas {
  name: string;
  cosas: any[] = [];
  constructor(name: string) {
    // nombre de esta lista
    this.name = name;
    for (let i = 0; i < productsJson.length; i++) {
      const element = productsJson[i];
      this.add(element);
    };
    
  }
  add(nuevaCosa) {
    this.cosas.push(nuevaCosa);
  }
  getCosas() {
    return this.cosas;
  }
}

class Product {
  name: string;
  price: number;
  id: number;
  constructor(name: string, price: number, id: number) {
    this.name = name;
    this.price = price;
    this.id = id;
  }
}

class ListaDeProductos extends ListaDeCosas {
  products: Product[] = [];
  listaDeCosas: [];
  constructor(name:string){
    super(name); 
    for (let i = 0; i < productsJson.length; i++) {
      const element = productsJson[i];
      this.products.push(element);
    };
  };
  addProduct(productToAdd:Product){
      
    for (let i=0; i<=this.products.length; i++) {
      const element = this.products[i];
      if (element.id != productToAdd.id){
        this.products.push(productToAdd);
      } else {
        return "Ya existe un producto con ese ID"
      };
    };
 
  };
  getProduct(id:number):Product{
    const indexProd = this.products.findIndex((x)=>{
      return x.id == id;
    });
    
    const foundProd = this.products[indexProd];
    return foundProd
  };
  removeProduct(id:number){

    this.products.find((x)=>{

      if(x.id == id){
        const product = this.getProduct(x.id);
        const indice = this.products.indexOf(product)
        this.products.splice(indice, indice+1);
    
        return this.products        
      };
    });
  };
  getSortedByPrice(order: "asc"|"desc"){
    switch (order){
      
      case "asc":
        this.products.sort((a,b)=>{
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }else
          // a debe ser igual b
          return 0;
        });
      break;

      case "desc":
        this.products.sort((a,b)=>{
          if (a.price < b.price) {
            return 1;
          }
          if (a.price > b.price) {
            return -1;
          }else
          // a debe ser igual b
          return 0;
        });
      break;
    };

    return this.products
  }
}


export { ListaDeProductos, Product };
