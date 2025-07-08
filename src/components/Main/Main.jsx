import PortfolioBlock from './PortfolioBlock/PortfolioBlock.jsx'
import ReviewsBlock from './ReviewsBlock/ReviewsBlock.jsx'
import ServiceBlock from './ServiceBlock/ServiceBlock.jsx'
import WelcomeBlock from './WelcomeBlock/WelcomeBlock.jsx'

export default function Main() {
	return (
		<main>
			<WelcomeBlock />
			<ServiceBlock />
			<PortfolioBlock />
			<ReviewsBlock />
		</main>
	)
}
