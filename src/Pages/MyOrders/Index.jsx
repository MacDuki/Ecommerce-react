import React from "react";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { shopContext } from "../../Context/Index";

function MyOrders() {
	const { showMaximized, showMaximizedProduct, productInfo, plusCartOne } =
		React.useContext(shopContext);

	return showMaximized ? (
		<>
			<aside className='maximized-product w-screen flex flex-col fixed right-0 border items-center border-black rounded-lg bg-white sm:w-1/3'>
				<AiOutlineClose
					onClick={showMaximizedProduct}
					className=' absolute right-2 top-2 cursor-pointer'
				/>
				<div className='w-60 h-60 mt-10'>
					<img className='w-60 h-60' src={productInfo.image}></img>
				</div>
				<div className='mt-10 px-8 absolute left-0 top-80'>
					<h2 className='font-medium '>{productInfo.title}</h2>
					<p className='font-bold mt-3'>{productInfo.price}$</p>
				</div>
				<div
					onClick={plusCartOne}
					className='mt-40 flex flex-row items-center border cursor-pointer border-black rounded-lg px-2 bg-stone-200'>
					<span className='mr-5'>AGREGAR</span>
					<AiOutlinePlus />
				</div>
			</aside>
		</>
	) : null;
}

export { MyOrders };
