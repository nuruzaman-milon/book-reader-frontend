import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { IBook, IBooks } from '../../types/booksTypes';

export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://book-reader-server.onrender.com/api/v1/books'
    }),
    tagTypes: ['Book'],
    endpoints:(builder) =>({
        getAllBooks: builder.query<IBooks, string>({
            query: () => `/`,
            providesTags: ['Book'],
        }),
        getAllBooksDsc: builder.query<IBooks, string>({
            query: () => `/dsc`,
            providesTags: ['Book'],
        }),
        getABookById: builder.query<IBook, string>({
            query: (id) => `/${id}`,
          }),
        // mutation start
        addBook: builder.mutation<IBook, Partial<IBook>>({
            query:(payload) => ({
                url: '/',
                method: 'POST',
                body: payload,
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags: ['Book']
        })
    })
})

export const {useGetAllBooksQuery,useGetAllBooksDscQuery, useGetABookByIdQuery, useAddBookMutation} = booksApi;