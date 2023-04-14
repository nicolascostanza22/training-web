import {initialState} from './initialState';
import {CalculatorActionsConst} from './types';

const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case CalculatorActionsConst.GET_EXPRESSIONS_FETCHING:
    case CalculatorActionsConst.ADD_EXPRESSION_FETCHING:
    case CalculatorActionsConst.EDIT_EXPRESSION_FETCHING:
    case CalculatorActionsConst.DELETE_EXPRESSION_FETCHING:
      return {
        ...state,
        isFetching: true,
        message: '',
      };
    case CalculatorActionsConst.GET_EXPRESSIONS_FULLFILED:
      return {
        ...state,
        expressions: action.payload,
        isFetching: false,
      };
    case CalculatorActionsConst.ADD_EXPRESSION_FULLFILED:
    case CalculatorActionsConst.EDIT_EXPRESSION_FULLFILED:
    case CalculatorActionsConst.DELETE_EXPRESSION_FULLFILED:
    case CalculatorActionsConst.GET_EXPRESSIONS_REJECTED:
    case CalculatorActionsConst.ADD_EXPRESSION_REJECTED:
    case CalculatorActionsConst.EDIT_EXPRESSION_REJECTED:
    case CalculatorActionsConst.DELETE_EXPRESSION_REJECTED:
      return {
        ...state,
        message: action.payload.message,
        isFetching: false,
      };
    default:
      return {...state};
  }
};

export default reducer;