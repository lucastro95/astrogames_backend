import { store } from '../store';
import { onSnapshot } from 'firebase/firestore';
import { createOrderDocument, getOrders } from '../../firebase/firebase-utils';
import { uuidv4 } from '@firebase/util';

import {
  CREATE_ORDER_FAIL,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_START,
  FETCH_ORDERS_FAIL,
  CLEAR_ERROR,
} from './orders-types';

export const createOrderFail = error => ({
  type: CREATE_ORDER_FAIL,
  payload: error,
});

export const createOrder = orderData => async dispatch => {
  const {
    user: { currentUser },
  } = store.getState();

  try {
    const orderRef = await createOrderDocument({
      ...orderData,
      orderId: uuidv4(),
      userId: currentUser.id,
    });

    onSnapshot(orderRef, _snapShot => {
      dispatch(getFullOrders(currentUser.id));
    });
  } catch (error) {
    dispatch(createOrderFail(error));
  }
};

export const getOrdersSuccess = orders => ({
  type: FETCH_ORDERS_SUCCESS,
  payload: orders,
});

export const getOrdersStart = () => ({
  type: FETCH_ORDERS_START,
});

export const getOrdersFail = error => ({
  type: FETCH_ORDERS_FAIL,
  payload:
    error ||
    'Algo salío mal. No puede haber ordenes sin usuario.',
});

export const getFullOrders = userId => async dispatch => {
  const {
    orders: { orders: currentOrdersInRedux },
  } = store.getState();

  dispatch(getOrdersStart());
  try {
    const orders = await getOrders(
      userId,
      currentOrdersInRedux,
      dispatch,
      getFullOrders
    );
    dispatch(getOrdersSuccess(orders));
  } catch (error) {
    dispatch(getOrdersFail(error.message));
  }
};

export const clearError = () => ({
  type: CLEAR_ERROR,
});