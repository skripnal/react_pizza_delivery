import styles from "./SortingPopup.module.scss";
import { sortList } from "../../../../enums/enums";

interface Props {
  onClick: (el: string) => void;
}

const SortingPopup: React.FC<Props> = ({ onClick }) => {
  return (
    <ul className={styles.container} onClick={(e) => e.stopPropagation()}>
      {sortList.map((el, index) => (
        <li onClick={() => onClick(el)} key={index}>
          {el}
        </li>
      ))}
    </ul>
  );
};

export default SortingPopup;
