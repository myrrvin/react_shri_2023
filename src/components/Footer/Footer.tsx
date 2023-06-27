import Link from 'next/link'
import {FunctionComponent} from 'react'
import classNames from 'classnames'

import styles from './Footer.module.css'

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
	return (
		<footer>
			<div className={classNames(styles.container)}>
				<Link href={'/faq'}>Вопросы-ответы</Link>
				<Link href={'/about'}>О нас</Link>
			</div>
		</footer>
	)
}

export default Footer
