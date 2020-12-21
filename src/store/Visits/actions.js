/* eslint-disable no-unused-vars */
import { axiosInstance } from 'boot/axios'

export function create (context, newVisit) {
  return axiosInstance.post('/visits', newVisit)
}

export function getAll (context, filters = null) {
  const URI = '/visits' + getQueryParams(filters)

  return axiosInstance.get(URI)
}

/**
 * Return the query params depending of the filters
 * @param {Object} filters Object contains filters
 */
function getQueryParams (filters) {
  // api/visits?createAt=between:2020-09-01,2020-09-30
  const { visitorCode, receiverCode, fromDate, toDate, page, limit } = filters
  const hasSomeFilter = Object.keys(filters).some((key) => !!filters[key])
  let query = '?'

  if (!hasSomeFilter) {
    return ''
  }

  // TODO: Implement this
  // if (visitorCode) query = query + `visitor.code=${visitorCode}`
  // if (receiverCode) query = query + `receiver.code=${receiverCode}`
  if (page) query = query + `page=${page}`
  if (limit) query = query + `&limit=${limit}`
  if (fromDate && toDate) {
    query = query + `createdAt=between:${fromDate.replaceAll('/', '-')},${toDate.replaceAll('/', '-')}`
  }
  return query
}
