import defaultThumbnail from '@assets/images/ilearning/CourseCard/reactlogoartwork.png';

export const DEFAULT_CURRICULUM_STAGES = [
    {
        id: 1,
        title: 'GIAI ĐOẠN HỌC 1: Chuẩn bị nền tảng',
        sessions: '5 buổi',
        lessons: [
            'Môn 1: Kiến trúc máy tính & Hệ điều hành cơ bản',
            'Môn 2: Nhập môn lập trình với tư duy thuật toán',
        ],
    },
    {
        id: 2,
        title: 'GIAI ĐOẠN HỌC 2: Chuyên môn sâu - Hướng chuyên sâu 1: Lập trình viên java',
        sessions: '5 buổi',
        lessons: [
            'Môn 3: Lập trình hướng đối tượng',
            'Môn 4: Cấu trúc dữ liệu và giải thuật',
            'Môn 5: Các hệ cơ sở dữ liệu',
            'Môn 6: Phát triển ứng dụng web',
            'Môn 7 (không bắt buộc): Lập trình di động',
        ],
    },
    {
        id: 3,
        title: 'GIAI ĐOẠN HỌC 2: Chuyên môn sâu - Hướng chuyên sâu 2: Lập trình viên web fullstack',
        sessions: '5 buổi',
        lessons: [
            'Môn 8: Phát triển ứng dụng Web Frontend với ReactJS',
            'Môn 9: Xây dựng RESTful API và GraphQL với NodeJS',
            'Môn 10: Quản lý State nâng cao với Redux Toolkit',
            'Môn 11: Đồ án Fullstack Web kết thúc giai đoạn',
        ],
    },
    {
        id: 4,
        title: 'GIAI ĐOẠN HỌC 2: Chuyên môn sâu - Hướng chuyên sâu 2: Lập trình viên web fullstack',
        sessions: '5 buổi',
        lessons: [
            'Môn 12: Kiến trúc Microservices & Docker container',
            'Môn 13: CI/CD Pipeline & Triển khai đám mây AWS',
            'Môn 14: Tối ưu hiệu năng, bảo mật và phỏng vấn doanh nghiệp',
        ],
    },
];

const DEFAULT_BENEFITS = [
    'Lazy loading – code splitting – Memoization trong ReactJS',
    'Tìm hiểu GraphQL và so sánh với REST',
    'Sử dụng ApolloLink như Middleware',
    'So sánh Cách Apollo quản lý cache vs Redux quản lý Cache',
    'Unit test & Integration test',
];

export const FALLBACK_COURSES = [
    {
        id: 'course-1',
        title: 'Khoá học ReactJS – Xây dựng chức năng Github với GraphQL',
        price: '7,500,000 đ',
        numericPrice: 7500000,
        thumbnail: defaultThumbnail,
        benefits: DEFAULT_BENEFITS,
        curriculumStages: DEFAULT_CURRICULUM_STAGES,
    },
    {
        id: 'course-2',
        title: 'Khoá học ReactJS – Xây dựng chức năng Github với GraphQL',
        price: '7,500,000 đ',
        numericPrice: 7500000,
        thumbnail: defaultThumbnail,
        benefits: DEFAULT_BENEFITS,
        curriculumStages: DEFAULT_CURRICULUM_STAGES,
    },
    {
        id: 'course-3',
        title: 'Khoá học ReactJS – Xây dựng chức năng Github với GraphQL',
        price: '7,500,000 đ',
        numericPrice: 7500000,
        thumbnail: defaultThumbnail,
        benefits: DEFAULT_BENEFITS,
        curriculumStages: DEFAULT_CURRICULUM_STAGES,
    },
    {
        id: 'course-4',
        title: 'Khoá học ReactJS – Xây dựng chức năng Github với GraphQL',
        price: '7,500,000 đ',
        numericPrice: 7500000,
        thumbnail: defaultThumbnail,
        benefits: DEFAULT_BENEFITS,
        curriculumStages: DEFAULT_CURRICULUM_STAGES,
    },
];
