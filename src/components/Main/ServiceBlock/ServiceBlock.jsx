import styles from './serviceBlock.module.css'

export default function ServiceBlock() {
	return (
		<div className={styles.service_block} draggable='false'>
			<h1 style={{ fontSize: '52px' }}>УСЛУГИ</h1>
			<p style={{ fontSize: '27px' }}>
				Создаю <span style={{ color: '#4824ff' }}>статический дизайн </span>по
				следующим направлениям:
			</p>
			<div style={{ display: 'flex', flexWrap: 'wrap' }}>
				<div className={styles.tag}>
					<p className={styles.tag_icon} />
					Рекламные баннеры
				</div>
				<div className={styles.tag}>
					<p className={styles.tag_icon} />
					Превью для видео YouTube
				</div>
				<div className={styles.tag}>
					<p className={styles.tag_icon} />
					Оформление YouTube каналов
				</div>
				<div className={styles.tag}>
					<p className={styles.tag_icon} />
					Инфографика
				</div>
				<div className={styles.tag}>
					<p className={styles.tag_icon} />
					Оформление для Instagram
				</div>
				<div className={styles.tag}>
					<p className={styles.tag_icon} />
					Оформление для FaceBook
				</div>
			</div>
			<p style={{ fontSize: '27px' }}>
				Открыт для обсуждения создания дизайна и по другим направлениям. <br />
				Детальней готов обсудить при
				<span style={{ color: '#4824ff' }}> личной переписке.</span>
			</p>
		</div>
	)
}
