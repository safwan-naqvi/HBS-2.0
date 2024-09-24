import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Fetching blog data from Strapi API
    const blogResponse = await fetch("https://cms.hashbitstudio.com/api/blogs");
    const blogData = await blogResponse.json();

    const portFoliosResponse = await fetch("https://cms.hashbitstudio.com/api/profile-items");
    const portFolioData = await portFoliosResponse.json();

    // Base URL for the sitemap
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    // Static routes (like portfolio, about, etc.)
    const staticRoutes = [
        {
            url: `${baseUrl}/`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/blogs`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: new Date().toISOString(),
        },
    ];

    // Dynamic routes for blogs
    const dynamicRoutes = blogData.data.map((blog: any) => ({
        url: `${baseUrl}/blog/${blog.attributes.slug}`,
        lastModified: blog.attributes.updatedAt || blog.attributes.publishedAt,
    }));

    const dynamicPortfolioRoutes = portFolioData.data.map((portfolio: any) => ({
        url: `${baseUrl}/portfolio/${portfolio.attributes.slug}`,
        lastModified: portfolio.attributes.updatedAt || portfolio.attributes.publishedAt,
    }));

    // Combine static and dynamic routes
    return [...staticRoutes, ...dynamicRoutes, ...dynamicPortfolioRoutes];
}
