import { useEffect, useRef, useState } from 'react'
import styles from './carousel.module.css'

const imagesGlob = import.meta.glob(
	'/src/assets/images-portfolio/all/*/*.{png,jpg,jpeg,svg,webp}',
	{
		eager: true,
		query: '?url',
		import: 'default',
	}
)

const images = Object.values(imagesGlob)

export default function Carousel({ direction }) {
	const carouselRef = useRef(null)
	const [isHovered, setIsHovered] = useState(false)
	const requestIdRef = useRef(null)
	const startPositionRef = useRef(0)
	const [selectedImage, setSelectedImage] = useState(null)

	const closeModal = () => {
		setSelectedImage(null)
	}

	useEffect(() => {
		const carousel = carouselRef.current

		const animate = () => {
			if (!isHovered) {
				startPositionRef.current += direction === 'left' ? -1.5 : 1.5

				if (direction === 'left' && startPositionRef.current <= 0) {
					startPositionRef.current = carousel.scrollWidth / 2
				}

				if (
					direction === 'right' &&
					startPositionRef.current >= carousel.scrollWidth / 2
				) {
					startPositionRef.current = 0
				}

				carousel.scrollLeft = startPositionRef.current
			}

			requestIdRef.current = requestAnimationFrame(animate)
		}

		requestIdRef.current = requestAnimationFrame(animate)

		return () => cancelAnimationFrame(requestIdRef.current)
	}, [direction, isHovered])

	return (
		<div
			className={styles.carousel_container}
			ref={carouselRef}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className={styles.carousel_content}>
				{images.map((image, index) => (
					<img
						key={`a-${index}`}
						src={image}
						className={styles.carousel_image}
						onClick={() => setSelectedImage(image)}
					/>
				))}
				{images.map((image, index) => (
					<img
						key={`b-${index}`}
						src={image}
						className={styles.carousel_image}
						onClick={() => setSelectedImage(image)}
					/>
				))}
			</div>
			{selectedImage && (
				<div className={styles.modal_window_image} onClick={closeModal}>
					<div style={{ display: 'flex' }} onClick={e => e.stopPropagation()}>
						<img src={selectedImage} className={styles.modal_image} />
						<p>
							<button
								onClick={closeModal}
								className={styles.modal_image_close_button}
							></button>
						</p>
					</div>
				</div>
			)}
		</div>
	)
}
