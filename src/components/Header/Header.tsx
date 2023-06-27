'use client'

import Link from 'next/link'
import Image from 'next/image'
import {FunctionComponent} from 'react'
import classNames from 'classnames'

import basket from '../../assets/icons/basket.svg'
import styles from './Header.module.css'
import {useSelector} from 'react-redux'
import {selectCartModule} from '@/redux/features/cart/selector'

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
	const cart = useSelector((state: any) => selectCartModule(state))

	let productsNum = 0

	for (const key in cart) {
		productsNum += cart[key]
	}

	return (
		<header className={classNames(styles.header)}>
			<div className={classNames(styles.container)}>
				<Link href={'/'}>
					<h1>Билетопоиск</h1>
				</Link>
				<div className={classNames(styles['cart-container'])}>
					{Boolean(productsNum) && (
						<div className={classNames(styles['product-num'])}>
							{productsNum}
						</div>
					)}
					<Link href={'/cart'}>
						<Image width={32} height={32} src={basket} alt='basket'></Image>
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
