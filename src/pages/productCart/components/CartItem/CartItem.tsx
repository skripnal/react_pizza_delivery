import { IoClose } from "react-icons/io5";

import styles from "./CartItem.module.scss";
import { useDispatch } from "react-redux";
import {
  addItem,
  minusItem,
  removeItem,
} from "../../../../redux/slices/cartSlice";
import type { CartItem } from "../../../../types/types";
import { AppDispatch } from "../../../../redux/store";

interface Props {
  item: CartItem;
}

const CartItem: React.FC<Props> = ({ item }) => {
  const { id, title, price, imageUrl, type, size, count } = item;
  const dispatch = useDispatch<AppDispatch>();

  const onClickMinus = () => {
    dispatch(minusItem({ id, type, size }));
  };

  const onClickPlus = () => {
    dispatch(addItem({ id, type, size }));
  };

  const onRemoveItem = () => {
    dispatch(removeItem({ id, type, size }));
  };

  return (
    <div className={styles.root}>
      <div className={styles.itemInfo}>
        <img src={imageUrl} alt={"Photo of pizza " + id} />
        <div>
          <h2>{title}</h2>
          <p>{`${type}, ${size}sm.`}</p>
        </div>
      </div>
      <div className={styles.itemControls}>
        <div className={styles.itemCounter}>
          <button onClick={onClickMinus}>-</button>
          <p>{count}</p>
          <button onClick={onClickPlus}>+</button>
        </div>
        <p className={styles.price}>{(price * count).toFixed(2)}$</p>
        <button className={styles.deleteItem} onClick={onRemoveItem}>
          <IoClose />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
