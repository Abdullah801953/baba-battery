import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ProductTitle from './ProductTitle'
import './ProductStyle.css'
import ProductCrousel from './ProductCrousel'
import OwlControle from './OwlControle'
import CrouselItems from './CrouselItems'
import SlickCrousel from './SlickCrousel'
import OurProjects from './OurProjects'
import Client from './Client'
function ProductsSection() {
    return (
        <div className="product-area-3 product-4 area-padding">
            <ProductTitle />
            {/* <ProductCrousel/> */}
            {/* <CrouselItems/> */}
            {/* <SlickCrousel/> */}
            {/* <OurProjects/> */}
            <SlickCrousel/>
            <OwlControle/>
            <OwlControle/>
        </div>
    )
}

export default ProductsSection