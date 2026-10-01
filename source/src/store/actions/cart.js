import { createAction } from '@store/utils';

export const addToCart = createAction('cart/ADD_ITEM');
export const removeFromCart = createAction('cart/REMOVE_ITEM');
export const updateQuantity = createAction('cart/UPDATE_QTY');
export const clearCart = createAction('cart/CLEAR');
export const toggleCart = createAction('cart/TOGGLE');
export const setCartOpen = createAction('cart/SET_OPEN');

export const actions = {
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
    setCartOpen,
};
