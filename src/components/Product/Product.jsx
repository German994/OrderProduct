import styles from "./Product.module.css";

const Product = ({ foods, onProductClick }) => {
  return (
    <div>
      <ul className={styles.foodsList}>
        {foods.map((food) => {
          return (
            <li key={food.id}>
              <div
                className={styles.foodCard}
                onClick={() => onProductClick(food)}
              >
                <span className={styles.foodName}>{food.name}</span>
                <span className={styles.foodPrice}>${food.price}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Product;
