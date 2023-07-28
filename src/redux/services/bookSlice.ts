import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { IBooks } from '../../types/booksTypes';

export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://book-reader-server.onrender.com/api/v1/'
    }),
    endpoints:(builder) =>({
        getAllBooks: builder.query<IBooks, string>({
            query: () => `books/dsc`,
        })
    })
})

export const {useGetAllBooksQuery} = booksApi;