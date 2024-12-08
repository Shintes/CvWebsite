import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const translationApi = createApi({
  reducerPath: 'translationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com' }), // Replace with your API base URL
  endpoints: (builder) => ({
    getTranslations: builder.query({
      query: (lang) => ({
        url: '/translate',
        params: {
          lang,
          texts: ["About Me", "Skills", "Experience", "Projects", "Contact"],
        },
      }),
    }),
  }),
});

export const { useGetTranslationsQuery } = translationApi; 