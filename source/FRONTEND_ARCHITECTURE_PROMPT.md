# 🚀 MASTER PROMPT & KHUNG KIẾN TRÚC FRONTEND CHUẨN DOANH NGHIỆP
> **Template chuẩn:** React 18 • CRACO • Redux-Saga • TanStack Query • CSS Modules • Clean Module-based Architecture

Tài liệu này được tạo ra để bạn có thể lưu trữ, tải về hoặc copy nguyên khối Master Prompt gửi cho bất kỳ AI nào (ChatGPT, Claude, Cursor, Antigravity,...) để tái sử dụng kiến trúc chuẩn này cho các dự án mới trong tương lai.

---

## 📋 NGUYÊN KHỐI MASTER PROMPT (COPY PHẦN DƯỚI ĐÂY)

```markdown
Bạn là một Senior React Frontend Architect. Hãy khởi tạo/phát triển dự án frontend cho tôi dựa trên Kiến trúc Doanh nghiệp (Enterprise Clean Architecture) chuẩn Module-based theo đúng các quy chuẩn công nghệ và cấu trúc thư mục sau:

---

### 1. TECH STACK & CÔNG NGHỆ BẮT BUỘC
- **Core:** React 18 (Functional Components + Hooks).
- **Bundler & Build Tool:** CRACO (@craco/craco) kết hợp Webpack Alias cấp 1 cho mọi thư mục trong `src/` (`@components`, `@modules`, `@routes`, `@services`, `@store`, `@constants`, `@hooks`, `@utils`, `@assets`, `@locales`).
- **Routing:** React Router DOM v6 với Route Middleware (`ValidateAccess`) hỗ trợ phân quyền 3 trạng thái:
  + `auth: null`: Truy cập tự do (cả khách và user đã login).
  + `auth: true`: Bắt buộc đăng nhập (Private Route - chưa login tự chuyển hướng về `/login`).
  + `auth: false`: Chỉ dành cho khách chưa login (như trang Login/Register - đã login tự chuyển về `/`).
- **State Management:** Redux Toolkit + Redux-Saga (xử lý side-effects bất đồng bộ) + Reselect.
- **Server State & Cache:** TanStack React Query (@tanstack/react-query v5).
- **HTTP Client:** Axios với setup interceptor tự động gắn Access Token vào Header và tự động xử lý khi mã lỗi trả về `401 Unauthorized` (xóa token và chuyển hướng về `/login`).
- **Styling:** Sass (SCSS) + CSS Modules (`*.module.scss`) để cô lập phạm vi class, tuyệt đối không viết CSS đè class toàn cục bừa bãi.
- **Đa ngôn ngữ (i18n):** React-Intl (vi.json, en.json) bọc trong `LanguageProvider`.
- **UI & Helpers:** Radix UI primitives, Sonner (Toaster notification), Dayjs (xử lý ngày tháng), Yup (validate form).

---

### 2. CẤU TRÚC THƯ MỤC CHUẨN (FOLDER STRUCTURE)
Mọi file và thư mục phải được tổ chức chính xác theo mô hình sau:

source/
├── env/                       # Biến môi trường (.dev, .beta, .staging, .production)
├── public/                    # HTML template tĩnh (index.html), favicon, icons
├── craco.config.js            # Tự động map alias @ cho tất cả thư mục cấp 1 trong src/
├── package.json
└── src/
    ├── assets/                # SCSS toàn cục, mixins, variables, theme, fonts, images
    │   └── scss/              # index.scss, base, theme, vendors
    │
    ├── components/            # UI components DÙNG CHUNG TOÀN ỨNG DỤNG
    │   └── common/
    │       ├── elements/      # Design System (Button, Modal, Card, Table, Select, Input,...)
    │       ├── form/          # Form fields (CropImageField, VideoJsPlayer,...)
    │       ├── loading/       # LoadingComponent, Skeleton, Spinner
    │       └── page/          # ErrorBoundary, PageNotFound (404), PageNotAllowed (403)
    │
    ├── constants/             # Hằng số toàn cục
    │   ├── apiConfig.js       # Danh sách tất cả API Endpoints của backend
    │   ├── index.js           # App constants, Storage keys, User kinds, Roles, URLs
    │   └── masterData.js      # Danh mục dữ liệu chuẩn của hệ thống
    │
    ├── hooks/                 # Custom Hooks DÙNG CHUNG TOÀN DỰ ÁN
    │   ├── useAuth.js         # Kiểm tra trạng thái đăng nhập, profile người dùng
    │   ├── useFetch.js        # Gọi API đơn giản
    │   ├── useFetchAction.js  # Gọi API dispatch Redux action
    │   └── useDevices.js      # Nhận diện kích thước Mobile / Tablet / Desktop
    │
    ├── locales/               # Hệ thống đa ngôn ngữ
    │   ├── LanguageProvider.js
    │   ├── vi.json
    │   └── en.json
    │
    ├── modules/               # TẦNG TÍNH NĂNG NGHIỆP VỤ (MODULE-BASED)
    │   ├── layout/            # Bố cục giao diện chung
    │   │   └── common/
    │   │       ├── DefaultLayout.js         # Bọc Header + <main> + Footer
    │   │       ├── DefaultLayout.module.scss
    │   │       ├── Header/
    │   │       └── Footer/
    │   │
    │   └── [feature_name]/    # Mỗi màn hình/tính năng là 1 thư mục riêng biệt
    │       ├── components/    # Sub-components CHỈ DÙNG RIÊNG cho module này
    │       ├── hooks/         # Custom hooks lấy dữ liệu/xử lý logic riêng của module
    │       ├── constants.js   # Mock data, hằng số, text tĩnh riêng của module
    │       ├── [Feature]Page.js          # Component container chính lắp ráp các khối
    │       ├── [Feature]Page.module.scss # CSS Modules riêng của module
    │       └── index.js                  # Barrel export (`export { default } from './[Feature]Page'`)
    │
    ├── routes/                # Quản lý Routing
    │   ├── routes.js          # Khởi tạo BrowserRouter, Routes và gắn ValidateAccess
    │   ├── index.js           # Khai báo mảng Route config (path, component, auth, title)
    │   └── ValidateAccess.js  # Middleware kiểm tra đăng nhập & phân quyền trước khi render
    │
    ├── services/              # Tầng giao tiếp mạng & Storage
    │   ├── api.js             # Khởi tạo axiosInstance, interceptors, setupApi
    │   ├── userService.js     # Quản lý đọc/ghi Access Token, Refresh Token vào localStorage
    │   └── notifyService.js   # Wrapper gọi thông báo toast (Sonner)
    │
    ├── store/                 # Redux Store + Redux Saga
    │   ├── actions/           # Action creators
    │   ├── reducers/          # account.js (profile, auth), app.js (loading, config)
    │   ├── sagas/             # Xử lý luồng async side-effects
    │   └── index.js           # Tạo store và apply sagaMiddleware
    │
    ├── utils/                 # Tiện ích chung (localStorage.js, datetime.js, format.js)
    ├── App.js                 # Provider Tree cấp cao nhất (QueryClient, ErrorBoundary, Toaster, AppRoutes)
    └── index.js               # Entry point ReactDOM.createRoot, bọc Redux Provider & LanguageProvider

---

### 3. NGUYÊN TẮC LẬP TRÌNH (CODING GUIDELINES)
1. **Separation of Concerns:** Tách biệt tuyệt đối giữa Giao diện (JSX) và Logic (Hooks). Component chính của một trang không tự viết các hàm logic gọi API phức tạp mà phải đưa vào `hooks/use[Feature]Data.js`.
2. **Sub-components rã nhỏ:** Không viết các file màn hình dài quá 200 dòng. Mọi khối giao diện (Banner, Lưới danh sách, Thống kê, Bảng lọc) phải được bóc tách vào thư mục `modules/[feature]/components/`.
3. **Phân biệt rạch ròi Global vs Local:**
   - Dùng ở nhiều màn hình -> đưa ra `src/components/common/elements/`, `src/hooks/`.
   - Chỉ dùng ở 1 màn hình -> bắt buộc để trong `src/modules/[feature]/`.
4. **CSS Modules an toàn:** Mọi component đều phải có file `[TênComponent].module.scss` đi kèm, import dạng `import styles from './[TênComponent].module.scss'` và dùng `className={styles.tenClass}`.
5. **Đăng ký Route chuẩn:** Mọi màn hình mới khi tạo xong đều phải được export từ `src/modules/[feature]/index.js` và đăng ký vào bảng `src/routes/index.js` với đầy đủ thuộc tính `path`, `component`, `auth`, `title`.

---

### 4. YÊU CẦU CỤ THỂ CHO BẠN:
Tôi muốn bạn [ĐIỀN YÊU CẦU CỦA BẠN VÀO ĐÂY, VÍ DỤ: Dựng khung khởi tạo dự án mới / Tạo tính năng Quản lý khóa học / Tạo trang Quản trị người dùng] tuân thủ 100% đúng cấu trúc thư mục, quy ước đặt tên và kiến trúc nêu trên.
```

---

## 🛠️ HƯỚNG DẪN SỬ DỤNG KHI LÀM DỰ ÁN MỚI

### Trường hợp 1: Khởi tạo một dự án mới hoàn toàn
1. Mở AI (ChatGPT, Claude, Cursor, Antigravity,...).
2. Copy toàn bộ đoạn Markdown trong khung code ở trên.
3. Ở mục `4. YÊU CẦU CỤ THỂ CHO BẠN:`, sửa thành:
   > *"Tôi muốn bạn khởi tạo khung dự án ban đầu (Base Boilerplate) gồm cấu hình Webpack alias, Redux Saga, Axios Setup, DefaultLayout và Routing cơ bản theo chuẩn trên."*

### Trường hợp 2: Viết thêm 1 tính năng mới vào dự án có sẵn
1. Copy toàn bộ đoạn Markdown trên.
2. Ở mục `4. YÊU CẦU CỤ THỂ CHO BẠN:`, sửa thành:
   > *"Tôi muốn bạn viết module `src/modules/courses` bao gồm danh sách khoá học, bộ lọc danh mục và trang chi tiết khoá học tuân thủ 100% cấu trúc trên."*
