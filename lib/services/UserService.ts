import { AxiosRequestConfig } from 'axios';
import HttpService from "./HttpService"

interface User {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
}

export interface UserResponse {
	data: User[];
	page: number;
	per_page: number;
	support: {
		text: string;
		url: string;
	};
	total: number;
	total_pages: number;
}

class UserService extends HttpService {
	constructor(options: AxiosRequestConfig) {
		super(options)
	}

	getUsers = async (): Promise<UserResponse> => {
		const response = await this.httpClient.get('/users?per_page=12');
		return response.data;
	}
}


export const userService = new UserService({ baseURL: 'https://reqres.in/api' })