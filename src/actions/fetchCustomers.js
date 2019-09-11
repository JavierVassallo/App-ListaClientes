import {FETCH_CUSTOMERS} from './../constans'
import {createAction} from 'redux-actions';
import { apiGet } from '../api';
import { urlCustomers } from '../api/url';




export const fetchCustomers = createAction (FETCH_CUSTOMERS, apiGet(urlCustomers));