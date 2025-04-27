import axios, { type AxiosInstance } from 'axios'

const rawGithubApi = axios.create({
	baseURL: 'https://raw.githubusercontent.com/sajjadmrx/btime-desktop/main',
})

export async function getMainClient(): Promise<AxiosInstance> {
	const token = localStorage.getItem('token')
	if (import.meta.env.VITE_API) {
		return axios.create({
			baseURL: import.meta.env.VITE_API,
			headers: {
				Authorization: token ? `Bearer ${token}` : undefined,
			},
		})
	}

	const urlResponse = await rawGithubApi.get('/.github/api.txt')
	return axios.create({
		baseURL: urlResponse.data,
		headers: {
			Authorization: token ? `Bearer ${token}` : undefined,
		},
	})
}
