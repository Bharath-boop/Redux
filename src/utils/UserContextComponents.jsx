import React, {Children, useState} from 'react'

export const UserContext = React.createContext()

function UserContextComponent({children}) {
    const [product, setProduct] = useState([
        {
          "id": 1,
          "title": "iPhone 9",
          "description": "An apple mobile which is nothing like apple",
          "price": 549,
          "discountPercentage": 12.96,
          "rating": 4.69,
          "stock": 94,
          "brand": "Apple",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrm2FAIEFLAI2tVlYvxNnkAj-c6hQsQdjT-hH-L7Gogapa1MxbCr2uIvpPKiFymXMieXE&usqp=CAU",
        },
        {
          "id": 2,
          "title": "iPhone X",
          "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
          "price": 899,
          "discountPercentage": 17.94,
          "rating": 4.44,
          "stock": 34,
          "brand": "Apple",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFccwP5StlJTQ7t2OJCK3B4_ZioByXiBJxIZkY1IBiGhmDElBDbcD1zgRUGvagiNHeVM&usqp=CAU"
      },
      {
          "id": 3,
          "title": "Samsung Universe 9",
          "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
          "price": 1249,
          "discountPercentage": 15.46,
          "rating": 4.09,
          "stock": 36,
          "brand": "Samsung",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3MY3jsxwiwP4L-npaPBT8HlzWJ6NgzrDLAiAlcyOxPnG-2OUYC2tyTkRYTwMUC4B2h0&usqp=CAU"
      },
      {
          "id": 4,
          "title": "OPPOF19",
          "description": "OPPO F19 is officially announced on April 2021.",
          "price": 280,
          "discountPercentage": 17.91,
          "rating": 4.3,
          "stock": 123,
          "brand": "OPPO",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJU6ai5dOZBKgD1nHglMhYRu3jHeqa_BFCe7xf15dNSMEU4Q_euiLyVzWPf6NXtBck_mg&usqp=CAU"
      },
      {
          "id": 5,
          "title": "Huawei P30",
          "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
          "price": 499,
          "discountPercentage": 10.58,
          "rating": 4.09,
          "stock": 32,
          "brand": "Huawei",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXGMJn6rXO4bDywG0wye2w4rp4vgY2R9xqfTFwjmE280lC7f4hgQsPJvKgEEWM4lkMXfU&usqp=CAU"
      }
      ])
    return <>
        <UserContext.Provider value={{product, setProduct}}>
            {children}
        </UserContext.Provider>
    </>
}

export default UserContextComponent