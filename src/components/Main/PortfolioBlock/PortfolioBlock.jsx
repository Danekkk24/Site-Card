import { useState } from 'react'
import arrow from '../../../images/arrow.png'
import AllGallery from './AllGallery'
import Banners from './Banners'
import InstagramStories from './InstagramStories'
import styles from './portfolioBlock.module.css'
import YouTubeDesign from './YouTubeDesign'
import YouTubeThumbnails from './YouTubeThumbnails'

export default function PortfolioBlock() {
	const [selectedCategory, setSelectedCategory] = useState('All')
	const renderComponents = () => {
		switch (selectedCategory) {
			case 'All':
				return <AllGallery />
			case 'Banners':
				return <Banners />
			case 'YouTubeThumbnails':
				return <YouTubeThumbnails />
			case 'YouTubeDesign':
				return <YouTubeDesign />
			case 'InstagramStories':
				return <InstagramStories />
			default:
				return <AllGallery />
		}
	}

	return (
		<section id='portfolio_block' className={styles.portfolio_block}>
			<div className={styles.first_block}>
				<h1 className={styles.main_title}>Портфолио</h1>
				<div style={{ position: 'absolute', marginLeft: '-660px' }}>
					<p className={styles.gradient_part_one}></p>
					<p className={styles.title_border}>Портф</p>
				</div>
				<div style={{ position: 'absolute', marginLeft: '620px' }}>
					<p className={styles.gradient_part_two}></p>
					<p className={styles.title_border}>Фолио</p>
				</div>
				<img className={styles.arrow_icon} src={arrow} draggable='false' />
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginBottom: '20px',
				}}
			>
				<p
					className={`${styles.tag} ${
						selectedCategory === 'All' ? styles.selected : ''
					}`}
					onClick={() => {
						setSelectedCategory('All')
					}}
				>
					Все работы
				</p>
				<p
					className={`${styles.tag} ${
						selectedCategory === 'Banners' ? styles.selected : ''
					}`}
					onClick={() => {
						setSelectedCategory('Banners')
					}}
				>
					Баннеры
				</p>
				<p
					className={`${styles.tag} ${
						selectedCategory === 'YouTubeThumbnails' ? styles.selected : ''
					}`}
					onClick={() => {
						setSelectedCategory('YouTubeThumbnails')
					}}
				>
					Превью YouTube
				</p>
				<p
					className={`${styles.tag} ${
						selectedCategory === 'YouTubeDesign' ? styles.selected : ''
					}`}
					onClick={() => {
						setSelectedCategory('YouTubeDesign')
					}}
				>
					Оформление YouTube
				</p>
				<p
					className={`${styles.tag} ${
						selectedCategory === 'InstagramStories' ? styles.selected : ''
					}`}
					onClick={() => {
						setSelectedCategory('InstagramStories')
					}}
				>
					Истории Instagram
				</p>
			</div>
			<div className={styles.content}>{renderComponents()}</div>
		</section>
	)
}
