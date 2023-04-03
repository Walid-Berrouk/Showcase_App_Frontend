import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// Assets
import { baseUrl } from '../../shared/baseUrl'

// Assets
import ProductImage from '../../assets/img/image-cap.svg'

export default function ProductsList() {

    const navigate = useNavigate()
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios({
            method: "get",
            url : `${baseUrl}/products`,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("JWT")
            }

        })
        .then(res => setProducts(res.data))
        .catch(err => navigate("/signInPortal"))
    }, [])

    const productsList = products.map(product => (
        <div key={product._id} className="card" style={{width: "18rem"}}>
        <img src={product.link ? baseUrl + product.link : ProductImage} className="card-img-top" alt="Product Image" />
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
