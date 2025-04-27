import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "qs";

import { categoryList } from "../../enums/enums";
import Categories from "./components/Categories/Categories";
import Sorting from "./components/Sorting/Sorting";
import PizzaCards from "./components/PizzaCards";
import styles from "./Home.module.scss";
import {
  selectCategory,
  selectSortBy,
  setFilters,
} from "../../redux/slices/filterSlice";
import { AppDispatch } from "../../redux/store";

const Home: React.FC = () => {
  const category = useSelector(selectCategory);
  const sortBy = useSelector(selectSortBy);
  const navigate = useNavigate();

  const isMounted = useRef(false);

  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  useEffect(() => {
    if (isMounted.current) {
      const categoryid = category;
      const queryStr = qs.stringify({
        category: categoryid,
        sortBy,
      });
      navigate(`?${queryStr}`);
    }
    isMounted.current = true;
  }, [category, sortBy]);

  useEffect(() => {
    if (location.search) {
      const params = qs.parse(location.search.substring(1));
      dispatch(setFilters(params));
    }
  }, [location.search]);

  return (
    <div className={styles.container}>
      <div className={styles.categorySort}>
        <Categories />
        <Sorting />
      </div>
      <h2 className={styles.title}>{categoryList[category]} pizzas</h2>
      <PizzaCards />
    </div>
  );
};

export default Home;
