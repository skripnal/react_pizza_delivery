import { useSelector } from "react-redux";

import CartItem from "../CartItem/CartItem";
import styles from "./CartItems.module.scss";
import { selectCartItems } from "../../../../redux/slices/cartSlice";

const CartItems = () => {
  const items = useSelector(selectCartItems);

  return (
    <div className={styles.root}>
      {items.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
    </div>
  );
};

export default CartItems;
