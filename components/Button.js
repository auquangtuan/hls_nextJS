import React from "react";
import styles from "@/styles/Button.module.scss";
const Button = ({ className, content, primary, secondary, color, onClick }) => {
  return (
    <button
      className={`${styles.buttonComponent} ${className}`}
      style={{
        backgroundColor: ` ${
          primary
            ? "var(--background-primary)"
            : secondary
            ? "var(--background-secondary)"
            : color
        }`,
      }}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
