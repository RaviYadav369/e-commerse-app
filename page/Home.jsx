import React,{useState} from 'react'

const Home = async () => {

    const [products, setproducts] = useState([])
    
    const response = await fetch('https://fakestoreapi.com/products')
    const result =await response.json()
    console.log(result);
    return (
        <div>
            <pre>{JSON.stringify(products, null, 2)}</pre>
        </div>
    )
}

export default Home