export const logger = (store: any) => (next: any) => (action: any) => {
	console.log(action)

	next(action)
}
