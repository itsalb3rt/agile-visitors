import { axiosInstance } from 'boot/axios'

export function getUsers (context, queryString = null) {
  return axiosInstance.get(`/users${queryString || ''}`)
}
