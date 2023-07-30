import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { IBooks } from '../../types/booksTypes';

export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://book-reader-server.onrender.com/api/v1/books'
    }),
    endpoints:(builder) =>({
        getAllBooks: builder.query<IBooks, string>({
            query: () => `/`
        }),
        getAllBooksDsc: builder.query<IBooks, string>({
            query: () => `/dsc`
        }),
        
    })
})

export const {useGetAllBooksQuery,useGetAllBooksDscQuery} = booksApi;