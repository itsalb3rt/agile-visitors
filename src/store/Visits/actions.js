import { axiosInstance } from 'boot/axios'

export function create (context, newVisit) {
  return axiosInstance.post('/visits', newVisit)
}

export function getAll (context, queryString = null) {
  return axiosInstance.get(`/visits${queryString || ''}`)
}
