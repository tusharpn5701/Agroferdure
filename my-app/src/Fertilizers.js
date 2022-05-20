import React from "react";
import Product from "./Product";
import "./Fertilizers.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
      <div className="whitespace">
      </div>
      <div>
        <h2 className="checkout__title">Fertilizers</h2>
      </div>
        

        <div className="home__row">
          <Product
            id="12321341"
            title="Super Potash, Jaipur Bio Fertilizers 50Kg"
            price={1040}
            rating={0}
            image="https://5.imimg.com/data5/IB/CO/FV/SELLER-25464873/super-potash-500x500.jpg"
          />    
          <Product
            id="49538094"
            title="Samruddhi Force NPK 18:18:10   50Kg"
            price={890}
            rating={0}
            image="https://4.imimg.com/data4/AS/OY/MY-8206809/bio-fertilizer-500x500.jpg"
          />
           <Product
            id="12321341"
            title="Mahadhan 12:61:0 25Kg"
            price={2000}
            rating={0}
            image="https://mahadhan.co.in/wp-content/uploads/2017/05/Mahadhan-126100.jpg"
          />
          <Product
            id="49538094"
            title="Mahadhan Single Super Phosphate (Powdered) 50Kg"
            price={325}
            rating={0}
            image="https://5.imimg.com/data5/YK/GG/TW/SELLER-2462309/mahadhan-single-super-phosphate-fertilizer-500x500.PNG"
          />
          <Product
            id="49538094"
            title="Mahadhan 13:40:13 25Kg"
            price={1800}
            rating={0}
            image="https://5.imimg.com/data5/ZW/QT/QO/SELLER-2462309/mahadhan-13-40-13-water-soluble-fertiliser-500x500.PNG"
          />
        </div>

         <div className="home__row">
          <Product
            id="12321341"
            title="Kisan Urea Fertilizer, National Fertilizers Limited 45Kg"
            price={266.50}
            rating={0}
            image="https://5.imimg.com/data5/PT/AT/KX/SELLER-4173613/neem-coated-urea-500x500.png"
          />    
          <Product
            id="49538094"
            title="Ujwala Urea 46%N, Rashtriya Chemical Fertilizer Limited 45Kg"
            price={266.50}
            rating={0}
            image="https://3.imimg.com/data3/YV/WT/MY-8405013/ujwala-urea-46-250x250.png"
          />
           <Product
            id="12321341"
            title="NPK 19:19:19 Complex Fertilizer, Ujjawal BioTech & Organics 1Kg"
            price={80}
            rating={0}
            image="https://ujjawalbiotechorganics.in/wp-content/uploads/2020/09/Ujjawal-19-1.jpg"
          />
          <Product
            id="49538094"
            title="NPK 12:32:16 Fertilizer, IFFCO 50kg"
            price={1475}
            rating={0}
            image="https://5.imimg.com/data5/FL/JO/GLADMIN-12038643/npk-250x250.jpg"
          />
          <Product
            id="49538094"
            title="Mahadhan 0:0:50 25Kg"
            price={1500}
            rating={0}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyPOcC6eWYciiFr4-L_EwbuAFDf41bZchMD98_kZVT2Tgv5wJvC4QuyxiIFVJx363qbmI&usqp=CAU"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;