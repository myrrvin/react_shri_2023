'use client'

import CountButtons from '@/components/CountButtons/CountButtons'
import TicketCard from '@/components/TicketCard/TicketCard'
import {
	selectCartModule,
	selectProductAmount,
} from '@/redux/features/cart/selector'
import {useGetMovieQuery} from '@/redux/services/movieApi'
import {FunctionComponent, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Image from 'next/image'
import {cartActions} from '@/redux/features/cart'
import resetButton from '../../assets/icons/reset-button.svg'
import fakeImage from '../../assets/icons/fake-img.svg'
import classNames from 'classnames'
import styles from './Cart.module.css'
import Modal from '@/components/Modal/Modal'

interface ResetButtonProps {
	id: string
}

const ResetButton: FunctionComponent<ResetButtonProps> = ({id}) => {
	const dispatch = useDispatch()

	const [isOpen, setIsOpen] = useState(false)

	function handleCloseModal() {
		document.body.style.overflow = ''
		setIsOpen(false)
	}

	function handleDeleteTicket() {
		document.body.style.overflow = ''
		dispatch(cartActions.reset(id))
	}

	return (
		<>
			{isOpen && (
				<Modal
					title='Удаление билета'
					question='Вы уверены, что хотите удалить билет?'
					onClose={handleCloseModal}
					onAccept={handleDeleteTicket}></Modal>
			)}
			<Image
				src={resetButton}
				alt=''
				onClick={() => {
					document.body.style.overflow = 'hidden'
					setIsOpen(true)
				}}></Image>
		</>
	)
}

interface CartTicketCardProps {
	id: string
}

const CartTicketCard: FunctionComponent<CartTicketCardProps> = ({id}) => {
	const {data, isLoading, error} = useGetMovieQuery(id)
	const dispatch = useDispatch()

	if (isLoading) {
		return (
			<TicketCard
				key={id}
				id={id}
				title='Loading...'
				posterUrl={fakeImage}
				genre=''>
				<div></div>
			</TicketCard>
		)
	}

	if (!data || error) {
		return <div></div>
	}

	return (
		<>
			<TicketCard
				key={data.id}
				id={data.id}
				title={data.title}
				posterUrl={data.posterUrl}
				genre={data.genre}>
				<CountButtons id={data.id}></CountButtons>
				<ResetButton id={data.id}></ResetButton>
			</TicketCard>
		</>
	)
}

interface CartTicketsProps {
	cart: any
	cartTicketsId: string[]
}

const CartTickets: FunctionComponent<CartTicketsProps> = ({
	cart,
	cartTicketsId,
}) => {
	return (
		<div>
			{cartTicketsId.map((id) => (
				<CartTicketCard key={id} id={id}></CartTicketCard>
			))}
		</div>
	)
}

interface CartProps {}

const Cart: FunctionComponent<CartProps> = () => {
	const cart = useSelector((state) => selectCartModule(state))

	const cartTicketsId = []
	let ticketsCount = 0

	for (const key in cart) {
		cartTicketsId.push(key)
		ticketsCount += cart[key]
	}

	return (
		<section className={classNames(styles.cart)}>
			<CartTickets cart={cart} cartTicketsId={cartTicketsId}></CartTickets>

			{Boolean(ticketsCount) && (
				<div className={classNames(styles['count-container'])}>
					<h2>Итого билетов:</h2>
					<span>{ticketsCount}</span>
				</div>
			)}
		</section>
	)
}

export default Cart
