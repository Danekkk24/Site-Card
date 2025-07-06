import { useCallback, useEffect, useState } from 'react'
import styles from './modalWindow.module.css'

export default function ModalWindow({ show, onClose, children }) {
	const [isVisible, setIsVisible] = useState(false)

	const handleKeyDown = useCallback(
		event => {
			if (event.key === 'Escape') {
				onClose()
			}
		},
		[onClose]
	)

	useEffect(() => {
		if (show) {
			setIsVisible(true)
			document.addEventListener('keydown', handleKeyDown)
		} else {
			const timer = setTimeout(() => setIsVisible(false), 800)
			document.removeEventListener('keydown', handleKeyDown)
			return () => clearTimeout(timer)
		}
	}, [show, handleKeyDown])

	useEffect(() => {
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [handleKeyDown])

	return (
		<div
			className={`${styles.modal_backdrop} ${show ? styles.show : ''}`}
			style={{ display: 'isVisible' }}
			onClick={onClose}
		>
			<div className={styles.modal_content} onClick={e => e.stopPropagation()}>
				<button
					onClick={onClose}
					className={styles.modal_close_btn}
					aria-label='Close modal'
				></button>
				{children}
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<a href='#' target='_blank' className={styles.social_btn}>
						<a className={`${styles.social} ${styles.telegram}`} />
						Telegram
					</a>
					<a href='#' target='_blank' className={styles.social_btn}>
						<a className={`${styles.social} ${styles.instagram}`} />
						Instagram
					</a>
				</div>
			</div>
		</div>
	)
}
