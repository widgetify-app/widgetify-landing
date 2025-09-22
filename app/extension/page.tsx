import PageWrapper from '../../src/components/PageWrapper'
import { Home } from '../../src/components/pages/home/Home'

export default function ExtensionPage() {
	return (
		<PageWrapper fullWidth={true}>
			<Home />
		</PageWrapper>
	)
}
