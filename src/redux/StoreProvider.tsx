'use client'

import {Provider} from 'react-redux'
import {store} from '@/redux/store'
import {FunctionComponent} from 'react'

interface StoreProviderProps {
	children: JSX.Element | JSX.Element[]
}

export const StoreProvider: FunctionComponent<StoreProviderProps> = ({
	children,
}) => {
	return <Provider store={store}>{children}</Provider>
}
