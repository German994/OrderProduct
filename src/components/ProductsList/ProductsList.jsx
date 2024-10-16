import Product from "../Product/Product";
import styles from "./ProductsList.module.css";

const FOODS = [
  { id: "0", name: "🍔", price: "120", quantity: "0", stock: "10" },
  { id: "1", name: "🍕", price: "180", quantity: "0", stock: "3" },
  { id: "2", name: "🍟", price: "80", quantity: "0", stock: "14" },
  { id: "3", name: "🌭", price: "65", quantity: "0", stock: "8" },
  { id: "4", name: "🍿", price: "50", quantity: "0", stock: "15" },
  { id: "5", name: "🥞", price: "60", quantity: "0", stock: "5" },
  { id: "6", name: "🍗", price: "110", quantity: "0", stock: "4" },
  { id: "7", name: "🥟", price: "55", quantity: "0", stock: "7" },
  { id: "8", name: "🍜", price: "105", quantity: "0", stock: "14" },
  { id: "9", name: "🥩", price: "175", quantity: "0", stock: "3" },
];

const ProductsList = ({ onProductList }) => {
  return (
    <div className={styles.products}>
      <h1 className={styles.productTitle}>Add to your order:</h1>
      <Product foods={FOODS} onProductClick={onProductList} />
    </div>
  );
};

export default ProductsList;
