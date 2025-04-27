import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";

import styles from "./CartCoutButton.module.scss";

interface Props {
  totalPrice: number;
  totalCount: number;
}

const CartCoutButton: React.FC<Props> = ({ totalPrice, totalCount }) => {
  return (
    <Link to={"/cart"}>
      <div className={styles.cart}>
        <p>{totalPrice.toFixed(2)} $</p>
        <div className={styles.separator}></div>
        <div className={styles.price}>
          <TiShoppingCart />
          <p className={styles.count}>{totalCount}</p>
        </div>
      </div>
    </Link>
  );
};

export default CartCoutButton;
