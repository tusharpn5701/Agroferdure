import React from "react";
import Product from "./Product";
import "./Pesticides.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
      <div className="whitespace">
      </div>
      <div>
        <h2 className="checkout__title">Pesticides</h2>
      </div>
        
        <div className="home__row">
          <Product
            id="12321341"
            title="Green Beauveria Liquid Bio Pesticide - Bio Insecticide - Beauveria bassiana 1 Litre"
            price={550}
            rating={0}
            image="https://m.media-amazon.com/images/I/51ROGgg5wrL._SL1200_.jpg"
          />
          <Product
            id="49538094"
            title="Amistar Top Fungicide Syngenta 100ml"
            price={1500}
            rating={0}
            image="https://m.media-amazon.com/images/I/313KKYaWblL._SY445_.jpg"
          />
           <Product
            id="12321341"
            title="Alika Inescticide Syngenta 40ml"
            price={117}
            rating={0}
            image="https://m.media-amazon.com/images/I/51v60vt-djS._AC_SS450_.jpg"
          />
          <Product
            id="49538094"
            title="Plethora Insecticide Adama 1 Litre"
            price={2450}
            rating={0}
            image="https://cdn.shopify.com/s/files/1/0722/2059/products/PLETHORA-INSECTICIDE_grande.jpg?v=1601733806"
          />
          <Product
            id="49538094"
            title="Curacron Insecticide Syngenta 1 Litre"
            price={3750}
            rating={0}
            image="https://agrosiaa.com/uploads/userdata/seller/b1d5781111d84f7b3fe45a0852e59758cd7a87e5/product_images/7304335218f63677670e3363b0cbb18ca81a324b16c76a3f42.png"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="Admire Insecticide Bayer 30 Gms"
            price={297}
            rating={0}
            image="https://cdn.shopify.com/s/files/1/0722/2059/products/ADMIRE-INSECTICIDE_grande.jpg?v=1601729523"
          />
          <Product
            id="49538094"
            title="Tervigo Syngenta 1 Litre"
            price={500}
            rating={0}
            image="https://www.nexles.com/media/catalog/product/cache/14/thumbnail/500x/8083c875e83be300356bb052a4e4af68/t/e/tervigo_1l.jpg"
          />
           <Product
            id="12321341"
            title="Ekalux Insecticide Syngenta 250ml"
            price={195}
            rating={0}
            image="https://5.imimg.com/data5/UQ/UT/ZE/SELLER-55227159/syngenta-insecticide-500x500.jpg"
          />
          <Product
            id="49538094"
            title="Ampligo Inescticide Syngenta 80 ml"
            price={120}
            rating={0}
            image="https://m.media-amazon.com/images/I/31U7ck4-CcL.jpg"
          />
          <Product
            id="49538094"
            title="Katra Fertilizers Miticide 250 ml"
            price={750}
            rating={0}
            image="https://m.media-amazon.com/images/I/71wdKs7b1DL._SX466_.jpg"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;