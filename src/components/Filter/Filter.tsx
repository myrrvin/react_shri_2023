'use client'

import Link from 'next/link'
import {FunctionComponent, useRef, useState} from 'react'
import classNames from 'classnames'
import styles from './Filter.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {filterActions} from '@/redux/features/filter'
import {createPortal} from 'react-dom'
import {selectFilterModule} from '@/redux/features/filter/selector'

interface FilterProps {
	filtration: 'cinema' | 'genre'
}

const Filter: FunctionComponent<FilterProps> = ({filtration}) => {
	const [isOpen, setIsOpen] = useState(false)
	const dispatch = useDispatch()
	const ref = useRef(null)

	return <div className={classNames(styles.filter)}></div>
}

export default Filter
