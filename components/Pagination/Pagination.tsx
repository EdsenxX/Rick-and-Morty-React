//Dependencies
import React from "react";
//Assets
import styles from "./Pagination.module.scss";

function Pagination(props): JSX.Element {
  const pages = [];

  Array.from(Array(props.totalPages)).map((_, i) => {
    pages.push(
      <li
        className={
          props.currentPage !== i
            ? styles.list_element
            : styles.list_current_element
        }
        key={i}
        onClick={() => props.changePage(i)}
      >
        {i + 1}
      </li>
    );
  });

  return (
    <nav className={styles.pagination}>
      <ul className={styles.pagination_list}>{pages}</ul>
    </nav>
  );
}

export default Pagination;
