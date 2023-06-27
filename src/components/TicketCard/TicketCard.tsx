// 'use client'

import {FunctionComponent} from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import styles from './TicketCard.module.css'
import Link from 'next/link'

interface TicketCardProps {
	id: string
	title: string
	posterUrl: string
	genre: string
	children: React.ReactNode
}

const TicketCard: FunctionComponent<TicketCardProps> = ({
	id,
	title,
	posterUrl,
	genre,
	children,
}) => {
	return (
		<div>
			<div className={classNames(styles.container)}>
				<Image
					className={classNames(styles['poster-image'])}
					src={posterUrl}
					width={100}
					height={120}
					alt='poster image'></Image>
				<div className={classNames(styles['info-block'])}>
					<h2 className={classNames(styles.title)}>
						<Link href={`film/${id}`}>{title}</Link>
					</h2>
					<p className={classNames(styles['genre-info'])}>{genre}</p>
				</div>
				{children}
			</div>
		</div>
	)
}

export default TicketCard
