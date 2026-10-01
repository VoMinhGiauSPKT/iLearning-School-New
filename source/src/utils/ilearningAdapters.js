import defaultThumbnail from '@assets/images/ilearning/CourseCard/reactlogoartwork.png';
import { apiUrl } from '@constants';

/**
 * Tiện ích định dạng URL hình ảnh từ API backend.
 * Endpoint tải file từ backend: GET /v1/file/download/{cleanPath}
 */
export const getMediaUrl = (path, fallback = '') => {
    if (!path || typeof path !== 'string' || !path.trim()) {
        return fallback;
    }

    const trimmed = path.trim();

    if (
        trimmed.startsWith('http://') ||
        trimmed.startsWith('https://') ||
        trimmed.startsWith('data:') ||
        trimmed.startsWith('blob:')
    ) {
        return trimmed;
    }

    const cleanBase = (apiUrl || 'https://ai-project-api.moviehub.io.vn/').replace(/\/$/, '');
    const downloadPrefix = '/v1/file/download';

    if (trimmed.startsWith('/v1/file/download/')) {
        return `${cleanBase}${trimmed}`;
    }
    if (trimmed.startsWith('v1/file/download/')) {
        return `${cleanBase}/${trimmed}`;
    }

    const cleanPath = trimmed.replace(/^\/+/, '');
    return `${cleanBase}${downloadPrefix}/${cleanPath}`;
};

/**
 * Định dạng tiền tệ VNĐ
 */
export const formatPrice = (price) => {
    const num = Number(price);
    if (isNaN(num) || num === 0) return 'Miễn phí';
    return `${new Intl.NumberFormat('vi-VN').format(num)} đ`;
};

/**
 * Dữ liệu tĩnh dự phòng: Lộ trình học (Curriculum Stages)
 */
export const defaultCurriculumStages = [
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
        title: 'GIAI ĐOẠN HỌC 2: Chuyên môn sâu - Hướng chuyên sâu 1: Lập trình viên Java',
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
        title: 'GIAI ĐOẠN HỌC 2: Chuyên môn sâu - Hướng chuyên sâu 2: Lập trình viên Web Fullstack',
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
        title: 'GIAI ĐOẠN HỌC 3: Doanh nghiệp & Dự án thực chiến',
        sessions: '5 buổi',
        lessons: [
            'Môn 12: Kiến trúc Microservices & Docker container',
            'Môn 13: CI/CD Pipeline & Triển khai đám mây AWS',
            'Môn 14: Tối ưu hiệu năng, bảo mật và phỏng vấn doanh nghiệp',
        ],
    },
];

/**
 * Dữ liệu tĩnh: Đánh giá cảm nhận học viên (Testimonials)
 */
export const defaultTestimonials = [
    {
        id: 1,
        quote:
            'Khóa học có lộ trình rõ ràng, anh Việt và các bạn Mentor rất nhiệt tình, luôn support ngay lập tức trong buổi học cũng như ngoài buổi để giải quyết vấn đề của học viên. Kiến thức Mentor sâu rộng nên hầu hết đều trả lời được thắc mắc học viên.',
        author: 'Hiếu Hồ',
        batch: 'HO CHI MINH CITY',
    },
    {
        id: 2,
        quote:
            'Chương trình học sát với thực tế doanh nghiệp. Mình học được cách tư duy giải quyết vấn đề chứ không chỉ là học cú pháp code. Nhờ dự án kết khóa mà mình đã tự tin pass phỏng vấn vị trí Frontend Developer.',
        author: 'Minh Tuấn',
        batch: 'DA NANG CITY',
    },
    {
        id: 3,
        quote:
            'Môi trường học tập năng động, sự hỗ trợ 1:1 từ Mentor giúp mình tiết kiệm rất nhiều thời gian khi gặp bug. Lộ trình từ số 0 đến làm được dự án hoàn chỉnh rất phù hợp cho người trái ngành như mình.',
        author: 'Quỳnh Nga',
        batch: 'HA NOI CITY',
    },
];

/**
 * Adapter chuẩn hóa Public Settings
 */
