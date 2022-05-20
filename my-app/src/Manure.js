import React from "react";
import Product from "./Product";
import "./Manure.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
      <div className="whitespace">
      </div>
      <div>
        <h2 className="checkout__title">Manure</h2>
      </div>
        
        <div className="home__row">
          <Product
            id="49538094"
            title="JK PROM (Phosphate Rich Organic Manure) 50Kg"
            price={1200}
            rating={0}
            image="https://5.imimg.com/data5/PT/UN/WH/SELLER-46849280/jk-prom-phosphate-rich-organic-manure-500x500.jpg"
          />
           <Product
            id="12321341"
            title="Jai Kisan Compost Organic Manure 50Kg"
            price={900}
            rating={0}
            image="https://www.zuari.in/assets/images/organic.png"
          />
          <Product
            id="49538094"
            title="Kribhco Compost Organic Fertilizer 50Kg"
            price={850}
            rating={0}
            image="https://www.kribhco.net/assets/img/product/compost.jpg"
          />
          <Product
            id="49538094"
            title="Sikko PROM Dark Brown Black Prom Organic Fertilizers 50Kg"
            price={690}
            rating={0}
            image="https://5.imimg.com/data5/ME/GH/MY-998144/prom-500x500.jpg"
          />
          <Product
            id="49538094"
            title="Garden Care Organic Fertilizer 1Kg"
            price={120}
            rating={0}
            image="https://5.imimg.com/data5/TH/KT/DA/SELLER-56203123/garden-care-500x500.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="Asha Soil Guard Organic Manure 50Kg"
            price={1450}
            rating={0}
            image="https://tiimg.tistatic.com/fp/1/006/752/agriculture-vermicompost--359.jpg?tr=n-w410"
          />
          <Product
            id="49538094"
            title="Bhoomi Gold Organic Manure VermiCompost 50Kg"
            price={230}
            rating={0}
            image="https://m.media-amazon.com/images/I/81y7lbtLobL._SY606_.jpg"
          />
           <Product
            id="12321341"
            title="NFL Kisan Compost Organic Manure 50Kg"
            price={220}
            rating={0}
            image="https://5.imimg.com/data5/XY/RN/KK/SELLER-29599909/city-compost-500x500.png"
          />
          <Product
            id="49538094"
            title="IFFCO Gardens Nutri Rich Seaweed Fortified Vermicompost 2Kg"
            price={129}
            rating={0}
            image="https://www.bigbasket.com/media/uploads/p/l/40198953_1-iffco-urban-gardens-nutri-rich-seaweed-fortified-vermicompost.jpg"
          />
          <Product
            id="49538094"
            title="Hasiru Organic Premium Garden Manure 5Kg"
            price={395}
            rating={0}
            image="https://5.imimg.com/data5/YJ/MA/MY-1948286/premium-garden-manure-500x500.jpg"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;