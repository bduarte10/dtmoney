import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://dtmoney-bduarte10.vercel.app/api',
});
