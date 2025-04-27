import { useParams } from "react-router-dom";
import styles from "./ProductDetail.module.scss";
import { useGetPizzaByIdQuery } from "../../services/pizzaService";
import ProductDetailCard from "./components/ProductDetailCard/ProductDetailCard";

const ProductDetail = () => {
  const params = useParams();

  const { data: pizza, isLoading } = useGetPizzaByIdQuery(Number(params.id));

  if (isLoading) return "Loading...";

  if (pizza)
    return (
      <div className={styles.wrapper}>
        <ProductDetailCard item={pizza[0]} />
      </div>
    );

  return "Error";
};

export default ProductDetail;
