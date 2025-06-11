import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { API_RESPONSE_CODES } from '../utils/Constants'

const baseURL = import.meta.env.VITE_API_URL

const getAuthHeaders = (): Record<string, string> => {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, HEAD, DELETE',
  }
}

const handleResponse = <T = any,>(res: AxiosResponse<T>) => {
  console.log('Response', res)
  if (res.status === API_RESPONSE_CODES.SUCCESS) {
    return { data: res.data, isSuccessful: true, error: null, errorCode: null }
  }
  return res
}

const handleError = async (err: AxiosError): Promise<any> => {
  const { response } = err
  if (response) {
    const { status, data, statusText } = response

    const error = (data as any)?.errors || (data as any)?.message || statusText

    return {
      error,
      errorCode: status,
      isSuccessful: false,
      data: (data as any)?.data || null,
    }
  }

  // Handle network errors explicitly
  if (err.message === 'Network Error') {
    return {
      error: 'Network Error. Please check your connection.',
      errorCode: API_RESPONSE_CODES.INTERNAL_SERVER_ERROR,
      isSuccessful: false,
      data: null,
    }
  }

  return {
    error: err.toJSON(),
    errorCode: API_RESPONSE_CODES.INTERNAL_SERVER_ERROR,
    isSuccessful: false,
    data: null,
  }
}

const makeRequest = async <T = any,>(
  method: 'get' | 'post' | 'put' | 'patch' | 'delete',
  url: string,
  body: T | null = null,
) => {
  const headers = getAuthHeaders()

  const config: AxiosRequestConfig = {
    url: `${baseURL}${url}`,
    method,
    headers,
    ...(body && { data: body }),
  }

  try {
    const res = await axios(config)
    return handleResponse(res)
  } catch (err) {
    return handleError(err as AxiosError)
  }
}

// Public API functions
export const getData = (url: string) => makeRequest('get', url, null)
export const postData = <T,>(url: string, body: T) => makeRequest('post', url, body)
export const putData = <T,>(url: string, body: T) => makeRequest('put', url, body)
export const deleteData = (url: string) => makeRequest('delete', url, null)
export const patchData = <T,>(url: string, body: T) => makeRequest('patch', url, body)
