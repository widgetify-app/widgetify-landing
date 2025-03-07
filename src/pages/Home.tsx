import ContributorsSection from '../components/ContributorsSection'
import FeaturesSection from '../components/FeaturesSection'
import FooterSection from '../components/FooterSection'
import HeroSection from '../components/HeroSection'
import PageWrapper from '../components/PageWrapper'
import WidgetsSection from '../components/WidgetsSection'

export default function Home() {
	return (
		<>
			<HeroSection />
			<PageWrapper className="py-12 space-y-16">
				<FeaturesSection />
				<WidgetsSection />
				<ContributorsSection />
				<FooterSection />
			</PageWrapper>
		</>
	)
}
