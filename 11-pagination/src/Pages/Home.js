import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard';

const LIMIT = 10; // Limit Fixed

const Home = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [products, setProducts] = useState([])
    const [noOfPages, setNoOfPages] = useState(0)

    // Methods
    const fetchProducts = async () => {
        const SKIP = currentPage * LIMIT
        const url = `https://dummyjson.com/products?limit=${LIMIT}&skip=${SKIP}&select=title,description,price,discountPercentage,thumbnail`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data.products)
        setProducts(data.products)
        setNoOfPages(parseInt(data.total / LIMIT))
    }

    useEffect(() => {
        fetchProducts()
    },
        [currentPage])

    // Methods
    const handlePrevButton = () => {
        setCurrentPage((currentPage) => currentPage - 1)
    }

    const handleNextButton = () => {
        setCurrentPage((currentPage) => currentPage + 1)
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='flex gap-4 flex-wrap'>
                {products.map((product) => <ProductCard key={product.id} {...product} />)}
            </div>

            <div className='flex gap-4 p-4 m-4 shadow-md items-center'>
                {currentPage > 0 && <span className="cursor-pointer" onClick={handlePrevButton}>Prev</span>}

                {[...Array(noOfPages).keys()].map((pageNum, index) => 
                <span key={index} className={'m-2 text-lg border-green-600 border-2 p-2 cursor-pointer rounded-md ' + (pageNum === currentPage && 'bg-orange-400')} onClick={() => setCurrentPage(pageNum)}>
                    {pageNum + 1}
                </span>)}

                {currentPage < noOfPages - 1 && <span className="cursor-pointer" onClick={handleNextButton}>Next</span>}

            </div>

        </div >
    )
}s

export default Home