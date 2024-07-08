// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { baseUrl } from '../../utils/baseUrl';

// // Определение интерфейса данных о доме
// interface IHome {
//   description: {
//     baths_full: number;
//     baths_half: number | null;
//     beds: number;
//     lot_sqft: number | null;
//     sqft: number;
//   };
//   estimate: {
//     date: string;
//     estimate: number;
//   };
//   flags: {
//     // Здесь перечислите все флаги
//     is_coming_soon: boolean | null;
//     is_contingent: boolean | null;
//     // и так далее
//   };
//   list_price: number;
//   listing_id: string;
//   location: {
//     address: {
//       city: string;
//       coordinate: {
//         lat: number;
//         lon: number;
//       };
//       line: string;
//       postal_code: string;
//       state_code: string;
//     };
//   };
//   permalink: string;
//   primary_photo: {
//     href: string;
//   };
//   property_id: string;
//   source: {
//     type: string;
//   };
//   status: string;
// }

// // Создание API для работы с домами
// export const  homeApi = createApi({
//   reducerPath: 'homeApi',
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     fetchRelatedHomes: builder.query<IHome[], void>({
//       query: () => ({
//         url: 'https://realtor-com4.p.rapidapi.com/properties/list-similar-homes?property_id=4017223400',  // Примерный путь к вашему API для получения домов
//         method: 'GET',
//       }),
//     }),
//   }),
// });

// export const { useFetchRelatedHomesQuery } = homeApi;


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, apiKey, apiHost } from '../../utils/baseUrl';

interface Response {
    response: PropertyResponse[]
}

interface PropertyListResponse {
    hits: [
        {
        coverPhoto:{
            externalID:string;
            url:string;
        }
        baths:number;
        }
    ]

}

interface PropertyResponse {
    hits: [];
    id: string;
    ownerID: string;
    userExternalID: string;
    sourceID: number;
    state: string;
    _geoloc: {
        geography: string;
    };
    purpose: string;
    price: number;
    product: string;
    productLabel: string;
    productScore: number;
    rentFrequency: string;
    referenceNumber: string;
    permitNumber: string;
    title: string;
    title_l1: string;
    externalID: string;
    slug: string;
    slug_l1: string;
    location: {
        category: string;
    };
    createdAt: number;
    updatedAt: number;
    reactivatedAt: number;
    rooms: number;
    baths: number;
    area: number;
    score: number;
    score_l1: number;
    coverPhoto: string;
    photoCount: number;
    videoCount: number;
    panoramaCount: number;
    phoneNumber: string;
    contactName: string;
    agency: string;
    hash: string;
    keywords: string;
    isVerified: boolean;
    verification: {
        verifiedScore: number;
    };
    completionStatus: string;
    randBoostScore: number;
    randBoostScore_l1: number;
    floorPlanID: number;
    furnishingStatus: string;
    extraFields: {
        type: string;
    };
    cityLevelScore: number;
    indyScore: number;
    indyScore_l1: number;
    hasMatchingFloorPlans: boolean;
    photoIDs: string[];
    hidePrice: boolean;
    objectID: string;
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
