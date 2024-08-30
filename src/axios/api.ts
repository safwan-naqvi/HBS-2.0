import api from "@/axios/index"
import { IArticle, IArticleMetadata, ICategory, ICollectionResponse } from "@/types";
import { shuffleArray } from "@/utils/utils";

// Fetch categories
export const fetchCategories = async (): Promise<ICollectionResponse<ICategory[]>> => {
    const { data: categories } = await api.get<ICollectionResponse<ICategory[]>>('/api/categories');
    return categories;
};


export const fetchBlogsByCategory = async (categoryId: number | null, query: string, page: number = 1, pageSize: number = 10): Promise<ICollectionResponse<IArticle[]>> => {
    const filters = categoryId ? `filters[category][id][$eq]=${categoryId}` : '';
    // const searchQuery = query ? `&filters[Title][$containsi]=${query}` : "";
    // Handle multiple search terms by creating a filter for each word
    const searchQuery = query
        ? query
            .split(' ')
            .map(word => `filters[Title][$containsi]=${word}`)
            .join('&')
        : '';
    const { data: blogs } = await api.get<ICollectionResponse<IArticle[]>>(
        `/api/blogs?${filters}${searchQuery}&pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate[image][fields][0]=url&populate[image][fields][1]=formats`
    );
    return blogs;
};


// Fetch all blogs (for initial load or "Recent" category)
export const fetchBlogs = async (): Promise<ICollectionResponse<IArticle[]>> => {
    const { data: blogs } = await api.get<ICollectionResponse<IArticle[]>>(
        `/api/blogs?populate=*`
    );
    return blogs;
};

export const fetchBlogBySlug = async (slug: string): Promise<any> => {
    const { data: blog } = await api.get<ICollectionResponse<IArticle[]>>(
        `/api/blogs?filters[slug][$eq]=${slug}&populate[image][fields][0]=url&populate[author][populate][avatar][fields][0]=url&populate=category`
    );
    return blog;
};

export const fetchBlogBySlugMetaData = async (slug: string): Promise<any> => {
    const { data } = await api.get<any>(
        `/api/blogs?filters[slug][$eq]=${slug}&fields[0]=Title&fields[1]=excerpt`
    );
    const blog = data.data?.[0]?.attributes;
    console.log(blog)
    return blog;
};

export const fetchRelatedBlogs = async (id: number, slug: string): Promise<any> => {
    const { data: blog } = await api.get<ICollectionResponse<IArticle[]>>(
        `/api/blogs?filters[category][id][$eq]=${id}&filters[slug][$ne]=${slug}&populate[image][fields][0]=url&populate[author][populate][avatar][fields][0]=url`
    );
    return blog;
};

export const fetchPortfolios = async (slug: string): Promise<any> => {
    const { data: portfolios } = await api.get<any>(
        `/api/profile-items?sort[0]=publishedAt:desc&filters[portfolio][slug][$eq]=${slug}&populate[images][fields][0]=url&fields[0]=title&fields[1]=slug`
    );
    return portfolios;
};

export const fetchPortfolioBySlugMetaData = async (slug: string): Promise<any> => {
    const { data } = await api.get<any>(
        `/api/profile-items?filters[slug][$eq]=${slug}&fields[0]=title&fields[1]=description`
    );
    const portfolioMeta = data.data?.[0]?.attributes;
    return portfolioMeta;
};

export const fetchPortfolioBySlug = async (slug: string): Promise<any> => {
    const { data: blog } = await api.get<any>(
        `https://cms.hashbitstudio.com/api/profile-items?filters[slug][$eq]=${slug}&populate[images][fields][0]=url&populate[portfolio][fields][0]=title&populate[coverimage][fields][0]=url&populate[gallery][fields][0]=alternativeText&populate[gallery][fields][1]=url`
    );
    return blog;
};

// Fetch random portfolios excluding the currently opened one
export const fetchRelatedPortfolioItems = async (currentPortfolioItemId: number, currentPortfolioSlug: string): Promise<any> => {
    try {
        // Fetch the specific portfolio with all related profile_items
        const response = await api.get(
            `/api/portfolios?filters[id][$eq]=${currentPortfolioItemId}&populate=profile_items,coverimage`
        );

        let portfolio = response.data.data[0];

        // Filter out the profile_items that have the slug matching excludeSlug
        portfolio.attributes.profile_items.data = portfolio.attributes.profile_items.data.filter(
            (item: any) => item.attributes.slug !== currentPortfolioSlug
        );
        return portfolio;
    } catch (error) {
        console.error('Error fetching filtered portfolio:', error);
        throw error;
    }
};