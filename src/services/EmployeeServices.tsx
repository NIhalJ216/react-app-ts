import { getData, postData, putData, deleteData } from './restServices'
import { APIS } from '../routes/apiList'

export const getAllEmployees = () => getData(APIS.GET_ALL_EMPLOYEES)
