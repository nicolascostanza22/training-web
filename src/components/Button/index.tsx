import React from "react";
import styles from "./styles.module.css";

interface Props {
  toShow: string;
  isOperation: boolean;
  handleOnPress: (toShow: string, isOperation: boolean) => void;
  style?: any;
}

const Button: React.FC<Props> = ({
  toShow,
  isOperation,
  handleOnPress,
  style,
}) => {
  console.log("style", style);
  const onPress = () => handleOnPress(toShow, isOperation);
  return (
    <button
      className={
        style && style === "bigButtonStyle" ? styles.bigButtonStyle : style === 'equalButton' ? styles.equalButton : styles.buttonBase
      }
      onClick={onPress}
    >
      {toShow}
    </button>
  );
};

export default Button;
