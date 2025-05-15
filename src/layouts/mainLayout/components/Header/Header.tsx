import { IoIosSearch } from "react-icons/io";
import { MdClear } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useCallback, useRef, useState } from "react";

import icon from "../../../../assets/pizza-svgrepo-com.svg";
import debounce from "lodash.debounce";
import { setSearchBy } from "../../../../redux/slices/filterSlice";
import {
  selectCartItems,
  selectTotalPrice,
} from "../../../../redux/slices/cartSlice";
import CartCoutButton from "../CartCoutButton/CartCoutButton";
import styles from "./Header.module.scss";
import { RoutesEnum } from "../../../../enums/routing";

const Header: React.FC = () => {
  const items = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);

  const totalCount = items.reduce((sum: number, item) => {
    return sum + item.count;
  }, 0);

  const location = useLocation();

  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const [inputValue, setInputValue] = useState("");

  const clearInput = () => {
    setInputValue("");
    testDebounce("");
    inputRef.current?.focus();
  };

  const testDebounce = useCallback(
    debounce((str) => {
      dispatch(setSearchBy(str));
      console.log(str);
    }, 500),
    []
  );

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    testDebounce(e.target.value);
  };

  return (
    <header className={styles.header}>
      <Link to={RoutesEnum.BASEURL}>
        <div className={styles.title}>
          <img src={icon} alt="" />
          <div>
            <h2>Pizza</h2>
            <p>the most delicious pizza</p>
          </div>
        </div>
      </Link>
      {location.pathname === `${RoutesEnum.BASEURL}/` ? (
        <div className={styles.search}>
          <IoIosSearch
            onClick={() => inputRef.current?.focus()}
            className={styles.searchIcon}
          />

          <input
            ref={inputRef}
            value={inputValue}
            type="text"
            onChange={changeInput}
            className={styles.input}
            placeholder="Search pizza"
          />
          {inputValue && (
            <MdClear onClick={clearInput} className={styles.clearIcon} />
          )}
        </div>
      ) : (
        <div></div>
      )}
      <CartCoutButton totalCount={totalCount} totalPrice={totalPrice} />
    </header>
  );
};

export default Header;
