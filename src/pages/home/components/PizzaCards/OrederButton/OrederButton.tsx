import styles from "./OrederButton.module.scss";

interface Props {
  onClick: () => void;
  price: number;
  count: number;
}

const OrederButton: React.FC<Props> = ({ onClick, price, count }) => {
  return (
    <div className={styles.wrapper}>
      <p>{price.toFixed(2)} $</p>
      <button onClick={onClick}>
        <span>+</span> Add to cart
        {!!count && <p className={styles.counter}>{count}</p>}
      </button>
    </div>
  );
};

export default OrederButton;
