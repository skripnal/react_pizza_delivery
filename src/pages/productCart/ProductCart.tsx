import { useSelector } from "react-redux";
import CartItems from "./components/CartItems/CartItems";
import CartTitle from "./components/CartTitle/CartTitle";
import CartTotal from "./components/CartTotal/CartTotal";
import styles from "./ProductCart.module.scss";
import EmptyCart from "./components/EmptyCart/EmptyCart";
import { selectCartItems } from "../../redux/slices/cartSlice";

const ProductCart: React.FC = () => {
  const items = useSelector(selectCartItems);

  return (
    <div className={styles.container}>
      {items.length ? (
        <div>
          <CartTitle />
          <CartItems />
          <CartTotal />
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default ProductCart;
