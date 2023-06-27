import {FunctionComponent} from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import styles from './FilmCard.module.css'
import CountButtons from '../CountButtons/CountButtons'

interface FilmCardProps {
	id: string
	title: string
	posterUrl: string
	releaseYear: number
	description: string
	genre: string
	rating: number
	director: string
}

const FilmCard: FunctionComponent<FilmCardProps> = ({
	id,
	title,
	posterUrl,
	releaseYear,
	description,
	genre,
	rating,
	director,
}) => {
	return (
		<div className={classNames(styles.film)}>
			<Image
				className={classNames(styles.poster)}
				src={posterUrl}
				alt=''></Image>
			<div className={classNames(styles.content)}>
				<div className={classNames(styles.info)}>
					<div className={classNames(styles.header)}>
						<h1 className={classNames(styles.title)}>{title}</h1>
						<CountButtons id={id}></CountButtons>
					</div>
					<ul className={classNames(styles['info-list'])}>
						<li className={classNames(styles['info-item'])}>
							<span className={classNames(styles['info-title'])}>Жанр:</span>
							<span className={classNames(styles['info-sub-title'])}>
								{genre}
							</span>
						</li>
						<li className={classNames(styles['info-item'])}>
							<span className={classNames(styles['info-title'])}>
								Год выпуска:
							</span>
							<span className={classNames(styles['info-sub-title'])}>
								{releaseYear}
							</span>
						</li>
						<li className={classNames(styles['info-item'])}>
							<span className={classNames(styles['info-title'])}>Рейтинг:</span>
							<span className={classNames(styles['info-sub-title'])}>
								{rating}
							</span>
						</li>
						<li className={classNames(styles['info-item'])}>
							<span className={classNames(styles['info-title'])}>
								Режиссер:
							</span>
							<span className={classNames(styles['info-sub-title'])}>
								{director}
							</span>
						</li>
					</ul>
				</div>
				<div className={classNames(styles.description)}>
					<h3 className={classNames(styles['description-title'])}>Описание</h3>
					<p className={classNames(styles['description-text'])}>
						{description}
					</p>
				</div>
			</div>
		</div>
	)
}

export default FilmCard
