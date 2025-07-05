import styles from './header.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.left_header}>
				<ul>
					<li>
						<a>Обо мне</a>
					</li>
					<li>
						<a>Услуги</a>
					</li>
					<li>
						<a>Портфолио</a>
					</li>
					<li>
						<a>Отзывы</a>
					</li>
					<li>
						<a>Гарантии</a>
					</li>
				</ul>
			</div>
			<div className={styles.right_header}>
				<button className={styles.btn}>Связаться</button>
				<a href='#' className={`${styles.icon} ${styles.telegram}`}></a>
				<a href='#' className={`${styles.icon} ${styles.instagram}`}></a>
				<div className={styles.switch}>
					<div className={`${styles.theme} ${styles.light}`}></div>
				</div>
			</div>
		</header>
	)
}
