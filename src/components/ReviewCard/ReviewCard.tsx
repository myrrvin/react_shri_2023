import {FunctionComponent} from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import styles from './ReviewCard.module.css'
import fakeAvatar from '../../assets/icons/fake-avatar.svg'

interface ReviewCardProps {
	name: string
	text: string
	rating: number
	imgSrc?: string | undefined
}

const ReviewCard: FunctionComponent<ReviewCardProps> = ({
	name,
	text,
	rating,
	imgSrc,
}) => {
	return (
		<div className={classNames(styles.review)}>
			<Image
				className={classNames(styles.avatar)}
				src={imgSrc ? imgSrc : fakeAvatar}
				alt=''></Image>
			<div className={classNames(styles.content)}>
				<div className={classNames(styles.header)}>
					<h3 className={classNames(styles.title)}>{name}</h3>
					<div className={classNames(styles['rating-container'])}>
						<span className={classNames(styles['rating-title'])}>Оценка:</span>
						<span className={classNames(styles['rating-mark'])}>{rating}</span>
					</div>
				</div>
				<p className={classNames(styles.text)}>{text}</p>
			</div>
		</div>
	)
}

export default ReviewCard
