import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentAPI = createApi({
    reducerPath: 'studentAPI',
    baseQuery:fetchBaseQuery({ baseUrl: 'https://api.hatchways.io/assessment/students' }),
    tagTypes:['students'],
    endpoints:  (builder) =>({
        getAllStudent: builder.query({
            query:(data)=>{

                console.log("Inside students API:", data);
                return  data
                
            },
            providesTags:['Studetns'],
        }),
    })

});


export const { useGetAllStudent } = studentAPI;
    


