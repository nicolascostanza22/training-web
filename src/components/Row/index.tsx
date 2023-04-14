import React, { useState } from "react";
import styles from "./styles.module.css";
import { Expression } from "../../Redux/Calculadora/types";
import { useDispatch } from "react-redux";

interface Props {
  expression: Expression;
  handleEdit: (data: Expression, dispatch: any) => void;
  handleDelete: (id: string, dispatch: any) => void;
}

const Row: React.FC<Props> = ({
  expression: { expression, id },
  handleEdit,
  handleDelete,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const [newExpression, setNewExpression] = useState<string>("");
  const dispatch = useDispatch();
  return (
    <div>
      {showModal && (
        <div>
          <div className={styles.modalContainer}>
            <p className={`${styles.text} ${styles.title}`}>
              {isEditing ? "Editar" : "Eliminar"}
            </p>
            <div className={styles.modalMessage}>
              {isEditing ? (
                <p className={styles.text}>Expresion previa {expression}</p>
              ) : (
                <>
                  <p className={styles.text}>
                    Seguro que desea eliminar la expresion
                  </p>
                  <p className={`${styles.text} ${styles.expression}`}>
                    {expression}
                  </p>
                </>
              )}
              {isEditing && (
                <input
                  className={`${styles.text} ${styles.inputExpression}`}
                  onChange={(e) => setNewExpression(e.target.value)}
                  value={newExpression}
                />
              )}
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.actionButtons}
                onClick={() => {
                  isEditing
                    ? handleEdit({ id, expression: newExpression }, dispatch)
                    : handleDelete(id, dispatch);
                  setShowModal(false);
                }}
              >
                {isEditing ? "Editar" : "Eliminar"}
              </button>
              <button
                className={styles.actionButtons}
                onClick={() => {
                  setNewExpression("");
                  setShowModal(false);
                }}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
      <div className={styles.container}>
        <p className={styles.text}>{expression}</p>
        <div className={styles.showModalButtons}>
          <button
            onClick={() => {
              setIsEditing(true);
              setShowModal(true);
            }}
          >
            Editar
          </button>
          <button
            onClick={() => {
              setIsEditing(false);
              setShowModal(true);
            }}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Row;
