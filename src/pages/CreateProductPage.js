import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

// Assets
import { baseUrl } from '../shared/baseUrl'

export default function CreateProductPage() {

  const navigate = useNavigate()

  const [product, setProduct] = useState({
    name: "",
    description: "",
  })

  const [image, setImage] = useState(null)

const handleSubmit = event => {
    event.preventDefault()
    // console.log(product)
    // alert(`Name: ${product.name}  \nDescription: ${product.description} \n \nImage: ${product.image} \nThank for using our web site`)

    const ProductFormData = new FormData()
    ProductFormData.append("image", image);
    ProductFormData.append("product", JSON.stringify(product));

    axios({
        method: "post",
        url: `${baseUrl}/product`,
        data:  ProductFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(res => {
          alert(res.data)
          navigate("/main/products")
      })
      .catch(err => {
          alert("Something Went Wrong ! Please Try Again")
      })
}


  return (
      <main className="container" style={{marginTop: 60, marginBottom: 60}}>
      <div className="py-5 text-center">
        <h2>Product Creation Form form</h2>
        <p className="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
      </div>

        <div className="">
          <h4 className="mb-3">Product Information</h4>
          <form className="needs-validation" onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-12">
                <label htmlFor="productName" className="form-label">Product name</label>
                <input type="text" className="form-control" id="productName" placeholder="Case 4378"
                  value={product.name}
                  required
                  onChange={(event) => setProduct({...product, name: event.target.value})}
                />
                <div className="invalid-feedback">
                  Valid product name is required.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="productDesc" className="form-label">Product Description</label>
                <textarea className="form-control" id="productDesc" placeholder="Case Black Black Water Proof"
                  value={product.description}
                  required
                  onChange={(event) => setProduct({...product, description: event.target.value})}
                />
                <div className="invalid-feedback">
                  Valid product name is required.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="productImage" className="form-label">Product Image <span className="text-muted">(Optional)</span></label>
                <input type="file" accept="image/*" required className="form-control" id="productImage"
                  onChange={(event) => setImage(event.target.files[0])}
                />
              </div>

            </div>


            <br className="my-4" />

            <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
          </form>
        </div>
    </main>
  )
}
