import { useQuery } from '@tanstack/react-query'
import { Github } from 'lucide-react'

interface Contributor {
	login: string
	avatar_url: string
	html_url: string
	contributions: number
}

const fetchContributors = async () => {
	const repositories = [
		'https://api.github.com/repos/widgetify-app/widgetify-pwa/contributors',
		'https://api.github.com/repos/sajjadmrx/btime-desktop/contributors',
		'https://api.github.com/repos/widgetify-app/widgetify-landing/contributors',
	]

	const contributorsData = await Promise.all(
		repositories.map(async (url) => {
			const response = await fetch(url)
			const json = await response.json()
			if (!response.ok) {
				if (
					response.status === 403 &&
					response.headers.get('X-RateLimit-Remaining') === '0'
				) {
					throw new Error('Rate limit exceeded')
				}
				throw new Error(json.message || 'خطایی رخ داد')
			}
			return json
		}),
	)

	const contributorMap = new Map()
	// biome-ignore lint/complexity/noForEach: <explanation>
	contributorsData.flat().forEach((contributor) => {
		if (contributorMap.has(contributor.login)) {
			const existing = contributorMap.get(contributor.login)
			existing.contributions += contributor.contributions
		} else {
			contributorMap.set(contributor.login, { ...contributor })
		}
	})

	const uniqueContributors = Array.from(contributorMap.values()).sort(
		(a, b) => b.contributions - a.contributions,
	)

	return uniqueContributors
}

export default function ContributorsSection() {
	const { data: contributors, isLoading } = useQuery({
		queryKey: ['contributors'],
		queryFn: fetchContributors,
	})

	return (
		<section className="py-8">
			<div className="flex flex-col items-center pb-6 mb-8 border-b border-gray-200">
				<h2 className="mb-2 text-3xl font-bold text-center">مشارکت‌کنندگان</h2>
				<p className="text-gray-500">شما هم میتونید به بهبود ویجتیفای کمک کنید</p>
			</div>

			{isLoading ? (
				<div className="p-16 text-center">
					<div className="inline-block w-12 h-12 mb-4 border-4 rounded-full border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent animate-spin"></div>
					<p className="text-gray-500">در حال بارگذاری مشارکت‌کنندگان...</p>
				</div>
			) : contributors?.length ? (
				<>
					<div className="grid grid-cols-3 gap-4 mb-8 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
						{contributors.map((contributor: Contributor) => (
							<a
								key={contributor.login}
								href={contributor.html_url}
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-col items-center transition-transform hover:scale-105"
							>
								<div className="relative mb-3 overflow-hidden rounded-full bg-gradient-to-br from-blue-100 to-indigo-100">
									<img
										src={contributor.avatar_url}
										alt={contributor.login}
										className="object-cover w-16 h-16"
										loading="lazy"
									/>
								</div>
								<p className="text-sm font-medium text-center">{contributor.login}</p>
							</a>
						))}
					</div>
					<div className="flex justify-center">
						<a
							href="https://github.com/widgetify-app"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center px-4 py-2 text-sm text-gray-600 transition-colors border rounded-md hover:bg-gray-50 hover:border-blue-400"
						>
							<Github size={18} className="ml-2" />
							مشارکت در گیت‌هاب
						</a>
					</div>
				</>
			) : (
				<div className="p-10 text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
					<p className="mb-2 text-lg">
						😅 اوه نه! به نظر می‌رسد که به محدودیت نرخ GitHub رسیده‌ایم.
					</p>
					<p className="text-gray-500">
						لطفاً بعداً دوباره تلاش کنید یا مستقیماً به پروژه در گیت‌هاب سر بزنید.
					</p>
					<div className="flex justify-center mt-6">
						<a
							href="https://github.com/widgetify-app"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center px-4 py-2 text-sm text-gray-600 transition-colors bg-white border rounded-md hover:bg-gray-50 hover:border-blue-400"
						>
							<Github size={18} className="ml-2" />
							مشاهده در گیت‌هاب
						</a>
					</div>
				</div>
			)}
		</section>
	)
}
