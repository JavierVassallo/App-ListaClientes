import {UPDATE_CUSTOMER} from './../constans'
import {createAction} from 'redux-actions';
import { apiPut } from '../api';
import { urlCustomers } from '../api/url';





export const updateCustomer= createAction (UPDATE_CUSTOMER,
    (id, customer) => apiPut(urlCustomers,id,customer) () );