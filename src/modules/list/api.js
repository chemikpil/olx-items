import {apiUrl} from './constants';

export const fetchDataApi = () => fetch(apiUrl).then(response => response.json())