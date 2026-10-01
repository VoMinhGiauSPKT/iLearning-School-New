/**
 * Tiện ích xử lý URL video, đặc biệt là video YouTube.
 */

/**
 * Trích xuất Video ID từ các định dạng URL YouTube:
 * - https://youtu.be/Tx7QiS5asAo?si=...
 * - https://www.youtube.com/watch?v=Tx7QiS5asAo
 * - https://www.youtube.com/embed/Tx7QiS5asAo
 *
 * @param {string} url - Đường dẫn video YouTube
 * @returns {string|null} ID video hoặc null nếu không hợp lệ
 */
export function extractYoutubeId(url) {
    if (!url || typeof url !== 'string') return null;

    // Pattern 1: youtu.be/<id>
    const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/i);
    if (shortMatch && shortMatch[1]) return shortMatch[1];

    // Pattern 2: youtube.com/watch?v=<id>
    const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/i);
    if (watchMatch && watchMatch[1]) return watchMatch[1];

    // Pattern 3: youtube.com/embed/<id>
    const embedMatch = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/i);
    if (embedMatch && embedMatch[1]) return embedMatch[1];

    return null;
}

/**
 * Chuyển đổi URL video YouTube thành Embed URL để phát trong iframe
 *
 * @param {string} url - Đường dẫn video YouTube
 * @param {boolean} [autoplay=false] - Tự động phát khi nạp
 * @returns {string|null} URL nhúng chuẩn
 */
export function getYoutubeEmbedUrl(url, autoplay = false) {
    const videoId = extractYoutubeId(url);
    if (!videoId) return null;

    const autoplayParam = autoplay ? '1' : '0';
    return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=${autoplayParam}&rel=0&modestbranding=1`;
}

export default {
    extractYoutubeId,
    getYoutubeEmbedUrl,
};
