export const selectCartModule = (state: any) => state.cart

export const selectProductAmount = (state: any, id: any) =>
	selectCartModule(state)[id] || 0
