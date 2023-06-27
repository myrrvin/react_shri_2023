'use client'

import {FunctionComponent, useState} from 'react'
import classNames from 'classnames'
import {useDispatch, useSelector} from 'react-redux'
import {selectProductAmount} from '@/redux/features/cart/selector'
import {cartActions} from '@/redux/features/cart'
import styles from './CountButtons.module.css'
import Image from 'next/image'
import plus from '../../assets/icons/plus.svg'
import minus from '../../assets/icons/minus.svg'
import Modal from '../Modal/Modal'

interface CountButtonsProps {
	id: string
}

const MIN_COUNT = 0
const MAX_COUNT = 30

const CountButtons: FunctionComponent<CountButtonsProps> = ({id}) => {
	const [isOpen, setIsOpen] = useState(false)
	const productCount = useSelector((state) => selectProductAmount(state, id))
	console.log(id)
	const dispatch = useDispatch()

	function handleCloseModal() {
		document.body.style.overflow = ''
		setIsOpen(false)
	}

	function handleDeleteTicket() {
		document.body.style.overflow = ''
		setIsOpen(false)
		dispatch(cartActions.reset(id))
	}

	return (
		<>
			<div className={classNames(styles.container)}>
				<div
					className={
						productCount > MIN_COUNT
							? classNames(styles.button)
							: classNames(styles.button, styles.button_disabled)
					}
					onClick={() => {
						dispatch(cartActions.decrement(id))

						if (productCount === 1) {
							setIsOpen(true)
						}
					}}>
					<Image src={minus} alt=''></Image>
				</div>
				<span>{productCount}</span>
				<div
					className={
						productCount < MAX_COUNT
							? classNames(styles.button)
							: classNames(styles.button, styles.button_disabled)
					}
					onClick={() => dispatch(cartActions.increment(id))}>
					<Image src={plus} alt=''></Image>
				</div>
			</div>
			{isOpen && (
				<Modal
					title='Удаление билета'
					question='Вы уверены, что хотите удалить билет?'
					onClose={handleCloseModal}
					onAccept={handleDeleteTicket}></Modal>
			)}
		</>
	)
}

export default CountButtons
