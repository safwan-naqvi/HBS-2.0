import api from "@/axios/index"
import { IArticle, ICategory, ICollectionResponse } from "@/types";

export const fetchCategories = async (): Promise<ICollectionResponse<ICategory[]>> => {
    const { data: categories } = await api.get<ICollectionResponse<ICategory[]>>('/api/categories');
    return categories;
};


// Fetch blogs by category and search query
export const fetchBlogsByCategory = async (categoryId: number | null, query: string): Promise<ICollectionResponse<IArticle[]>> => {
    const filters = categoryId ? `filters[category][id][$eq]=${categoryId}` : '';
    const { data: blogs } = await api.get<ICollectionResponse<IArticle[]>>(
        `/api/blogs?${filters}&${query}&populate[image][fields][0]=url&populate[image][fields][1]=formats`
    );
    return blogs;
};

export const fetchBlogs = async (): Promise<any> => {
    const { data: blogs } = await api.get<ICollectionResponse<IArticle[]>>(
        `/api/blogs?populate=*`
    );
    return blogs;
};

export const fetchBlogBySlug = async (slug: string): Promise<any> => {
    const { data: blogs } = await api.get<ICollectionResponse<IArticle[]>>(
        `/api/blogs?${slug}&populate[image][fields][0]=url&populate[image][fields][1]=formats`
    );
    return blogs;
};