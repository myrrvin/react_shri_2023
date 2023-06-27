'use client'

import FilmCard from '@/components/FilmCard/FilmCard'
import ReviewCard from '@/components/ReviewCard/ReviewCard'
import {
	useGetMovieQuery,
	useGetMovieReviewsQuery,
} from '@/redux/services/movieApi'
import {FunctionComponent} from 'react'
import styles from './page.module.css'
import classNames from 'classnames'

type FilmPageProps = {
	params: {
		filmId: string
	}
}
interface FilmReviewsProps {
	filmId: string
}

type Data = {id: string; text: string; name: string; rating: number}

const FilmReviews: FunctionComponent<FilmReviewsProps> = ({filmId}) => {
	const {data, isLoading, error} = useGetMovieReviewsQuery(filmId)

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <h1>Not Found</h1>
	}

	return data.map((review: Data) => (
		<ReviewCard
			key={review.id}
			name={review.name}
			text={review.text}
			rating={review.rating}></ReviewCard>
	))
}

export default function FilmPage({params: {filmId}}: FilmPageProps) {
	console.log(filmId)

	const {data, isLoading, error} = useGetMovieQuery(filmId)

	console.log(data)

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <h1>Not Found - 404</h1>
	}

	return (
		<section className={classNames(styles['film-section'])}>
			<FilmCard
				id={data.id}
				title={data.title}
				posterUrl={data.posterUrl}
				releaseYear={data.releaseYear}
				description={data.description}
				genre={data.genre}
				rating={data.rating}
				director={data.director}></FilmCard>

			<FilmReviews filmId={filmId}></FilmReviews>
		</section>
	)
}
