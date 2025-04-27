import { useDispatch, useSelector } from "react-redux";

import {
  selectCategory,
  setCategory,
} from "../../../../redux/slices/filterSlice";

import styles from "./Categories.module.scss";

import { categoryList } from "../../../../enums/enums";
import { AppDispatch } from "../../../../redux/store";

const Categories = () => {
  const category = useSelector(selectCategory);
  const dispatch = useDispatch<AppDispatch>();
  console.log("category render");
  return (
    <div className={styles.categories}>
      <ul>
        {categoryList.map((item, index) => {
          return category === index ? (
            <li className={styles.active} key={index}>
              {item}
            </li>
          ) : (
            <li key={index} onClick={() => dispatch(setCategory(index))}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
