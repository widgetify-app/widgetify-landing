import axios, { type AxiosInstance } from 'axios'

const rawGithubApi = axios.create({
	baseURL: 'https://raw.githubusercontent.com/sajjadmrx/btime-desktop/main',
})

export async function getMainClient(): Promise<AxiosInstance> {
	// Check if we're on the client side before accessing localStorage
	const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
	if (process.env.NEXT_PUBLIC_API_URL) {
		return axios.create({
			baseURL: process.env.NEXT_PUBLIC_API_URL,
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
