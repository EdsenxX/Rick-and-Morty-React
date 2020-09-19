import React from "react";

import styles from "./header.module.scss";

function Header(props) {
  return (
    <div className={styles.header}>
      <img src="/images/logo.png" alt="logo" />
    </div>
  );
}

export default Header;
