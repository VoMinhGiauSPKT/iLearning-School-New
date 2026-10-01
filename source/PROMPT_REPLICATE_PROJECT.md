# MASTER PROMPT TÁI LẬP DỰ ÁN REACT-FE-BASE (100% REPLICATION)

> **Hướng dẫn sử dụng:**  
> Bạn chỉ cần sao chép toàn bộ nội dung từ phần `--- BẮT ĐẦU PROMPT ---` đến hết phần `--- KẾT THÚC PROMPT ---` và dán vào bất kỳ AI nào (Claude 3.5 Sonnet, GPT-4o, Gemini 2.0 Pro, Cursor, Windsurf,...). AI sẽ tự động sinh lại toàn bộ source code của dự án với kiến trúc, thư viện và patterns y hệt 100%.

---

## --- BẮT ĐẦU PROMPT ---

```text
Bạn là một Senior Frontend Architect. Hãy tạo toàn bộ source code cho một dự án ReactJS Enterprise Base Template (tên dự án: "nail-fe" / "react-fe-base") hoàn chỉnh 100%, tuân thủ chính xác từng thư viện, cấu trúc thư mục, quy tắc alias và các design pattern đặc thù dưới đây.

================================================================================
1. CÔNG NGHỆ & THƯ VIỆN CHÍNH (PACKAGE & CONFIG)
================================================================================
1. Core & Build Tool:
   - React 18 (`react`, `react-dom`) trên nền Create React App (CRA).
   - `@craco/craco` v7 kết hợp `@jackwilsdon/craco-use-babelrc` để tùy biến Webpack/Babel không cần eject.
2. Webpack Alias:
   - Trong `craco.config.js`: Tự động đọc tất cả các folder cấp 1 trong thư mục `src/` và ánh xạ thành alias `@<folder_name>` (ví dụ: `@components`, `@constants`, `@hooks`, `@modules`, `@routes`, `@selectors`, `@services`, `@store`, `@utils`, `@assets`, `@locales`).
   - Cấu hình đồng bộ trong `jsconfig.json` (`"@*": ["./src/*"]`) để IDE hỗ trợ auto-complete và navigation.
3. CSS & Styling:
   - Sử dụng Sass (`sass`).
   - Cấu hình CSS Modules trong `craco.config.js`: `exportLocalsConvention: 'camelCase'` và mã hóa tên class khi build production: `[hash:base64:5]`.
4. State Management:
   - Redux (`redux` v4) + Redux-Saga (`redux-saga`).
   - `immer` để cập nhật state an toàn trực tiếp trong reducer.
   - `@tanstack/react-query` v5 để quản lý server state và caching.
   - `reselect` cho các selector memoized.
5. Routing & Security:
   - `react-router-dom` v6 (`BrowserRouter`, `Routes`, `Route`, `Navigate`, `Outlet`, `useLocation`).
   - Có cơ chế Route Guard phân quyền 3 cấp độ (`authRequire`: null, true, false).
6. Đa ngôn ngữ (i18n):
   - `react-intl` (hỗ trợ `vi` và `en`, thư viện từ điển lưu trong `src/locales/`).
7. Form & UI Kits:
   - `rc-field-form` kết hợp `yup`.
   - Radix UI (`@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-tooltip`).
   - `sonner` (Toast notifications).
   - Video streaming với `video.js` và `@videojs/http-streaming`.
8. Quản lý môi trường & Production Server:
   - `env-cmd` với 4 file cấu hình trong `env/`: `.dev`, `.beta`, `.staging`, `.production`.
   - `appServer.js`: Server Express siêu nhẹ phục vụ static bundle, nén gzip (`compression`) và fallback mọi URL về `index.html`.

================================================================================
2. CẤU TRÚC THƯ MỤC CHÍNH XÁC (DIRECTORY STRUCTURE)
================================================================================
source/
├── .babelrc
├── .editorconfig
├── .eslintrc.js
├── .prettierrc
├── appServer.js
├── craco.config.js
├── jsconfig.json
├── package.json
├── env/
│   ├── .dev
│   ├── .beta
│   ├── .staging
│   └── .production
└── src/
    ├── index.js
    ├── App.js
    ├── reportWebVitals.js
    ├── setupTests.js
    ├── assets/
    │   ├── fonts/
    │   ├── icons/
    │   ├── images/
    │   └── scss/
    │       └── index.scss
    ├── components/
    │   └── common/
    │       ├── elements/ (Design System: Button, Modal, Table, RenderContext, Tooltip, ConfirmModalWrapper,...)
    │       ├── form/ (CropImageField, VideoJsPlayer,...)
    │       └── page/ (ErrorBoundary, PageNotFound, PageNotAllowed, PageNotSupport)
    ├── constants/
    │   ├── index.js (storageKeys, accessRouteTypeEnum, DATE_FORMAT, etc.)
    │   ├── apiConfig.js (khai báo toàn bộ endpoints)
    │   ├── formConfig.js
    │   └── masterData.js
    ├── hooks/
    │   ├── useAuth.js
    │   ├── useFetch.js
    │   ├── useFetchAction.js
    │   ├── useDevices.js
    │   ├── useTranslate.js
    │   ├── useBrowserTabChange.js
    │   └── useDisclosure.js
    ├── locales/
    │   ├── LanguageProvider.js
    │   ├── vi.json
    │   └── en.json
    ├── modules/
    │   ├── containers/ (Smart Components: home, login,...)
    │   └── layout/
    │       ├── common/ (DefaultLayout, DefaultMobileLayout, Header, Footer, AppLoading)
    │       ├── desktop/ (Giao diện Desktop cho từng module)
    │       └── mobile/ (Giao diện Mobile cho từng module)
    ├── routes/
    │   ├── index.js (Danh sách route và cấu hình auth)
    │   ├── routes.js (Component duyệt và render route)
    │   └── ValidateAccess.js (Route Guard Component)
    ├── selectors/
    │   ├── account.js
    │   └── app.js
    ├── services/
    │   ├── api.js (Axios instance với Bearer token và 401 interceptor)
    │   └── userService.js (Quản lý localStorage token)
    ├── store/
    │   ├── index.js (Cấu hình Redux store & saga middleware)
    │   ├── utils.js (Helper tạo createAction, createReducer, processAction)
    │   ├── actions/ (account.js, app.js, cache.js)
    │   ├── reducers/ (account.js, app.js, cache.js, index.js)
    │   └── sagas/ (account.js, app.js, index.js)
    └── utils/
        ├── index.js
        ├── localStorage.js
        └── intlHelper.js

================================================================================
3. CÁC CODE PATTERNS BẮT BUỘC PHẢI THỰC HIỆN ĐÚNG
================================================================================

1. [craco.config.js]:
   - Tự động map thư mục cấp 1 trong `src` làm Webpack alias `@<folder>`.
   - Bật CSS Modules hỗ trợ camelCase và hash tên class trong môi trường production.

2. [src/store/utils.js]:
   - `createAction(actionType, { success, fail })`: Tự động gán thêm 2 sub-actions có type dạng `${actionType}_SUCCESS` và `${actionType}_FAILURE`.
   - `createReducer({ reducerName, initialState, storage }, handlers)`: Sử dụng thư viện `immer` (draft state) để xử lý reducers ngắn gọn, hỗ trợ tự động đồng bộ Redux state vào localStorage theo whitelist/blacklist.
   - `processAction(apiConfig, payload)`: Generator function trong saga dùng `call(sendRequest, apiConfig, ...)` và tự động `put` action success hoặc failure.

3. [src/services/api.js] & [src/services/userService.js]:
   - Khởi tạo Axios instance với interceptor tự động lấy token từ localStorage thông qua `userService.getCacheAccessToken()`.
   - Bắt mã lỗi 401: Xóa token cache và điều hướng người dùng về `/login`.

4. [src/components/common/elements/RenderContext.js]:
   - Nhận props: `components: { desktop: { defaultTheme }, mobile: { defaultTheme } }`.
   - Dùng hook `useDevices()` nhận diện thiết bị.
   - Nếu Mobile (`isMobile && enableMobile`): Render `DefaultMobileLayout` và component giao diện mobile.
   - Nếu Desktop: Render `DefaultLayout` và component giao diện desktop.

5. [src/routes/ValidateAccess.js]:
   - Kiểm tra `authRequire`:
     + `null`: Cho phép cả khách lẫn người dùng đã đăng nhập.
     + `accessRouteTypeEnum.NOT_LOGIN` (false): Nếu đã login thì redirect về `/`.
     + `accessRouteTypeEnum.REQUIRE_LOGIN` (true): Nếu chưa login thì redirect về `/login`.
   - Tích hợp hook `useBrowserTabChange`: Khi user quay lại tab trình duyệt, tự động gọi API lấy profile. Nếu tài khoản bị khóa (`STATUS_LOCK`), tự động logout và xóa token.

6. [src/index.js] & [src/App.js]:
   - Thứ tự bọc Provider:
     `<React.StrictMode>` -> `<Provider store={store}>` -> `<LanguageProvider>` -> `<Suspense>` -> `<QueryClientProvider>` -> `<ConfirmModalWrapper>` -> `<Tooltip.Provider>` -> `<ErrorBoundary>` -> `<AppLoading>` -> `<AppRoutes>` -> `<Toaster>`.

================================================================================
YÊU CẦU ĐẦU RA:
================================================================================
Hãy tạo đầy đủ các file theo đúng cấu trúc trên, viết code hoàn chỉnh không dùng mã giả (placeholder), đảm bảo sau khi `npm install` có thể chạy ngay lập tức bằng lệnh `npm run start`!
```

## --- KẾT THÚC PROMPT ---
