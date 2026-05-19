// Object Constructor — Ek reusable "mould/saancha" hota hai
// Jab same structure ke bahut saare objects banane hon
// tab Constructor use karte hain — har baar naya object
// likhne ki zaroorat nahi padti
// "new" keyword se har baar naya fresh object banta hai
// "this" us waqt banne wale naye object ko refer karta hai
// Constructor function ka naam hamesha Capital letter se likhte hain

function Product(name, price, stock, sku) /* <- Saancha/Mould */ {
  this.name = name; // <- naye object mein property daalo
  this.price = price;
  this.stock = stock;
  this.sku = sku;
}

// new = naya object banao is mould se

let p1 = new Product("iPhone", 3000000, 50, "3jd83021");
let p2 = new Product("Samsung", 5000000, 559, "3jd8e93n021");
let p3 = new Product("Motorola", 3000000, 80, "3jd39d21");
let p4 = new Product("Vivo", 30000, 40, "3jd8349321");

console.table([p1,p2,p3,p4]);