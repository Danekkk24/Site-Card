import { useEffect, useRef } from 'react'
import Review from './Review'
import styles from './reviews.module.css'

export default function Reviews() {
	const containerRef = useRef(null)
	const reviewWidthRef = useRef(0)

	const reveiws = [
		<Review
			key={1}
			name='Владислав М.'
			link='https://t.me/h1ckz'
			text='Дизайн лаконичный, понятный и в то же время запоминающийся. Спасибо!'
		></Review>,
		<Review
			key={2}
			name='Андрей Ш.'
			link='https://t.me/h1ckz'
			text='Всё получилось даже лучше, чем я ожидал! Видно, что дизайнер с опытом.'
		></Review>,
		<Review
			key={3}
			name='Максим М.'
			link='https://t.me/h1ckz'
			text='Спасибо за отличный лендинг! Учтены все пожелания, дизайн — 🔥. Приятно было работать!'
		></Review>,
		<Review
			key={4}
			name='Николай К.'
			link='https://t.me/h1ckz'
			text='Профессионал с большим вниманием к деталям. Быстрая коммуникация и аккуратная работа.'
		></Review>,
		<Review
			key={5}
			name='Ульяна Щ.'
			link='https://t.me/h1ckz'
			text='Крутой результат! Особенно порадовало, что дизайнер сам предложил интересные решения — прям в точку.'
		></Review>,
	]

	const visibleReviews = 3

	const handleScroll = () => {
		const box = containerRef.current
		const width = reviewWidthRef.current * visibleReviews

		if (box.scrollLeft <= 0) {
			box.style.scrollBehavior = 'auto'
			box.scrollLeft = box.scrollWidth - 2 * width
			box.style.scrollBehavior = 'smooth'
		}
		if (box.scrollLeft >= box.scrollWidth - width) {
			box.style.scrollBehavior = 'auto'
			box.scrollLeft = width
			box.style.scrollBehavior = 'smooth'
		}
	}

	const btnPrewReview = () => {
		const box = containerRef.current
		box.scrollLeft -= reviewWidthRef.current
	}
	const btnNextReview = () => {
		const box = containerRef.current
		box.scrollLeft += reviewWidthRef.current
	}

	useEffect(() => {
		const box = containerRef.current

		requestAnimationFrame(() => {
			const firstReview = box.querySelector(`.${styles.review_card}`)

			if (!firstReview) return

			reviewWidthRef.current = firstReview.clientWidth
			const width = reviewWidthRef.current * visibleReviews

			box.scrollLeft = (box.scrollWidth - width) / 2
			box.addEventListener('scroll', handleScroll)
		})

		return () => {
			box.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<section className={styles.review_block}>
			<h1>ОТЗЫВЫ</h1>
			<p className={styles.description}>
				Отзывы клиентов, написанные со своих{' '}
				<span className={styles.selecting}>личных аккаунтов</span> Телеграм. Всё
				прозрачно!
				<br />
				Любой отзыв можно <span className={styles.selecting}>открыть</span> в
				Телеграм и <span className={styles.selecting}>спросить</span> об
				впечатленях работы со мной
				<br />у создателя отзыва лично.
			</p>
			<div className={styles.review_carousel}>
				<div className={styles.review_container} ref={containerRef}>
					{reveiws.slice(-visibleReviews)}
					{reveiws}
					{reveiws.slice(0, visibleReviews)}
				</div>
			</div>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<div
					className={styles.next_button}
					style={{ transform: 'rotate(180deg)' }}
				>
					<p className={styles.array_next_icon} onClick={btnPrewReview} />
				</div>
				<div className={styles.next_button}>
					<p className={styles.array_next_icon} onClick={btnNextReview} />
				</div>
			</div>
		</section>
	)
}
