import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';

export const logoutAction = createAction(ActionTypes.LOGOUT);

export const cleanValidationErrorAction = createAction(
  ActionTypes.CLEAN_VALIDATION_ERRORS
  //   ,
  //   props<{ selectorName: string }>() // e.g, validationErrorsSelector, because if an error is already selected and showed, it should be cleared
);
