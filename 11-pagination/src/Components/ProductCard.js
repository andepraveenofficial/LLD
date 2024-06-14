import React from 'react'

const ProductCard = ({ description, discountPercentage, price, thumbnail, title, id }) => {

    return (
        <div className='shadow-md p-4 m-4 w-[400px] rounded-md border-lime-700 border-2'>
            <h1>{id}</h1>
            <img src={thumbnail} alt={title} />
            <h1 className="font-bold p-2">{title}</h1>
            <h2>Rs. {price} - discount of {discountPercentage}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ProductCard