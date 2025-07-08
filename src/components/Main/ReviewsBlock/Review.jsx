import styles from './reviews.module.css'

export default function Review(props) {
	return (
		<div className={styles.review_card}>
			<div className={styles.review_content}>
				<div style={{ padding: '0 20px 0 30px' }}>
					<div style={{ display: 'flex', placeItems: 'center' }}>
						<h2 style={{ width: '90%' }}>{props.name}</h2>
						<a className={styles.link} href={props.link} target='_blank'>
							<p className={styles.telegram_icon} />
							<p className={styles.array_corner_icon} />
						</a>
					</div>
					<p className={styles.review}>{props.text}</p>
				</div>
			</div>
		</div>
	)
}
