import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {cartReducer} from './features/cart'
import {logger} from './middleware/logger'
import {movieApi} from './services/movieApi'
import {filterReducer} from './features/filter'

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		filter: filterReducer,
		[movieApi.reducerPath]: movieApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([movieApi.middleware, logger]),
	devTools: true,
})
