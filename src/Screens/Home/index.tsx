import React, { useState } from "react";
import styles from "./styles.module.css";
import Keyboard from "../../components/Keyboard";
import { handleOnPress } from "./utils";
import { useDispatch } from "react-redux";
import { addExpression } from "../../Redux/Calculadora/thunks";
import { useNavigate } from "react-router-dom";

function Home(): JSX.Element {
  const navigate = useNavigate();
  const [firstNumber, setFirstNumber] = useState<string>("");
  const [secondNumber, setSecondNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [operation, setOperation] = useState<string>("");
  const [result, setResult] = useState<number>(0);
  const [expression, setExpression] = useState<string>("");
  const dispatch = useDispatch();

  const onPress = (toShow: string, isOperation: boolean) =>
    handleOnPress(
      toShow,
      isOperation,
      firstNumber,
      setFirstNumber,
      secondNumber,
      setSecondNumber,
      operation,
      setOperation,
      setResult,
      setMessage,
      setExpression
    );

  const onPressHistory = () => {
    navigate("/history");
  };

  const onPressSave: any = async () => {
    try {
      setMessage("Cargando...");
      await dispatch(
        addExpression({
          id: Math.random().toString(),
          expression,
        })
      );
      setMessage("Expresión guardada");
      setTimeout(() => {
        setMessage('')
      }, 2000);
    } catch (error: any) {
      setMessage("Ocurrio un error");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerButton}>
        <button className={styles.backButton} onClick={onPressSave}>
          Guardar
        </button>
        <button className={styles.backButton} onClick={onPressHistory}>
          Historial
        </button>
      </div>
      <div className={styles.calculator}>
        <div className={styles.header}>
          <p
            className={styles.text}
          >{`${firstNumber} ${operation} ${secondNumber}`}</p>
          <div className={styles.resultContainer}>
            <p className={`${styles.text} ${styles.result}`}>{result}</p>
            <p className={`${styles.text} ${styles.errorMessage}`}>{message}</p>
          </div>
        </div>
        <Keyboard handleOnPress={onPress} />
      </div>
    </div>
  );
}

export default Home;
