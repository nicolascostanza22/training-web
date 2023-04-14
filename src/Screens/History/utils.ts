import {
  deleteExpression,
  editExpression,
} from "../../Redux/Calculadora/thunks";
import { Expression } from "../../Redux/Calculadora/types";

const handleEdit = (data: Expression, dispatch: any) => {
  dispatch(editExpression(data));
};

const handleDelete = (id: string, dispatch: any) => {
  dispatch(deleteExpression(id));
};

export { handleEdit, handleDelete };
