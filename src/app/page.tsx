'use client'

import {useGetMoviesQuery} from '@/redux/services/movieApi'
import TicketCard from '@/components/TicketCard/TicketCard'
import {FunctionComponent, useEffect, useState} from 'react'
import classNames from 'classnames'
import CountButtons from '@/components/CountButtons/CountButtons'
import styles from './page.module.css'
import {useDebounce} from '@/hooks/useDebounce'
import localFont from 'next/font/local'
import {useDispatch, useSelector} from 'react-redux'
import {selectFilterModule} from '@/redux/features/filter/selector'
import {filterActions} from '@/redux/features/filter'
import Filter from '@/components/Filter/Filter'

const SFProText = localFont({
	src: '../assets/fonts/SFProText-Regular.ttf',
	display: 'swap',
})

interface FilmButtonProps {
	id: string
}

const Films: FunctionComponent = () => {
	const {data, isLoading, error} = useGetMoviesQuery({})
	const filter = useSelector((state) => selectFilterModule(state))

	console.log(filter)

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (!data || error) {
		return <div>NotFound</div>
	}

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '16px',
				flex: '1 1 auto',
			}}>
			{data
				.filter((filmData: any) =>
					filmData.title.startsWith(filter.input) && filter.genre
						? filter.genre === filmData.genre
						: true
				)
				.map((film: any) => (
					<TicketCard
						key={film.id}
						id={film.id}
						title={film.title}
						posterUrl={film.posterUrl}
						genre={film.genre}>
						<CountButtons id={film.id}></CountButtons>
					</TicketCard>
				))}
		</div>
	)
}

interface FiltersCardProps {}

const FiltersCard: FunctionComponent<FiltersCardProps> = () => {
	const [text, setText] = useState('')
	const debouncedText = useDebounce(text, 500)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(filterActions.setInputFilter(debouncedText))
	}, [debouncedText, dispatch])

	return (
		<div className={classNames(styles.filters)}>
			<h2 className={classNames(styles['filters-title'])}>Фильтр поиска</h2>
			<ul className={classNames(styles['filter-list'])}>
				<li className={classNames(styles['filter-item'], SFProText.className)}>
					<h3 className={classNames(styles['filter-title'])}>Название</h3>
					<input
						className={classNames(styles.filter, SFProText.className)}
						value={text}
						placeholder='Введите название'
						onChange={(e) => setText(e.target.value)}></input>
				</li>

				<li className={classNames(styles['filter-item'])}>
					<h3
						className={classNames(styles['filter-title'], SFProText.className)}>
						Жанр
					</h3>
					<Filter filtration='genre'></Filter>
				</li>

				<li className={classNames(styles['filter-item'])}>
					<h3
						className={classNames(styles['filter-title'], SFProText.className)}>
						Кинотеатр
					</h3>
					<Filter filtration='cinema'></Filter>
				</li>
			</ul>
		</div>
	)
}

export default function Home() {
	return (
		<section style={{display: 'flex', gap: '24px', flex: '1 0 auto'}}>
			<FiltersCard></FiltersCard>
			<Films></Films>
		</section>
	)
}
