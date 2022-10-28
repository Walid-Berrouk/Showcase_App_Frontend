import React from 'react'

// Assets
import ProductImage from '../../assets/img/image-cap.svg'

export default function ProductsList() {
  return (
    <section className='container d-flex gap-3 flex-wrap'>
        <div className="card" style={{width: "18rem"}}>
        <img src={ProductImage} className="card-img-top" alt="Product Image" />
        <div className="card-body">
            <h5 className="card-title">Product Name</h5>
            <p className="card-text">Product Description</p>
            <a href="#" className="btn btn-primary">Product Line</a>
        </div>
        </div>

        <div className="card" style={{width: "18rem"}}>
        <img src={ProductImage} className="card-img-top" alt="Product Image" />
        <div className="card-body">
            <h5 className="card-title">Product Name</h5>
            <p className="card-text">Product Description</p>
            <a href="#" className="btn btn-primary">Product Line</a>
        </div>
        </div>

        <div className="card" style={{width: "18rem"}}>
        <img src={ProductImage} className="card-img-top" alt="Product Image" />
        <div className="card-body">
            <h5 className="card-title">Product Name</h5>
            <p className="card-text">Product Description</p>
            <a href="#" className="btn btn-primary">Product Line</a>
        </div>
        </div>

        <div className="card" style={{width: "18rem"}}>
        <img src={ProductImage} className="card-img-top" alt="Product Image" />
        <div className="card-body">
            <h5 className="card-title">Product Name</h5>
            <p className="card-text">Product Description</p>
            <a href="#" className="btn btn-primary">Product Line</a>
        </div>
        </div>

        <div className="card" style={{width: "18rem"}}>
        <img src={ProductImage} className="card-img-top" alt="Product Image" />
        <div className="card-body">
            <h5 className="card-title">Product Name</h5>
            <p className="card-text">Product Description</p>
            <a href="#" className="btn btn-primary">Product Line</a>
        </div>
        </div>

        <div className="card" style={{width: "18rem"}}>
        <img src={ProductImage} className="card-img-top" alt="Product Image" />
        <div className="card-body">
            <h5 className="card-title">Product Name</h5>
            <p className="card-text">Product Description</p>
            <a href="#" className="btn btn-primary">Product Line</a>
        </div>
        </div>

        <div className="card" style={{width: "18rem"}}>
        <img src={ProductImage} className="card-img-top" alt="Product Image" />
        <div className="card-body">
            <h5 className="card-title">Product Name</h5>
            <p className="card-text">Product Description</p>
            <a href="#" className="btn btn-primary">Product Line</a>
        </div>
        </div>
    </section>
  )
}
