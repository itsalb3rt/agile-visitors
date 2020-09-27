import { axiosInstance } from 'boot/axios'

export function create (context, newVisit) {
  return axiosInstance.post('/visits', newVisit)
}
