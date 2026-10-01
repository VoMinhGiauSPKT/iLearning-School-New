import { formatPrice } from '@utils/ilearningAdapters';
import { createSelector } from 'reselect';

export const selectCartState = (state) => state.cart || { items: [], isCartOpen: false };

export const selectCartItems = createSelector(
    [ selectCartState ],
    (cart) => cart.items || [],
);

export const selectIsCartOpen = createSelector(
    [ selectCartState ],
    (cart) => !!cart.isCartOpen,
);

export const selectCartTotalCount = createSelector(
    [ selectCartItems ],
    (items) => items.reduce((sum, item) => sum + (item.quantity || 0), 0),
);

export const selectCartTotalPrice = createSelector(
    [ selectCartItems ],
    (items) =>
        items.reduce(
            (sum, item) => sum + (Number(item.numericPrice) || 0) * (item.quantity || 0),
            0,
        ),
);

export const selectCartFormattedTotalPrice = createSelector(
    [ selectCartTotalPrice ],
    (total) => formatPrice(total),
);

const cartSelectors = {
    selectCartState,
    selectCartItems,
    selectIsCartOpen,
    selectCartTotalCount,
    selectCartTotalPrice,
    selectCartFormattedTotalPrice,
};

export default cartSelectors;
