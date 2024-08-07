import React, { useContext } from 'react'

import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrum from '../Components/BreadCrums/BreadCrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

function Product() {
  const {all_product}=useContext(ShopContext);
  let {productId} = useParams();
  let product = all_product.find((e) => e.id === Number(productId));
  console.log(product.category)
  return (
    <div>
      
      <BreadCrum product={product}/>
      <ProductDisplay product={product}></ProductDisplay>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
