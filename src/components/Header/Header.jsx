import { useState } from 'react'
import styles from './header.module.css'
import ModalWindow from './ModalWindow/ModalWindow'

export default function Header() {
	const [showModal, setShowModal] = useState(false)

	function handleOpenModal() {
		setShowModal(true)
	}

	function handleCloseModal() {
		setShowModal(false)
	}

	return (
		<header className={styles.header}>
			<div className={styles.left_header}>
				<ul>
					<li>
						<a href='#welcome_block'>Обо мне</a>
					</li>
					<li>
						<a href='#service_block'>Услуги</a>
					</li>
					<li>
						<a href='#portfolio_block'>Портфолио</a>
					</li>
					<li>
						<a href='#reviews_block'>Отзывы</a>
					</li>
					<li>
						<a href='#guarantees_block'>Гарантии</a>
					</li>
				</ul>
			</div>
			<div className={styles.right_header}>
				<button onClick={handleOpenModal} className={styles.btn}>
					Связаться
				</button>
				<ModalWindow show={showModal} onClose={handleCloseModal}>
					<h2 style={{ color: '#4824ff', fontSize: '40px' }}>Контакты</h2>
					<p style={{ fontSize: '22px' }}>
						Вы можете связаться со мной в Телеграм <br /> или Инстаграм👇
					</p>
				</ModalWindow>
				<a href='#' className={`${styles.icon} ${styles.telegram}`}></a>
				<a href='#' className={`${styles.icon} ${styles.instagram}`}></a>
				<div className={styles.switch}>
					<div className={`${styles.theme} ${styles.light}`}></div>
				</div>
			</div>
		</header>
	)
}
