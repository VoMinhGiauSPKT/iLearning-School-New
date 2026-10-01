export const apiUrl = process.env.REACT_APP_API;
export const apiSsoUrl = process.env.REACT_APP_API_SSO;
export const loginSsoUrl = process.env.REACT_APP_LOGIN_SSO_FE;
export const portalUrl = process.env.REACT_APP_PORTAL;
export const apiUrlTenant = process.env.REACT_APP_API_TENANT;
export const version = process.env.REACT_APP_VERSION;
export const enableExposure = process.env.REACT_APP_ENABLE_EXPOSURE === 'true';
export const enableMobile = process.env.REACT_APP_IS_MOBILE === 'true';

export const fixedPath = {
    privacy: `${apiUrl}${process.env.REACT_APP_PRIVACY_PATH}`,
    help: `${apiUrl}${process.env.REACT_APP_HELP_PATH}`,
    aboutUs: `${apiUrl}${process.env.REACT_APP_ABOUT_US_PATH}`,
};

//LTS SHOP

export const brandName = 'iTZ VBook';

export const appName = 'video-book-portal';

export const storageKeys = {
    USER_ACCESS_TOKEN: `${appName}-user-access-token`,
    USER_REFRESH_TOKEN: `${appName}-user-refresh-token`,
    USER_KIND: `${appName}-user-kind`,
};

export const AppConstants = {
    apiRootUrl: process.env.REACT_APP_API,
    gameApiRootUrl: process.env.REACT_APP_GAME_API,
    contentRootUrl: `${process.env.REACT_APP_API}v1/file/download`,
    contentSsoUrl: `${process.env.REACT_APP_API_MEDIA}v1/file/download`,
    mediaRootUrl: `${process.env.REACT_APP_API}`,
    appId: process.env.REACT_APP_APP_ID,
    secretId: process.env.REACT_APP_SECRET_ID,
    userKinds: JSON.parse(process.env.REACT_APP_USER_KINDS || '[]'),
    langKey: 'vi',
};
export const appAccount = {
    APP_USERNAME: process.env.REACT_APP_USERNAME,
    APP_PASSWORD: process.env.REACT_APP_PASSWORD,
};

export const USER_KIND_ADMIN = 1;
export const USER_KIND_READER = 2;
export const USER_KIND_PUBLISHER = 3;

export const GROUP_KIND_STUDENT = 4;
export const GROUP_KIND_EXPERT = 5;
export const GROUP_KIND_SELLER = 6;

export const THEMES = {
    DARK: 'dark',
    LIGHT: 'light',
};

export const defaultLocale = 'vi';
export const locales = [ 'en', 'vi' ];

export const DATE_DISPLAY_FORMAT = 'DD-MM-YYYY HH:mm';
export const DATE_SHORT_MONTH_FORMAT = 'DD MMM YYYY';
export const TIME_FORMAT_DISPLAY = 'HH:mm';
export const DATE_FORMAT_VALUE = 'DD/MM/YYYY';
export const DATE_FORMAT_DISPLAY = 'DD/MM/YYYY';
export const DEFAULT_FORMAT = 'DD/MM/YYYY HH:mm:ss';
export const DATE_FORMAT_ZERO_TIME = 'DD/MM/YYYY 00:00:00';
export const DATE_FORMAT_END_OF_DAY_TIME = 'DD/MM/YYYY 23:59:59';
export const DEFAULT_EXCEL_DATE = 'DDMMYYHHmmss';
export const DEFAULT_FORMAT_DAY_OFF_LOG = 'DD/MM/YYYY HH:mm:00';
export const DEFAULT_FORMAT_ZERO_SECOND = 'DD/MM/YYYY HH:mm:00';

export const KIND_SERVICE = 1;
export const KIND_SERVICE_COMBO = 0;

export const USER_KIND_OPTIONS = [
    { value: USER_KIND_ADMIN, label: 'Quản trị viên' },
    { value: USER_KIND_READER, label: 'Độc giả' },
    { value: USER_KIND_PUBLISHER, label: 'Nhà xuất bản' },
];


