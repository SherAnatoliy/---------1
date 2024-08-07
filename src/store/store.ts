// import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "./userSlice";
// import { authApi } from "./Api/authApi";
// import { propertyApi } from "./Api/getpropertieslistApi";



// export const store = configureStore({
//     reducer:{
//         userSlice,
//         [authApi.reducerPath]:authApi.reducer,
//         [propertyApi.reducerPath]:propertyApi.reducer,
        
//     },
//     middleware:(getDefaultMiddleware)=>
//       getDefaultMiddleware().concat([authApi.middleware, propertyApi.middleware]),
    
// })
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch


import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { authApi } from "./Api/authApi";
import { propertyApi } from "./Api/getpropertieslistApi";
import favoriteSlice from "../favoriteSlice"; // Импортируем новый слайс

export const store = configureStore({
    reducer: {
        userSlice,
        [authApi.reducerPath]: authApi.reducer,
        [propertyApi.reducerPath]: propertyApi.reducer,
        favoriteSlice, // Добавляем новый слайс
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([authApi.middleware, propertyApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
