import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	input: '',
	cinema: '',
	genre: '',
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setInputFilter: (state, {payload}) => {
			state.input = payload
		},
		setCinemaFilter: (state, {payload}: {payload: string}) => {
			state.cinema = payload
		},
		setGenreFilter: (state, {payload}: {payload: string}) => {
			state.genre = payload
		},
	},
})

export const filterReducer = filterSlice.reducer
export const filterActions = filterSlice.actions
