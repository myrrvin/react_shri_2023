import {createSlice} from '@reduxjs/toolkit'

interface CounterState {
	[P: string]: number
}

const initialState: CounterState = {}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		increment: (state, {payload}) => {
			const count = state[payload] || 0

			if (count === 30) {
				return
			}

			state[payload] = count + 1
		},
		decrement: (state, {payload}: {payload: string}) => {
			const count = state[payload]

			if (!count) {
				return
			}

			state[payload] = count - 1
		},
		reset: (state, {payload}: {payload: string}) => {
			delete state[payload]
		},
	},
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
