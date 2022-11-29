import React from 'react';
import './Home.css';
import Product from './Product';


function Home() {
  return (
    <div>
        <div className="home">
            <div className="home__container">

                <img scr="https://www.cloudways.com/blog/wp-content/uploads/Ecommerce-Shopping-Infographics.png" alt="" className='home__image' />

                <div className="home__row">
                    <Product 
                     id = "1"
                     title = "Bon Organik Unisex T-Shirt Yellow from T-Shirts"
                     price = {11.96}
                     rating = {5}
                     image = "https://m.media-amazon.com/images/I/61gqx7hslmL._UX569_.jpg"
                    />
                    <Product 
                     id = "2"
                     title = "Colourblock Crew-Neck T-shirt Tshirts perfect"
                     price = {9.96}
                     rating = {4}
                     image = "https://assets.ajio.com/medias/sys_master/root/20220121/8pKF/61ea5b4baeb2695cdd24612b/-473Wx593H-461592493-multi-MODEL.jpg"

                    />
                </div>


                <div className="home__row">
                    <Product 
                    id = "3"
                    title = "Colourblock Crew-Neck T-shirt Tshirts perfect"
                    price = {8.96}
                    rating = {3}
                    image = "https://cdn.shopify.com/s/files/1/0984/4522/products/hoodiem-ne_5a393719-fc41-44c4-88da-d764ef44b539_large.jpg?v=1655542814"
                    />
                    <Product 
                    id = "4"
                    title = "Bon Organik Unisex T-Shirt Yellow from T-Shirts"
                    price = {11.96}
                    rating = {5}
                    image = "https://5.imimg.com/data5/YX/OO/TA/ANDROID-108727015/product-jpeg-500x500.jpg"
                    />
                    <Product 
                    id = "5"
                    title = "Bon Organik Unisex T-Shirt Yellow from T-Shirts"
                    price = {11.96}
                    rating = {5}
                    image = "https://images.bewakoof.com/t640/save-our-home-half-sleeve-t-shirt-276161-1655748650-1.jpg"
                    />
                </div>


                <div className="home__row">
                    <Product 
                    id = "6"
                    title = "Style your weekend party outlet with the cool Hoodie"
                    price = {18.96}
                    rating = {5}
                    image = "https://beyoung.in/blog/wp-content/uploads/2018/10/simple-hoddies-with-jeans-and-sneakers.jpg"
                    />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Home