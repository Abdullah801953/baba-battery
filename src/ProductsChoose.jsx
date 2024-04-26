import React from "react";

function ProductsChoose() {
  return (
    <div className="row product-box" id="product-choose">
      <button
        className="mfp-close custom_close"
        title="Close (Esc)"
        type="button"
      >
        ×
      </button>
      <div className="product-img-gallery">
        <div id="product-imgs" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#product-imgs" data-slide-to={0} className="" />
            <li
              data-target="#product-imgs"
              data-slide-to={1}
              className="active"
            />
            <li data-target="#product-imgs" data-slide-to={2} className="" />
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="item">
              <img src="items/the-watch-3.png" alt="watch-1" />
            </div>
            <div className="item active">
              <img src="items/the-watch-3.png" alt="watch-2" />
            </div>
            <div className="item">
              <img src="items/the-watch-3.png" alt="watch-3" />
            </div>
          </div>
        </div>
      </div>
      <div className="product-desc">
        <form
          action="php/pre-order.php"
          id="preorderform"
          className="choose-form row m0"
          method="get"
          data-redirect="none"
          noValidate="novalidate"
        >
          <div id="js-product-info" className="product-info" tabIndex={-1}>
            <h4 className="name">Smart Watch</h4>
            <h2 className="edition">Sports Edition</h2>
            <h5 className="model">MODEL AS1500</h5>
            <h2 className="price">
              <del>$349</del>$299{" "}
              <span className="label label-default">early bird offer</span>
            </h2>
            <div className="row m0 description">
              <p>
                8mm Silver Aluminum Case with Blue Sport Band. Its perfect fit
                for tracking fitness. 100% waterproof. Buy this limted edition
                sports edition.
              </p>
            </div>
            <div className="choose-options row m0" id="js-choose-color">
              <div className="option">
                <h4 className="form-label">Choose a color</h4>
                <div className="row m0 colors">
                  <input
                    type="radio"
                    name="color"
                    defaultValue="Blue"
                    id="color-1"
                    defaultChecked=""
                  />
                  <label htmlFor="color-1" />
                  <input
                    type="radio"
                    name="color"
                    defaultValue="Violet"
                    id="color-2"
                  />
                  <label htmlFor="color-2" />
                  <input
                    type="radio"
                    name="color"
                    defaultValue="Magenta"
                    id="color-3"
                  />
                  <label htmlFor="color-3" />
                  <input
                    type="radio"
                    name="color"
                    defaultValue="Yellow"
                    id="color-4"
                  />
                  <label htmlFor="color-4" />
                  <input
                    type="radio"
                    name="color"
                    defaultValue="Green"
                    id="color-5"
                  />
                  <label htmlFor="color-5" />
                </div>
              </div>
              <div className="option">
                <h4 className="form-label">Qty</h4>
                <div className="input-group bootstrap-touchspin">
                  <span
                    className="input-group-addon bootstrap-touchspin-prefix"
                    style={{ display: "none" }}
                  />
                  <input
                    type="text"
                    defaultValue={1}
                    name="Quantity"
                    className="quanity form-control"
                    style={{ display: "block" }}
                  />
                  <span
                    className="input-group-addon bootstrap-touchspin-postfix"
                    style={{ display: "none" }}
                  />
                  <span className="input-group-btn-vertical">
                    <button
                      className="btn btn-default bootstrap-touchspin-up"
                      type="button"
                    >
                      <i className="glyphicon glyphicon-plus" />
                    </button>
                    <button
                      className="btn btn-default bootstrap-touchspin-down"
                      type="button"
                    >
                      <i className="glyphicon glyphicon-minus" />
                    </button>
                  </span>
                </div>
              </div>
              <div className="option">
                <h4 className="form-label">Size</h4>
                <div className="btn-group bootstrap-select">
                  <button
                    type="button"
                    className="btn dropdown-toggle btn-default"
                    data-toggle="dropdown"
                    title="M"
                  >
                    <span className="filter-option pull-left">M</span>&nbsp;
                    <span className="bs-caret">
                      <span className="caret" />
                    </span>
                  </button>
                  <div className="dropdown-menu open">
                    <ul className="dropdown-menu inner" role="menu">
                      <li data-original-index={0} className="selected">
                        <a
                          tabIndex={0}
                          className=""
                          style={{}}
                          data-tokens="null"
                        >
                          <span className="text">M</span>
                          <span className="glyphicon glyphicon-ok check-mark" />
                        </a>
                      </li>
                      <li data-original-index={1}>
                        <a
                          tabIndex={0}
                          className=""
                          style={{}}
                          data-tokens="null"
                        >
                          <span className="text">L</span>
                          <span className="glyphicon glyphicon-ok check-mark" />
                        </a>
                      </li>
                      <li data-original-index={2}>
                        <a
                          tabIndex={0}
                          className=""
                          style={{}}
                          data-tokens="null"
                        >
                          <span className="text">XL</span>
                          <span className="glyphicon glyphicon-ok check-mark" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <select className="selectpicker" tabIndex={-98}>
                    <option value="m" selected="">
                      M
                    </option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="submit-area row m0">
              <a
                href="javascript:void(0);"
                className="btn btn-rounded btn-block"
                id="next-personal"
              >
                pre-order now
              </a>
            </div>
          </div>
          <div className="personal-info" id="js-personal-info" tabIndex={-1}>
            <div className="form-group text-center">
              <a
                href="javascript:void(0);"
                className="btn"
                id="prev-product-info"
              >
                Go Back
              </a>
            </div>
            <div className="row">
              <div className="form-group col-sm-6">
                <input
                  type="text"
                  name="First_Name"
                  className="form-control"
                  placeholder="First Name"
                  required=""
                  aria-required="true"
                />
              </div>
              <div className="form-group col-sm-6">
                <input
                  type="text"
                  name="Last_Name"
                  className="form-control"
                  placeholder="Last Name"
                  required=""
                  aria-required="true"
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="email"
                name="Email"
                className="form-control"
                placeholder="Email Address"
                required=""
                aria-required="true"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="Address_Line_1"
                className="form-control"
                placeholder="Address Line 1"
                required=""
                aria-required="true"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="Address_Line_2"
                className="form-control"
                placeholder="Address Line 2"
                required=""
                aria-required="true"
              />
            </div>
            <div className="row">
              <div className="form-group col-sm-6">
                <input
                  type="text"
                  name="State"
                  className="form-control"
                  placeholder="State"
                  required=""
                  aria-required="true"
                />
              </div>
              <div className="form-group col-sm-6">
                <input
                  type="text"
                  name="Zip_Code"
                  className="form-control"
                  placeholder="Zip Code"
                  required=""
                  aria-required="true"
                />
              </div>
            </div>
            <div className="form-group">
              <select
                className="form-control"
                name="Country"
                required=""
                aria-required="true"
              >
                <option selected="" value="">
                  Choose a country
                </option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="India">India</option>
              </select>
            </div>
            <div className="submit-area-2 row m0">
              <button
                type="submit"
                className="btn btn-rounded js-preorder-btn btn-block"
              >
                <span>Finish Purchase</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductsChoose;
