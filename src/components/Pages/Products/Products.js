import React from 'react';
import Product from '../../Utilities/Product/Product';
import Breadcrumb from "../../Utilities/Breadcrumb/Breadcrumb";


const Products = () => {
    return (

        <React.Fragment>
            
            {/* Breadcrumb component */}
            <Breadcrumb pageTitle={'Products'} currentPage={'Products'} />
            {/* Product component */}
            <Product/>
           
        </React.Fragment>

    );
}

export default Products;