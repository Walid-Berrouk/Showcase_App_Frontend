import React, { useState } from 'react'

export default function CreateProductPage() {


  const [product, setProduct] = useState({
    name: "",
    description: "",
    link: "",
    image: "",
})

const handleSubmit = event => {
    event.preventDefault()
    console.log(product)
    alert(`Name: ${product.name}  \nDescription: ${product.description} \nLink: ${product.description} \nImage: ${product.image} \nThank for using our web site`)
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
                <input type="text" className="form-control" id="productName" placeholder="Case 4378" required=""
                  value={product.name}
                  onChange={(event) => setProduct({...product, name: event.target.value})}
                />
                <div className="invalid-feedback">
                  Valid product name is required.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="productDesc" className="form-label">Product Description</label>
                <textarea className="form-control" id="productDesc" placeholder="Case Black Black Water Proof" required=""
                  value={product.description}
                  onChange={(event) => setProduct({...product, description: event.target.value})}
                />
                <div className="invalid-feedback">
                  Valid product name is required.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="link" className="form-label">Product Link</label>
                <input type="text" className="form-control" id="link" placeholder="http://productlink.com" required=""
                  value={product.link}
                  onChange={(event) => setProduct({...product, link: event.target.value})}
                />
                <div className="invalid-feedback">
                  Please enter the product Link.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="productImage" className="form-label">Product Image <span className="text-muted">(Optional)</span></label>
                <input type="file" className="form-control" id="productImage"
                  value={product.image}
                  onChange={(event) => setProduct({...product, image: event.target.value})}
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
