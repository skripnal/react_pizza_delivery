import { useState } from "react";
import styles from "./PizzaCard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  selectCartGroupItems,
} from "../../../../../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import OrederButton from "../OrederButton/OrederButton";
import { Pizza } from "../../../../../types/types";

interface Props {
  pizza: Pizza;
}

const PizzaCard: React.FC<Props> = ({ pizza }) => {
  const { id, title, price, imageUrl, sizes, types } = pizza;
  const [curentType, setCurentType] = useState(types[0]);
  const [curentSize, setCurentSize] = useState(sizes[0]);

  const dispatch = useDispatch();

  const count = useSelector(selectCartGroupItems(id));

  const addToCart = () => {
    dispatch(
      addItem({
        id,
        title,
        price,
        imageUrl,
        type: curentType,
        size: curentSize,
      })
    );
  };

  return (
    <div className={styles.card}>
      <Link to={`/pizzas/${id}`}>
        <img src={imageUrl} alt="" />
      </Link>
      <h2>{title}</h2>
      <div className={styles.options}>
        <ul>
          {types.map((type) => (
            <li
              className={curentType === type ? styles.active : undefined}
              key={type}
              onClick={() => setCurentType(type)}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size) => (
            <li
              className={curentSize === size ? styles.active : undefined}
              key={size}
              onClick={() => setCurentSize(size)}
            >
              {size} sm.
            </li>
          ))}
        </ul>
      </div>
      <OrederButton onClick={addToCart} price={price} count={count} />
    </div>
  );
};

export default PizzaCard;
