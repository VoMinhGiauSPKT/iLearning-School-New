import React, { useEffect } from 'react';
import {
    LuArrowRight,
    LuMinus,
    LuPlus,
    LuShoppingBag,
    LuTrash2,
    LuX,
} from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import cartSelectors from '@selectors/cart';
import { cartActions } from '@store/actions';
import { toast } from 'sonner';

import styles from './CartDrawer.module.scss';

const CartDrawer = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(cartSelectors.selectIsCartOpen);
    const cartItems = useSelector(cartSelectors.selectCartItems);
    const totalCount = useSelector(cartSelectors.selectCartTotalCount);
    const formattedTotalAmount = useSelector(cartSelectors.selectCartFormattedTotalPrice);

    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
            const handleKeyDown = (e) => {
                if (e.key === 'Escape') {
                    dispatch(cartActions.setCartOpen(false));
                }
            };
            window.addEventListener('keydown', handleKeyDown);
            return () => {
                document.body.style.overflow = '';
                window.removeEventListener('keydown', handleKeyDown);
            };
        } else {
            document.body.style.overflow = '';
        }
    }, [ isCartOpen, dispatch ]);

    if (!isCartOpen) return null;

    const handleClose = () => {
        dispatch(cartActions.setCartOpen(false));
    };

    const handleIncrease = (id) => {
        dispatch(cartActions.updateQuantity({ id, delta: 1 }));
    };

    const handleDecrease = (id) => {
        dispatch(cartActions.updateQuantity({ id, delta: -1 }));
    };

    const handleRemove = (id) => {
        dispatch(cartActions.removeFromCart(id));
    };

    const handleClear = () => {
        dispatch(cartActions.clearCart());
    };

    const handleExplore = () => {
        handleClose();
        const element = document.getElementById('courses');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleCheckout = () => {
        toast.success(`Chức năng thanh toán cho đơn hàng ${formattedTotalAmount} đang được xử lý!`);
    };

    return (
        <div className={styles.cartDrawerOverlay}>
            <div className={styles.cartBackdrop} onClick={handleClose} aria-hidden="true" />
            <aside className={styles.cartPanel} role="dialog" aria-modal="true" aria-label="Giỏ hàng">
                {/* Header */}
                <div className={styles.cartHeader}>
                    <div className={styles.cartHeaderTitleWrap}>
                        <LuShoppingBag size={22} className={styles.cartHeaderIcon} />
                        <h2 className={styles.cartTitle}>Giỏ hàng của bạn</h2>
                        {totalCount > 0 && <span className={styles.cartCountBadge}>{totalCount}</span>}
                    </div>
                    <button
                        type="button"
                        className={styles.cartCloseBtn}
                        onClick={handleClose}
                        aria-label="Đóng giỏ hàng"
                    >
                        <LuX size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className={styles.cartBody}>
                    {cartItems.length === 0 ? (
                        <div className={styles.cartEmptyState}>
                            <div className={styles.emptyIconWrap}>
                                <LuShoppingBag size={48} />
                            </div>
                            <h3 className={styles.emptyTitle}>Giỏ hàng trống</h3>
                            <p className={styles.emptyDesc}>
                                Bạn chưa thêm khóa học nào vào giỏ hàng. Hãy khám phá các khóa học thực chiến tại iLearning!
                            </p>
                            <button
                                type="button"
                                className={styles.exploreCoursesBtn}
                                onClick={handleExplore}
                            >
                                Khám phá khóa học <LuArrowRight size={18} />
                            </button>
                        </div>
                    ) : (
                        <ul className={styles.cartItemsList}>
                            {cartItems.map((item) => (
                                <li key={item.id} className={styles.cartItem}>
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className={styles.cartItemThumbnail}
                                    />
                                    <div className={styles.cartItemInfo}>
                                        <h4 className={styles.cartItemTitle}>{item.title}</h4>
                                        <div className={styles.cartItemPrice}>{item.price}</div>
                                        <div className={styles.cartItemActions}>
                                            <div className={styles.qtyControl}>
                                                <button
                                                    type="button"
                                                    className={styles.qtyBtn}
                                                    onClick={() => handleDecrease(item.id)}
                                                    aria-label="Giảm số lượng"
                                                >
                                                    <LuMinus size={14} />
                                                </button>
                                                <span className={styles.qtyValue}>{item.quantity}</span>
                                                <button
                                                    type="button"
                                                    className={styles.qtyBtn}
                                                    onClick={() => handleIncrease(item.id)}
                                                    aria-label="Tăng số lượng"
                                                >
                                                    <LuPlus size={14} />
                                                </button>
                                            </div>
                                            <button
                                                type="button"
                                                className={styles.removeItemBtn}
                                                onClick={() => handleRemove(item.id)}
                                                aria-label={`Xóa ${item.title}`}
                                            >
                                                <LuTrash2 size={15} /> Xóa
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className={styles.cartFooter}>
                        <div className={styles.cartSubtotalRow}>
                            <span className={styles.subtotalLabel}>Tổng cộng ({totalCount} khóa học):</span>
                            <span className={styles.subtotalAmount}>{formattedTotalAmount}</span>
                        </div>
                        <div className={styles.cartCheckoutActions}>
                            <button
                                type="button"
                                className={styles.checkoutBtn}
                                onClick={handleCheckout}
                            >
                                Tiến hành thanh toán
                            </button>
                            <button
                                type="button"
                                className={styles.clearCartBtn}
                                onClick={handleClear}
                            >
                                Xóa tất cả
                            </button>
                        </div>
                    </div>
                )}
            </aside>
        </div>
    );
};

export default CartDrawer;
