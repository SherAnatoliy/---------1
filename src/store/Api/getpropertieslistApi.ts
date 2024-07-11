import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, apiKey, apiHost } from '../../utils/baseUrl';

// interface Response {
//     response: PropertyResponse[]
// }

interface PropertyListResponse {
    hits: [
        {
        coverPhoto:{
            externalID:string;
            url:string;
        }
        baths:number;
        price:number;
        title:string;
        }
    ]

}




export const propertyApi = createApi({
    reducerPath: 'propertyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', apiKey);
            headers.set('x-rapidapi-host', apiHost);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getPropertyById: builder.query<Response, any>({
            query: (propertyId) => `/properties/detail?externalID=${propertyId}`,
        }),
        getPropertyList: builder.query<PropertyListResponse, string>({
            query: (locationExternalIDs) => `/properties/list?locationExternalIDs=${locationExternalIDs}`,
        }),
    }),
});


export const { useGetPropertyByIdQuery, useGetPropertyListQuery } = propertyApi;