export const navigateTypeEnum = {
    PUSH: 'PUSH',
    POP: 'POP',
    REPLACE: 'REPLACE',
};

export const articleTypeEnum = {
    URL: 'url',
    PLAIN: 'plain',
};

export const accessRouteTypeEnum = {
    NOT_LOGIN: false,
    REQUIRE_LOGIN: true,
    BOTH: null,
};

export const UploadFileTypes = {
    AVATAR: 'AVATAR',
    LOGO: 'LOGO',
    DOCUMENT: 'DOCUMENT',
};
export const DATE_YEAR_FORMAT = 'DD/MM/YYYY';
export const DATE_YEAR_FORMAT_TIME = 'DD/MM/YYYY HH:mm';
export const DATE_YEAR = 'MMM DD YYYY';
export const LIMIT_IMAGE_SIZE = 512000;

export const STATUS_PENDING = 0;
export const STATUS_ACTIVE = 1;
export const STATUS_LOCK = -1;
export const STATUS_DELETE = -2;

export const DEFAULT_PAGE_SIZE = 12;
export const DEFAULT_TABLE_ITEM_SIZE = 20;
export const DEFAULT_TABLE_ITEM_MOBILE_SIZE = 10;
export const DEFAULT_TABLE_PAGE_START = 0;
export const DEFAULT_LANGUAGE_ID = '1';
export const LESSON_KIND_TEXT = 1;
export const LESSON_KIND_VIDEO = 2;
export const LESSON_KIND_SECTION = 3;
export const STAGE_KIND = 1;
export const SUBJECT_KIND = 2;
export const commonStatus = {
    PENDING: 0,
    ACTIVE: 1,
    LOCK: -1,
    DELETE: -2,
};

export const commonStatusColor = {
    [commonStatus.PENDING]: 'warning',
    [commonStatus.ACTIVE]: 'green',
    [commonStatus.LOCK]: 'red',
};

export const CurrentcyPositions = {
    FRONT: 0,
    BACK: 1,
};

export const USER_DATA = 'user-data';
export const LANGUAGE = 'language';

export const KEYS = {
    USER_DATA,
    LANGUAGE,
};

export const shopVariantKey = {
    color: 0,
    size: 1,
};

export const FieldTypes = {
    STRING: 'STRING_TYPE',
    NUMBER: 'NUMBER_TYPE',
    SELECT: 'SELECT',
    AUTOCOMPLETE: 'AUTOCOMPLETE',
    DATE: 'DATE',
    DATE_RANGE: 'DATE_RANGE',
};

export const FEMALE = 1;
export const MALE = 0;

export const routesNotRequireSiteInfo = [];
export const defaultSlug = 'default';

export const freeEmployee = -1;

export const SERVICE_RATING_KIND_BOOKING = 1;
export const SERVICE_RATING_KIND_AMBIENCE = 2;
export const SERVICE_RATING_KIND_CLEANLINESS = 3;
export const SERVICE_RATING_KIND_SERVICE = 4;
export const SERVICE_RATING_KIND_REPLY = 5;
export const SERVICE_RATING_KIND_USER_REPLY = 6;

export const BEFORE_TAX = 1;
export const AFTER_TAX = 2;

export const TRACKING_ACTION_OPEN_SUBJECT = 1;
export const TRACKING_ACTION_OPEN_LECTURE = 2;
export const TRACKING_ACTION_OPEN_CLASSROOM = 3;

export const CAREER_PATH_CONTENT_KIND_HEADING = 1;
export const CAREER_PATH_CONTENT_KIND_SUBJECT = 2;

export const SUBJECT_TRACKING_STATE_HAVE_NOT_STUDIED = 0;
export const SUBJECT_TRACKING_STATE_LEARNING = 1;
export const SUBJECT_TRACKING_STATE_COMPLETED = 2;