export const adaptPublicSettings = (response) => {
    try {
        let raw = response;
        if (raw && typeof raw === 'object') {
            if (Array.isArray(raw.data)) {
                raw = raw.data;
            } else if (raw.data && typeof raw.data === 'object') {
                if (Array.isArray(raw.data.data)) {
                    raw = raw.data.data;
                } else if (raw.data.content && Array.isArray(raw.data.content)) {
                    raw = raw.data.content;
                }
            }
        }

        const dataArr = Array.isArray(raw) ? raw : (Array.isArray(response) ? response : []);
        const pageConfig = dataArr.find((item) => item?.keyName === 'page_config');
        if (pageConfig && pageConfig.valueData) {
            const parsed =
                typeof pageConfig.valueData === 'string'
                    ? JSON.parse(pageConfig.valueData)
                    : pageConfig.valueData;

            const normalizedSlider = Array.isArray(parsed?.slider)
                ? parsed.slider.map((slide, index) => ({
                    id: slide.id || index + 1,
                    title: slide.title || '',
                    description: slide.description || '',
                    url: slide.url || '#',
                    image: getMediaUrl(slide.image),
                    typeAction: slide.typeAction,
                }))
                : [];

            return {
                slider: normalizedSlider,
                video: parsed?.video || '',
                description: parsed?.description || null,
            };
        }
        return { slider: [], video: '', description: null };
    } catch {
        return { slider: [], video: '', description: null };
    }
};

/**
 * Adapter chuẩn hóa Khóa học / Lớp học
 */
export const adaptCourses = (response) => {
    try {
        const rawItems =
            response?.data?.content || response?.content || response?.data || response || [];
        if (Array.isArray(rawItems) && rawItems.length > 0) {
            return rawItems.map((item, index) => {
                const courseInfo = item?.course || {};
                const numericPrice = item?.price || courseInfo?.price || 0;

                let benefits = [];
                if (courseInfo?.shortDescription) {
                    benefits = courseInfo.shortDescription
                        .split('\n')
                        .map((b) => b.trim())
                        .filter(Boolean);
                }
                if (benefits.length === 0) {
                    benefits = [
                        'Lộ trình đào tạo bài bản từ cơ bản đến nâng cao',
                        'Thực hành dự án thực chiến chuẩn doanh nghiệp',
                        'Đội ngũ Giảng viên & Mentor đồng hành 1:1',
                    ];
                }

                return {
                    id: String(item?.id || courseInfo?.id || `course-${index + 1}`),
                    title: courseInfo?.name || item?.name || 'Khóa học Lập trình Chuyên sâu',
                    price: formatPrice(numericPrice),
                    numericPrice: Number(numericPrice),
                    thumbnail: getMediaUrl(courseInfo?.avatar, defaultThumbnail),
                    benefits,
                    curriculumStages: courseInfo?.curriculumStages || defaultCurriculumStages,
                    raw: item,
                };
            });
        }
        return [];
    } catch {
        return [];
    }
};

/**
 * Adapter chuẩn hóa Mentor / Giảng viên
 */
export const adaptInstructors = (response) => {
    try {
        const rawItems =
            response?.data?.content || response?.content || response?.data || response || [];
        if (Array.isArray(rawItems) && rawItems.length > 0) {
            return rawItems.map((mentor, index) => {
                const account = mentor?.account || {};
                return {
                    id: mentor?.id || index + 1,
                    name: account?.fullName || 'Giảng viên chuyên môn',
                    role: mentor?.position || 'Mentor & Giảng viên',
                    quotePara1: mentor?.description || 'Đội ngũ giảng viên và mentor giàu kinh nghiệm thực chiến.',
                    quotePara2: '',
                    avatar: getMediaUrl(account?.avatarPath),
                    raw: mentor,
                };
            });
        }
        return [];
    } catch {
        return [];
    }
};

/**
 * Adapter chuẩn hóa Doanh nghiệp đối tác
 */
export const adaptPartners = (response) => {
    try {
        const rawItems =
            response?.data?.content || response?.content || response?.data || response || [];
        if (Array.isArray(rawItems) && rawItems.length > 0) {
            return rawItems
                .filter((company) => company && (company.name || company.avatar))
                .map((company, index) => ({
                    id: String(company.id || index + 1),
                    name: company.name || `Đối tác ${index + 1}`,
                    logo: getMediaUrl(company.avatar),
                    raw: company,
                }));
        }
        return [];
    } catch {
        return [];
    }
};
