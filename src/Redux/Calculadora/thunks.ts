import * as ACTIONS from './actions';
import instance from '../../helpers/axiosConfig';
import {Expression} from './types';

export const getExpressions: any = () => async (dispatch: any) => {
  dispatch(ACTIONS.getExpressionsFetching());
  try {
    const response: any = await instance.get('/expressions');
    return dispatch(ACTIONS.getExpressionsFullfiled(response.data));
  } catch (error: any) {
    return dispatch(ACTIONS.getExpressionsReject(error));
  }
};

export const addExpression: any =
  (expression: Expression) => async (dispatch: any) => {
    dispatch(ACTIONS.addExpressionFetching());
    try {
      const response = await instance.post('/expressions', expression);
      return dispatch(ACTIONS.addExpressionFullfiled(response.data));
    } catch (error: any) {
      return dispatch(ACTIONS.addExpressionRejected(error));
    }
  };

export const editExpression: any =
  (id: string, expression: string) => async (dispatch: any) => {
    dispatch(ACTIONS.editExpressionFetching());
    try {
      const response: any = await instance.put(`/expressions/${id}`, {
        expression,
      });
      return dispatch(ACTIONS.editExpressionFullfiled(response.data));
    } catch (error: any) {
      return dispatch(ACTIONS.editExpressionRejected('Hubo un error'));
    }
  };

export const deleteExpression = (id: string) => async (dispatch: any) => {
  dispatch(ACTIONS.deleteExpressionFetching());
  try {
    const response: any = await instance.delete(`/expressions/${id}`);
    return dispatch(ACTIONS.deleteExpressionFullfiled(response.data));
  } catch (error: any) {
    return dispatch(ACTIONS.deleteExpressionRejected(error));
  }
};