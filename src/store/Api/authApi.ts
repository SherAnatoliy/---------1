

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, apiKey, apiHost } from '../../utils/baseUrl';

interface ILoginUserResponse {
    user_id?: number; 
    email: string;
    password: string;
}

interface ILoginUserPayload {
    email: string;
    password: string;
}

interface IGetUserResponse {
    status: number;
    message: {
        mail: string;
        user_id: string;
        name: string;
        phone_number: string;
        city: string;
        reg_date: string;
    };
}

// Создание API

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', apiKey);
            headers.set('X-RapidAPI-Host', apiHost);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        // Раскомментируйте или добавьте другие эндпоинты здесь, если это необходимо
        loginUser: builder.mutation<ILoginUserResponse, ILoginUserPayload>({
            query: (payload) => ({
                url: 'login',
                method: 'POST',
                body: payload,
            }),
        }),
        getUser: builder.query<IGetUserResponse, string>({
            query: (userId) => `/user?${userId}`,
        }),
    }),
});

// Экспорт хуков для использования в компонентах React

export const { useGetUserQuery, useLoginUserMutation } = authApi;


