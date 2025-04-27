import { useState } from "react";
import styles from "./ProductDetailCard.module.scss";
import { Pizza } from "../../../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import {
  addItem,
  selectCartGroupItems,
} from "../../../../redux/slices/cartSlice";
import OrederButton from "../../../home/components/PizzaCards/OrederButton/OrederButton";
import { AppDispatch } from "../../../../redux/store";

interface Props {
  item: Pizza;
}

const ProductDetailCard: React.FC<Props> = ({ item }) => {
  const { id, title, price, imageUrl, sizes, types } = item;
  const [curentType, setCurentType] = useState(types[0]);
  const [curentSize, setCurentSize] = useState(sizes[0]);
  const count = useSelector(selectCartGroupItems(id));
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

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
    <div className={styles.wrapper}>
      <button onClick={() => navigate(-1)}>
        <IoIosArrowBack />
        Go back
      </button>
      <div className={styles.pizza}>
        <img src={imageUrl} alt="" />
        <div className={styles.description}>
          <div className={styles.description__top}>
            <h2>{title}</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              hic beatae necessitatibus! Explicabo, deleniti. Tempore voluptate
              nesciunt totam porro in. Obcaecati libero doloribus voluptate
              voluptatum sint, minima ducimus a, dolor, sapiente modi nisi
              eligendi labore quisquam laborum vero iusto. Aspernatur veniam
              alias dicta eos, ut perferendis neque fugiat omnis velit cumque
              similique eaque molestiae deserunt quos accusantium sit vel
              mollitia! Voluptatibus ipsa eius architecto nesciunt sunt
              molestiae sint tempore quos laborum, maxime corrupti ipsam quod
              placeat consequatur dignissimos sapiente perferendis recusandae
              distinctio repellendus nobis quam, fugit rem beatae voluptatum?
              Eius, laborum debitis? Quisquam molestias provident inventore
              aliquid amet dolorem placeat?
            </p>
          </div>
          <div className={styles.description__bottom}>
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
