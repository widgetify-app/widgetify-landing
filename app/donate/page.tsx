import Head from 'next/head'
import PageWrapper from '../../src/components/PageWrapper'
import Donate from '../../src/components/pages/donate/Donate'

export default function DonatePage() {
	return (
		<>
			<Head>
				<title>حمایت مالی از ویجتی‌فای</title>
			</Head>
			<PageWrapper>
				<Donate />
			</PageWrapper>
		</>
	)
}
