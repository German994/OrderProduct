import "./Products.module.css";
const FOODS = [
  { id: "0", name: "🍔", price: "120", quantity: "0" },
  { id: "1", name: "🍕", price: "180", quantity: "0" },
  { id: "2", name: "🍟", price: "80", quantity: "0" },
  { id: "3", name: "🌭", price: "65", quantity: "0" },
  { id: "4", name: "🍿", price: "50", quantity: "0" },
  { id: "5", name: "🥞", price: "60", quantity: "0" },
  { id: "6", name: "🍗", price: "110", quantity: "0" },
  { id: "7", name: "🥟", price: "55", quantity: "0" },
  { id: "8", name: "🍜", price: "105", quantity: "0" },
];
const Products = () => {
  return (
    <div>
      <h1>Foods Menu</h1>
      <ul>
        {FOODS.map((food) => {
          return (
            <div key={food.id}>
              <li>{food.name}</li>
              <span>${food.price}</span>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
