import React from 'react'

function ProductItems() {
  return (
    <div>
        
       <div className="row collections">
          <div
            className="col-sm-6 col-md-3 item wow fadeIn"
            style={{ visibility: "visible", animationName: "fadeIn" }}
          >
            <div className="row m0 featured-img">
              <img src="items/collection-4.jpg" alt="" />
            </div>
            <h4 className="title">Watch Limited Edition</h4>
            <h5 className="category">Stainless steel case</h5>
            <h4 className="price">$399</h4>
            <a href="product-choose" className="btn">
              CHOOSE
            </a>
          </div>
          <div
            className="col-sm-6 col-md-3 item wow fadeIn"
            data-wow-delay="0.5s"
            style={{
              visibility: "visible",
              animationDelay: "0.5s",
              animationName: "fadeIn",
            }}
          >
            <div className="row m0 featured-img">
              <img src="items/collection-1.jpg" alt="" />
            </div>
            <h4 className="title">Watch Bracelet</h4>
            <h5 className="category">White strap &amp; Stainless steel</h5>
            <h4 className="price">$299</h4>
            <a href="product-choose" className="btn">
              CHOOSE
            </a>
          </div>
          <div
            className="col-sm-6 col-md-3 item wow fadeIn"
            data-wow-delay="1s"
            style={{
              visibility: "visible",
              animationDelay: "1s",
              animationName: "fadeIn",
            }}
          >
            <div className="row m0 featured-img">
              <img src="items/collection-2.jpg" alt="" />
            </div>
            <h4 className="title">Watch Original</h4>
            <h5 className="category">The FirstWatch ever released</h5>
            <h4 className="price">$249</h4>
            <a href="product-choose" className="btn">
              CHOOSE
            </a>
          </div>
          <div
            className="col-sm-6 col-md-3 item wow fadeIn"
            data-wow-delay="1.5s"
            style={{
              visibility: "visible",
              animationDelay: "1.5s",
              animationName: "fadeIn",
            }}
          >
            <div className="row m0 featured-img">
              <img src="items/collection-3.jpg" alt="" />
            </div>
            <h4 className="title">Watch Soprts Edition</h4>
            <h5 className="category">Water proof and Fitness tracking</h5>
            <h4 className="price">$399</h4>
            <a href="product-choose" className="btn">
              CHOOSE
            </a>
          </div>
        </div>
    </div>
  )
}

export default ProductItems
