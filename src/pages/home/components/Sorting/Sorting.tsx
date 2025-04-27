import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

import SortingPopup from "./SortingPopup";
import { selectSortBy, setSortBy } from "../../../../redux/slices/filterSlice";
import styles from "./Sorting.module.scss";
import { AppDispatch } from "../../../../redux/store";

const Sorting = () => {
  const sortBy = useSelector(selectSortBy);
  const [isOpen, setIsOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        console.log("click outside");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleOnClick = (el: string) => {
    setIsOpen(false);
    console.log("click on popup");
    dispatch(setSortBy(el));
  };

  return (
    <div className={styles.container}>
      {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      <div>
        sort by:{" "}
        <span
          ref={sortRef}
          onClick={() => {
            console.log("click on span");
            setIsOpen(true);
          }}
        >
          {sortBy}
          {isOpen && <SortingPopup onClick={handleOnClick} />}
        </span>
      </div>
    </div>
  );
};

export default Sorting;
