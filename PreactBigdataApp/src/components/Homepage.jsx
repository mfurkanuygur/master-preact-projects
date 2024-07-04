import { useEffect, useState } from 'preact/hooks';
import { getAllProducts } from "../request/request"
import Loading from "./Loading"
import RenderProduct from "./RenderProduct"

const Homepage = () => {
    const [products, setProducts] = useState()
    const [count, setCount] = useState(10)

    useEffect(() => {
        getAllProducts().then(data => {
            setProducts(data)
        })
    }, [])


    const handleClick = () => {
        setCount(count + 10)
    }

    return (
        <div className="homepage">
            {/* <h1>All Products: {products?.length}</h1> */}
            {
                products &&
                <div className="container">
                    {products?.slice(0, count).map(product => (
                        <RenderProduct key={product.id} product={product} />
                    ))}
                </div>
                || <Loading />
            }
            {
                products &&
                <div className="see-more-container"><button className="see-more-button" onClick={() => handleClick()}>see more</button></div>
            }
        </div>
    )
}

export default Homepage