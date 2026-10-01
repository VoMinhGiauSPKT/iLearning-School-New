import { defaultLocale } from '@constants';
import { appActions } from '@store/actions';
import { createReducer } from '@store/utils';

const {
    hideAppLoading,
    showAppLoading,
    toggleActionLoading,
    changeLanguage,
    showAppCartModal,
    hideAppCartModal,
    showCollapse,
    hideCollapse,
    setRestaurantId,
    setSubjectList,
    appendSubjectList,
    setSearchQuerySubject,
    setIsSearchingSubject,
    setClassroomList,
    appendClassroomList,
    setSearchQueryClassroom,
    setIsSearchingClassroom,
    setCareerPathList,
    appendCareerPathList,
    setRecommendedCareerPathList,
    appendRecommendedCareerPathList,
    setPublicClassroomList,
    appendPublicClassroomList,
    setSearchQueryPublicClassroom,
    setIsSearchingPublicClassroom,
    setPublicCareerPathList,
    appendPublicCareerPathList,
    setScrollPosition,
    clearScrollPosition,
    clearAppData,
    setContactInfo,
} = appActions;

const initialState = {
    appLoading: 0,
    locale: defaultLocale,
    siteInfo: null,
    cartModal: false,
    cartProduct: {},
    listSubject: {
        content: [],
        currentPage: 0,
        totalPages: 0,
        searchQuery: '',
        isSearching: false,
    },
    listClassroom: {
        content: [],
        currentPage: 0,
        totalPages: 0,
        searchQuery: '',
        isSearching: false,
    },
    listCareerPath: {
        content: [],
        currentPage: 0,
        totalPages: 0,
    },
    listRecommendedCareerPath: {
        content: [],
        currentPage: 0,
        totalPages: 0,
    },
    listPublicClassroom: {
        content: [],
        currentPage: 0,
        totalPages: 0,
        searchQuery: '',
        isSearching: false,
    },
    listPublicCareerPath: {
        content: [],
        currentPage: 0,
        totalPages: 0,
    },
    scrollPositions: {},
    collapse: true,
    contactInfo: [],
};

const appReducer = createReducer(
    {
        reducerName: 'app',
        initialState,
        storage: {
            whiteList: [ 'theme', 'locale' ],
        },
    },
    {
        [showAppLoading.type]: (state) => {
            state.appLoading++;
        },
        [hideAppLoading.type]: (state) => {
            state.appLoading = Math.max(0, state.appLoading - 1);
        },
        [toggleActionLoading.type]: (state, action) => {
            if (action.payload.isLoading) {
                state[action.payload.type] = true;
            } else {
                delete state[action.payload.type];
            }
        },
        [changeLanguage.type]: (state, { payload }) => {
            state.locale = payload;
        },
        [showAppCartModal.type]: (state, { product }) => {
            state.cartModal = true;
            state.cartProduct = product;
        },
        [hideAppCartModal.type]: (state) => {
            state.cartModal = false;
            state.cartProduct = {};
        },
        [showCollapse.type]: (state) => {
            state.collapse = true;
        },
        [hideCollapse.type]: (state) => {
            state.collapse = false;
        },
        [setRestaurantId.type]: (state, { payload }) => {
            state.restaurantId = payload;
        },
        [setSubjectList.type]: (state, { payload }) => {
            state.listSubject.content = payload.content || [];
            state.listSubject.totalPages = payload.totalPages || 0;
            state.listSubject.currentPage = 0;
        },
        [appendSubjectList.type]: (state, { payload }) => {
            state.listSubject.content.push(...(payload.content || []));
            state.listSubject.currentPage += 1;
        },
        [setClassroomList.type]: (state, { payload }) => {
            state.listClassroom.content = payload.content || [];
            state.listClassroom.totalPages = payload.totalPages || 0;
            state.listClassroom.currentPage = 0;
        },
        [appendClassroomList.type]: (state, { payload }) => {
            state.listClassroom.content.push(...(payload.content || []));
            state.listClassroom.currentPage += 1;
        },
        [setSearchQueryClassroom.type]: (state, { payload }) => {
            state.listClassroom.searchQuery = payload;
        },
        [setIsSearchingClassroom.type]: (state, { payload }) => {
            state.listClassroom.isSearching = payload;
        },
        [setCareerPathList.type]: (state, { payload }) => {
            state.listCareerPath.content = payload.content || [];
            state.listCareerPath.totalPages = payload.totalPages || 0;
            state.listCareerPath.currentPage = 0;
        },
        [appendCareerPathList.type]: (state, { payload }) => {
            state.listCareerPath.content.push(...(payload.content || []));
            state.listCareerPath.currentPage += 1;
        },
        [setRecommendedCareerPathList.type]: (state, { payload }) => {
            state.listRecommendedCareerPath.content = payload.content || [];
            state.listRecommendedCareerPath.totalPages = payload.totalPages || 0;
            state.listRecommendedCareerPath.currentPage = 0;
        },
        [appendRecommendedCareerPathList.type]: (state, { payload }) => {
            state.listRecommendedCareerPath.content.push(...(payload.content || []));
            state.listRecommendedCareerPath.currentPage += 1;
        },
        [setPublicClassroomList.type]: (state, { payload }) => {
            state.listPublicClassroom.content = payload.content || [];
            state.listPublicClassroom.totalPages = payload.totalPages || 0;
            state.listPublicClassroom.currentPage = 0;
        },
        [appendPublicClassroomList.type]: (state, { payload }) => {
            state.listPublicClassroom.content.push(...(payload.content || []));
            state.listPublicClassroom.currentPage += 1;
        },
        [setSearchQueryPublicClassroom.type]: (state, { payload }) => {
            state.listPublicClassroom.searchQuery = payload;
        },
        [setIsSearchingPublicClassroom.type]: (state, { payload }) => {
            state.listPublicClassroom.isSearching = payload;
        },
        [setPublicCareerPathList.type]: (state, { payload }) => {
            state.listPublicCareerPath.content = payload.content || [];
            state.listPublicCareerPath.totalPages = payload.totalPages || 0;
            state.listPublicCareerPath.currentPage = 0;
        },
        [appendPublicCareerPathList.type]: (state, { payload }) => {
            state.listPublicCareerPath.content.push(...(payload.content || []));
            state.listPublicCareerPath.currentPage += 1;
        },

        [setSearchQuerySubject.type]: (state, { payload }) => {
            state.listSubject.searchQuery = payload;
        },
        [setIsSearchingSubject.type]: (state, { payload }) => {
            state.listSubject.isSearching = payload;
        },

        [setScrollPosition.type]: (state, { payload }) => {
            state.scrollPositions[payload.path] = payload.position;
        },
        [clearScrollPosition.type]: (state, { payload }) => {
            delete state.scrollPositions[payload];
        },
        [setContactInfo.type]: (state, { payload }) => {
            state.contactInfo = payload;
        },
        [clearAppData.type]: (state) => {
            state.listSubject = initialState.listSubject;
            state.listClassroom = initialState.listClassroom;
            state.listCareerPath = initialState.listCareerPath;
            state.listRecommendedCareerPath = initialState.listRecommendedCareerPath;
            state.listPublicClassroom = initialState.listPublicClassroom;
            state.listPublicCareerPath = initialState.listPublicCareerPath;
            state.scrollPositions = {};
        },
    },
);
export default appReducer;
