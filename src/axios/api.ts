import api from "@/axios/index"
import { IArticle, ICategory, ICollectionResponse } from "@/types";

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

export const fetchRelatedBlogs = async (id: number, slug: string): Promise<any> => {
    const { data: blog } = await api.get<ICollectionResponse<IArticle[]>>(
        `/api/blogs?filters[category][id][$eq]=${id}&filters[slug][$ne]=${slug}&populate[image][fields][0]=url&populate[author][populate][avatar][fields][0]=url`
    );
    return blog;
};
