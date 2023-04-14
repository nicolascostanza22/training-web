import React from "react";
import Button from "../Button";
import styles from "./styles.module.css";
import { BUTTONS } from "../../Screens/Home/utils";

interface Props {
  handleOnPress: (toShow: string, isOperation: boolean) => void;
}

const Keyboard: React.FC<Props> = ({ handleOnPress }) => {
  return (
    <div className={styles.KeyboardContainer}>
      {BUTTONS.map(({ isOperation, toShow, style }) => {
        return (
          <Button
            key={toShow}
            handleOnPress={handleOnPress}
            isOperation={isOperation}
            toShow={toShow}
            style={style}
          />
        );
      })}
    </div>
  );
};

export default Keyboard;
