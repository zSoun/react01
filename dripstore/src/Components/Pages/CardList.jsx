import React from 'react'
import Card from './Card'

export default function CardList() {

    const products = [
        {   
            id: 1,
            title: "prod1",
            description: "aaa",
            price: 19.99,
        },
        {   
            id: 2,
            title: "prod2",
            description: "aaa",
            price: 19.99,
        },
        {   
            id: 3,
            title: "prod3",
            description: "aaa",
            price: 19.99,
        }
    ]
    
    return (
        <>
            {products.map(product => 
            <Card
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                
            />)}
        </>
    )
}
