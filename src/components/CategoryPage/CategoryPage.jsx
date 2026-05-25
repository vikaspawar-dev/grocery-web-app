import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'

const CategoryPage = ({ title,bgImage,categories=[] }) => {
    

    let filteredItem = categories.includes('All')? ProductList
    :ProductList.filter(item=> categories.includes(item.category))


    const renderProduct = filteredItem.map((product) => {
        return (
            <Cards
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                category={product.category}
            />
        );
    });

    return (
        <div>
            <Banner title={title} bgImage={bgImage} />

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 py-20 max-w-screen-2xl mx-auto px-10'>
                {renderProduct}
            </div>
        </div>
    )
};

export default CategoryPage;