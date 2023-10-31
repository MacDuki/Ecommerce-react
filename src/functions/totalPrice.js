export const totalPrice = (products) => {
	let sum = 0;
	products?.forEach((product) => {
		sum += product.price;
	});
	let decimalesLimitados = sum.toFixed(2);
	return decimalesLimitados;
};
