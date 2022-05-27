import React from 'react'
import Singleproduct from './Singleproduct'

function Product() {
  return (
    <div className='Allproduct'>
        <Singleproduct
            title="Samsung Galaxy M12 (White,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate"
            price="11,499 "
            image="./Images/mobile1.webp"    />

            <Singleproduct
            title="iQOO 9 Pro 5G (Dark Cruise, 8GB RAM, 256GB Storage) | Snapdragon 8 Gen 1 Mobile Processor | 120W FlashCharge | iQOO Premium Services"
            price="64,999"
            image="./Images/mobile2.webp"    />

            <Singleproduct
            title="Redmi 9A(Midnight Black 3GB RAM 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery"
            price="7,999 "
            image="./Images/mobile3.webp"    />

            <Singleproduct
            title="OPPO A31 (Mystery Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price="12,989"
            image="./Images/mobile4.webp"    />

            <Singleproduct
            title="Redmi 10 (Prime Phantom Black 6GB RAM 128GB ROM |Helio G88 with extendable RAM Upto 2GB |FHD+ 90Hz Adaptive Sync Display)"
            price="14,999 "
            image="./Images/mobile5.webp"    />

            <Singleproduct
            title="Realme narzo 50A (Oxygen Blue , 4GB RAM + 128 GB Storage) Helio G85 Processor | 50MP AI Triple Camera | 6000 mAh Battery"
            price="12,499 "
            image="./Images/mobile6.webp"    />
           
            
    </div>
  )
}
export default  Product
