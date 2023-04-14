import * as TYPES from './types';
import {action} from 'typesafe-actions';

export const getExpressionsFetching = () =>
  action(TYPES.CalculatorActionsConst.GET_EXPRESSIONS_FETCHING);

export const getExpressionsFullfiled = (data: TYPES.Expression[]) =>
  action(TYPES.CalculatorActionsConst.GET_EXPRESSIONS_FULLFILED, data);

export const getExpressionsReject = (data: string) =>
  action(TYPES.CalculatorActionsConst.GET_EXPRESSIONS_REJECTED, data);

export const addExpressionFetching = () =>
  action(TYPES.CalculatorActionsConst.ADD_EXPRESSION_FETCHING);

export const addExpressionFullfiled = (data: string) =>
  action(TYPES.CalculatorActionsConst.ADD_EXPRESSION_FULLFILED, data);

export const addExpressionRejected = (error: string) =>
  action(TYPES.CalculatorActionsConst.ADD_EXPRESSION_REJECTED, error);

export const editExpressionFetching = () =>
  action(TYPES.CalculatorActionsConst.EDIT_EXPRESSION_FETCHING);

export const editExpressionFullfiled = (data: string) =>
  action(TYPES.CalculatorActionsConst.EDIT_EXPRESSION_FULLFILED, data);

export const editExpressionRejected = (error: string) =>
  action(TYPES.CalculatorActionsConst.EDIT_EXPRESSION_REJECTED, error);

export const deleteExpressionFetching = () =>
  action(TYPES.CalculatorActionsConst.DELETE_EXPRESSION_FETCHING);

export const deleteExpressionFullfiled = (data: string) =>
  action(TYPES.CalculatorActionsConst.DELETE_EXPRESSION_FULLFILED, data);

export const deleteExpressionRejected = (error: string) =>
  action(TYPES.CalculatorActionsConst.DELETE_EXPRESSION_REJECTED, error);
