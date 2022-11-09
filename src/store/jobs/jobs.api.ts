import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IJobItem } from '../../models/models'

const API_KEY = import.meta.env.VITE_API_KEY

export const jobsApi = createApi({
  reducerPath: 'jobs/api',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=${API_KEY}`
  }),
  endpoints: build => ({
    getJobs: build.query<IJobItem[], null>({
      query: () => ({
        url: ``
      })
    })
     
  })
})

export const { useGetJobsQuery } = jobsApi