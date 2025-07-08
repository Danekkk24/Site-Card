import { useState } from 'react'
import styles from './portfolio-styles.module.css'

const imagesGlob = import.meta.glob(
	'/src/assets/images-portfolio/all/preview/*.{png,jpg,jpeg,svg,webp}',
	{
		eager: true,
		query: '?url',
		import: 'default',
	}
)
const images = Object.values(imagesGlob)

export default function YouTubeThumbnails() {
	const [visibleRows, setVisibleRows] = useState(2)
	const [selectedImage, setSelectedImage] = useState(null)
	const imagesPerRow = 4

	const closeModal = () => {
		setSelectedImage(null)
	}

	const showMoreImage = () => {
		setVisibleRows(visibleRows + 2)
	}

	const renderImages = () => {
		const visibleImages = images.slice(0, visibleRows * imagesPerRow)
		return visibleImages.map((image, index) => (
			<img
				key={index}
				src={image}
				className={styles.gallery_image}
				onClick={() => setSelectedImage(image)}
			/>
		))
	}

	return (
		<div className={styles.image_gallery} style={{ padding: '0 0 30px 0' }}>
			<div className={styles.image_grid}>{renderImages()}</div>
			{visibleRows * imagesPerRow < images.length && (
				<button className={styles.show_more_button} onClick={showMoreImage}>
					Больше работ<p className={styles.more_icon}></p>
				</button>
			)}
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
