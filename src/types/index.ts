import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { FC } from 'react';

export interface ICategory {
    id: number;
    attributes: ICategoryAttribute
}

export interface ICategoryAttribute {
    title: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
}

export interface IPagination {
    page: number,
    pageSize: number,
    pageCount: number,
    total: number
}

export interface IResourceMeta {
    pagination: IPagination;
}

export interface ICollectionResponse<T> {
    data: T
    meta: IResourceMeta;
}

export interface IImageData {
    data: {
        attributes: {
            url: string;
            formats: {
                small: {
                    url: string;
                };
            };
        };
    };
}

export interface IAuthor {
    data: {
        attributes: {
            firstname: string;
            lastname: string;
            avatar: {
                data: {
                    attributes: {
                        formats: {
                            thumbnail: {
                                url: string;
                            };
                        };
                    };
                };
            };
        };
    };
}

export interface IArticlesAttribute {
    title: string;
    body: string | MDXRemoteSerializeResult;
    slug: string;
    Image: IImageData;
    createdAt: string;
    author: IAuthor;
    shortDescription: string;
}

export interface IArticle {
    id: number;
    attributes: IArticlesAttribute;
}

export interface IArticleMetadata {
    Title: string;
    excerpt: string;
}

export type TDirection = 1 | -1;

export interface IQueryOptions {
    filters: any;
    sort: any;
    populate: any;
    pagination: {
        page: number;
        pageSize: number;
    };
}

export interface RichTextContentProps {
    content: any; // Replace 'any' with a more specific type if you know the structure of your JSON
}

