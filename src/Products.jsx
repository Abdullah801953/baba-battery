import React from "react";
import ProductItems from "./ProductItems";
function Products() {
  return (
    <section className="row our-collection pt-10">
      <div className="container">
        <div
          className="row section-header wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <div className="col-md-12">
            <h2 className="content-n">Our Collection</h2>
            <p>
              You are unique. You have unique style and you need a unique watch
              for you. Choose from our collection of watches.
            </p>
          </div>
          <div className="col-md-12">
            <div className="bar"></div>
          </div>
        </div>
        <ProductItems />
        <ProductItems />
        <ProductItems />
        <ProductItems />
      </div>
    </section>
  );
}

export default Products;
