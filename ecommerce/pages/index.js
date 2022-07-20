import React from 'react'
import { Product,FooterBanner,HeroBanner } from '../components'
import { client } from '../lib/Client'
const Home = ({products,bannerData}) => 
   (
    <>
     <HeroBanner heroBanner = {bannerData.length && bannerData[0]}/>
     {console.log(bannerData)}
     <div className='products-heading'>
      <h2>Best selling Product</h2>
      <p>Speakers of many variants</p>

     </div>
     <div className='products-container'>
      {products?.map((product) => <Product key= {product.id} product={product}/>)}
     </div>
     <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  )

export const getServerSideProps = async() =>{
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuerry = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuerry);

  return{
    props:{products,bannerData}
  }
}
export default Home
