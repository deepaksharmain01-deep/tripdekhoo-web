export const getOptimizedUrl = (url, width = 800, quality = 80) => {
    if (!url) return "";
    // Check if it's our CDN
    if (url.includes("cloudfront.net")) {
        const baseUrl = url.split('?')[0];
        return `${baseUrl}?w=${width}&q=${quality}&format=webp&fit=crop`;
    }
    return url;
};
