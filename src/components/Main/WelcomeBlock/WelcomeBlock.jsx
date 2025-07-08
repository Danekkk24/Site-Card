import reactLogo from '../../../images/react.png'
import styles from './welcomeBlock.module.css'

export default function WelcomeBlock() {
	return (
		<section className={styles.welcome_block}>
			<div className={styles.left_block}>
				<h1>
					Веб-дизайнер <span>Workford</span>
				</h1>
				<h2>
					Создаю <span>продаваемый</span>
					<br /> <span>и уникальный</span>
					<br /> дизайн под ваши запросы
				</h2>
				<h3>
					Занимаюсь веб-дизайном <br />
					на протяжении <span>9 лет</span>
				</h3>
			</div>
			<div className={styles.right_block}>
				<img src={reactLogo} alt='React Logo' />
			</div>
		</section>
	)
}
