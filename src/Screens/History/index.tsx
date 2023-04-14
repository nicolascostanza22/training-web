import React, { useEffect } from "react";
import Row from "../../components/Row";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getExpressions } from "../../Redux/Calculadora/thunks";
import { handleDelete, handleEdit } from "./utils";
import { useNavigate } from "react-router-dom";

interface Props {
  navigation: any;
}

const HistoryRoutes = ({ navigation }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const expressions = useSelector((state: any) => state.calculator.expressions);

  useEffect(() => {
    dispatch(getExpressions());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <p className={styles.title}>Historial</p>
      {!!expressions.length ? (
        expressions.map(({ expressions, index }) => (
          <Row
            key={index}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            expression={expressions}
          />
        ))
      ) : (
        <p>No hay nada para mostrar</p>
      )}
      <button
        className={styles.backButton}
        onClick={() => {
          navigate("/");
        }}
      >
        Calculadora
      </button>
    </div>
  );
};

export default HistoryRoutes;
