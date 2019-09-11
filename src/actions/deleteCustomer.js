import {DELETE_CUSTOMER} from './../constans'
import {createAction} from 'redux-actions';
import { apiDelete } from '../api';
import { urlCustomers } from '../api/url';





export const deleteCustomer= createAction (DELETE_CUSTOMER,
    id => apiDelete(urlCustomers,id) () );