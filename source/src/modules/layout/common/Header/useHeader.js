import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cartSelectors from '@selectors/cart';
import { cartActions } from '@store/actions';

export const defaultNavLinks = [
    { label: 'Trang chủ', href: '#' },
    { label: 'Khoá học', href: '#courses', hasDropdown: true },
    { label: 'Góc học viên', href: '#testimonials' },
    { label: 'Giới thiệu', href: '#instructors' },
    { label: 'Đối tác', href: '#partners' },
    { label: 'Blog', href: '#blog' },
];

export const useHeader = ({ navLinks = defaultNavLinks } = {}) => {
    const dispatch = useDispatch();
    const [ searchQuery, setSearchQuery ] = useState('');
    const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);
    const totalCount = useSelector(cartSelectors.selectCartTotalCount);

    const handleToggleCart = () => {
        dispatch(cartActions.toggleCart());
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleOpenMenu = () => {
        setMobileMenuOpen(true);
    };

    const handleCloseMenu = () => {
        setMobileMenuOpen(false);
    };

    return {
        navLinks,
        searchQuery,
        setSearchQuery,
        handleSearchChange,
        totalCount,
        handleToggleCart,
        mobileMenuOpen,
        setMobileMenuOpen,
        handleOpenMenu,
        handleCloseMenu,
    };
};

export default useHeader;
