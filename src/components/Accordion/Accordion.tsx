'use client'

// -------- imports --------

import {useRef, useState} from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import styles from './Accordion.module.css'

import arrowUp from '@/assets/icons/arrow-up.svg'
import arrowDown from '@/assets/icons/arrow-down.svg'

// -------- interfaces --------

interface AccordionProps {
	question: string
	children: JSX.Element
}

// -------- Accordion --------

const Accordion = ({question, children}: AccordionProps) => {
	const [isActive, setIsActive] = useState(false)
	const contentWrapper = useRef<HTMLDivElement>(null)

	return (
		<div className={classNames(styles.accordion)}>
			<div className={classNames(styles.container)}>
				<div
					className={classNames(styles.header)}
					onClick={() => setIsActive(!isActive)}>
					<h2 className={classNames(styles.title)}>{question}</h2>
					<Image
						className={classNames(styles.image)}
						src={isActive ? arrowUp : arrowDown}
						alt=''></Image>
				</div>
				<div
					ref={contentWrapper}
					style={{
						maxHeight:
							isActive && contentWrapper.current
								? contentWrapper.current.firstElementChild!.getBoundingClientRect()
										.height + 'px'
								: '0px',
					}}
					className={classNames(styles['content-container'])}>
					<div className={classNames(styles.content)}>{children}</div>
				</div>
			</div>
		</div>
	)
}

export default Accordion
