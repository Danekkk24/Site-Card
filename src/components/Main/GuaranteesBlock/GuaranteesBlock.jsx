import styles from './guaranteesBlock.module.css'

export default function GuaranteesBlock() {
	return (
		<section className={styles.guarantees_block}>
			<h1 style={{ fontSize: '52px', paddingBottom: '20px' }}>ГАРАНТИИ</h1>
			<ol className={styles.guarantees_points}>
				<li className={styles.point}>
					Оплату принимаю через платёжную систему
					<span style={{ color: '#4824ff' }}> ОТП Банка</span>, которая
					контролирует <br /> безопасность денежных переводов.
				</li>
				<li className={styles.point}>
					Убедиться в моей ответственности и профессионализме можно
					<span style={{ color: '#4824ff' }}> написав клиентам </span>,<br />
					оставивших отзывы <span style={{ color: '#4824ff' }}> лично </span>в
					любой момент (отзывы клиентов выше).
				</li>
				<li className={styles.point}>
					Все <span style={{ color: '#4824ff' }}> авторские права </span> на
					работу переходят заказчику после выполнения заказа.
				</li>
				<li className={styles.point}>
					В своих работах использую материалы строго{' '}
					<span style={{ color: '#4824ff' }}>
						разрешенные для личного <br /> и коммерческого использования.
					</span>
				</li>
			</ol>
		</section>
	)
}
