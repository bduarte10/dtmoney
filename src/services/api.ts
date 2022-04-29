import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://dtmoney-orcin.vercel.app/api',
});
