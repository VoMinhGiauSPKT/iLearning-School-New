import { actions } from '@store/actions/cart';
import { createReducer } from '@store/utils';

const initialState = {
    items: [],
    isCartOpen: false,
};

const cartReducer = createReducer(
    {
        reducerName: 'cart',
        initialState,
        storage: {
            key: 'ilearning-cart-items',
            whiteList: [ 'items' ],
        },
    },
    {
        [actions.addToCart.type]: (state, { payload }) => {
            if (!payload || !payload.id) return;
            const existingIndex = state.items.findIndex((item) => item.id === payload.id);
            if (existingIndex > -1) {
                state.items[existingIndex].quantity += 1;
            } else {
                state.items.push({
                    ...payload,
                    quantity: payload.quantity || 1,
                });
            }
            state.isCartOpen = true;
        },

        [actions.removeFromCart.type]: (state, { payload }) => {
            const id = payload?.id || payload;
            state.items = state.items.filter((item) => item.id !== id);
        },

        [actions.updateQuantity.type]: (state, { payload }) => {
            const { id, delta } = payload || {};
            const targetItem = state.items.find((item) => item.id === id);
            if (targetItem) {
                targetItem.quantity += delta;
                if (targetItem.quantity <= 0) {
                    state.items = state.items.filter((item) => item.id !== id);
                }
            }
        },

        [actions.clearCart.type]: (state) => {
            state.items = [];
        },

        [actions.toggleCart.type]: (state) => {
            state.isCartOpen = !state.isCartOpen;
        },

        [actions.setCartOpen.type]: (state, { payload }) => {
            state.isCartOpen = !!payload;
        },
    },
);

export default cartReducer;
