import styles from "./PizzaCards.module.scss";

import PizzaCard from "./PizzaCard/PizzaCard";
import Skeleton from "./PizzaCard/Skeleton";

import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { useGetPizzasQuery } from "../../../../services/pizzaService";

const PizzaCards = () => {
  const { category, sortBy, searchBy } = useSelector(
    (state: RootState) => state.filterSlice
  );

  const { data: pizzas, isLoading } = useGetPizzasQuery({
    category,
    sortBy,
    searchBy,
  });

  if (isLoading)
    return (
      <div className={styles.container}>
        {[...new Array(6)].map((_, index) => (
          <Skeleton key={index} />
        ))}
      </div>
    );

  if (pizzas)
    return (
      <div className={styles.container}>
        {pizzas.map((pizza) => (
          <PizzaCard pizza={pizza} key={pizza.id} />
        ))}
      </div>
    );

  return (
    <div className={styles.container}>
      <div>Error</div>
    </div>
  );
};

export default PizzaCards;
