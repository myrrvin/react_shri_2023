'use client'

import {cartActions} from '@/redux/features/cart'
import {FunctionComponent} from 'react'
import {useDispatch} from 'react-redux'
import Image from 'next/image'
import resetButton from '../../assets/icons/reset-button.svg'
import classNames from 'classnames'
import styles from './Modal.module.css'
import {createPortal} from 'react-dom'

interface ModalProps {
	title: string
	question: string
	onAccept: () => void
	onClose: () => void
}

const Modal: FunctionComponent<ModalProps> = ({
	title,
	question,
	onAccept,
	onClose,
}) => {
	return createPortal(
		<div className={classNames(styles.modal)} onClick={onClose}>
			<div
				className={classNames(styles['modal-container'])}
				onClick={(e) => e.stopPropagation()}>
				<div className={classNames(styles['content-container'])}>
					<div className={classNames(styles.header)}>
						<h3>{title}</h3>
						<Image src={resetButton} alt='' onClick={onClose}></Image>
					</div>
					<p className={classNames(styles.question)}>{question}</p>
				</div>
				<div className={classNames(styles['button-container'])}>
					<span className={classNames(styles['yes-button'])} onClick={onAccept}>
						Да
					</span>
					<span className={classNames(styles['no-button'])} onClick={onClose}>
						Нет
					</span>
				</div>
			</div>
		</div>,
		document.getElementById('modal')!
	)
}

export default Modal
