import {
	DESKTOP_LINK,
	DISCORD_LINK,
	GITHUB_LINK,
	PWA_LINK,
	TELEGRAM_LINK,
} from '../constants'

export default function FooterSection() {
	return (
		<footer>
			<ul className="grid grid-cols-2">
				<li className="py-8 space-y-2">
					<h3>ویجیتی‌فای</h3>
					<p className="text-sm font-light text-neutral-500">
						راهکار هوشمند مدیریت ویجت‌ها
					</p>
					<ul className="flex items-center space-x-2">
						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={DISCORD_LINK}
								className="transition text-neutral-500 hover:text-neutral-900"
							>
								<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
									<path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path>
								</svg>
							</a>
						</li>
						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={GITHUB_LINK}
								className="transition text-neutral-500 hover:text-neutral-900"
							>
								<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
									></path>
								</svg>
							</a>
						</li>

						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={TELEGRAM_LINK}
								className="transition text-neutral-500 hover:text-neutral-900"
							>
								<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
									<path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
								</svg>
							</a>
						</li>
					</ul>
				</li>
				<li className="py-8 space-y-2">
					<h3>لینک‌های مفید</h3>
					<ul className="space-y-1">
						<li className="text-sm font-light transition text-neutral-500 hover:text-neutral-900">
							<a target="_blank" rel="noopener noreferrer" href={PWA_LINK}>
								نسخه وب
							</a>
						</li>
						<li className="text-sm font-light transition text-neutral-500 hover:text-neutral-900">
							<a target="_blank" rel="noopener noreferrer" href={DESKTOP_LINK}>
								نسخه دسکتاپ
							</a>
						</li>
						<li className="text-sm font-light text-neutral-500">
							<span className="cursor-not-allowed">نسخه اکستنشن‌ مرورگرها (به زودی)</span>
						</li>
						<li className="text-sm font-light text-neutral-500">
							<span className="cursor-not-allowed">نسخه اندروید (به زودی)</span>
						</li>
					</ul>
				</li>
			</ul>
			<p className="flex items-center justify-between py-4 text-xs font-light border-t border-slate-200">
				<span>&copy; {new Date().getFullYear()} ویجیتی‌فای</span>
				<span>ساخته شده با عشق در ایران</span>
			</p>
		</footer>
	)
}
