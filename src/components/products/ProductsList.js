import React, {useState, useEffect} from 'react'
import axios from 'axios'

// Assets
import { baseUrl } from '../../shared/baseUrl'

// Assets
import ProductImage from '../../assets/img/image-cap.svg'

export default function ProductsList() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios
        .get(`${baseUrl}/products`)
        .then(res => setProducts(res.data))
    }, [])

    const productsList = products.map(product => (
        <div key={product._id} className="card" style={{width: "18rem"}}>
        <img src={product.image ? product.image : ProductImage} className="card-img-top" alt="Product Image" />
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <a href={product.link} className="btn btn-primary">Product Line</a>
        </div>
        </div>
    ))

  return (
    <section className='container d-flex gap-3 flex-wrap'>
        {productsList}
    </section>
  )
}
