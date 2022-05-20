import React from "react";
import Product from "./Product";
import "./Seeds.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
      <div className="whitespace">
      </div>
      <div>
        <h2 className="checkout__title">Seeds</h2>
      </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="Rasi Seeds RCH BG II 659 570g"
            price={767}
            rating={0}
            image="https://www.kisanestore.com/image/cache/data/Rasi%20Seeds/Rasi659%20(400)-500x554.JPG"
          />
          <Product
            id="49538094"
            title="Nuziveedu Seeds NCS 955 570g"
            price={767}
            rating={0}
            image="data:image/jpeg;base64,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"
          />
           <Product
            id="12321341"
            title="Prabhat Seeds Supercot PCH 115 570g"
            price={757}
            rating={0}
            image="https://static.agrostar.in/static/Prabhat_SuperCot_Cotton_Set_HI_5.jpg"
          />
          <Product
            id="49538094"
            title="Ajeet Seeds Ajeet 155 BG II 570g  "
            price={767}
            rating={0}
            image="http://cdn.shopify.com/s/files/1/0722/2059/products/AJEET-155-BG-II-COTTON_0e31cc0c-2f21-4219-9f1f-ec62e45e74d9_grande.jpg?v=1601729586"
          />
          <Product
            id="49538094"
            title="Kaveri Seeds Jadoo KCH 14K59 BG II570g"
            price={767}
            rating={0}
            image="https://static.agrostar.in/static/AGS-S-1802_1.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="Mahyco Cotton Seeds MRC 7375 Hybrid 850g"
            price={750}
            rating={0}
            image="https://mahyco.com/wp-content/uploads/2018/11/MRC-7375-300x300.jpg"
          />    
          <Product
            id="49538094"
            title="Green Gold Cotton Seeds Gold-Vardhan Hybrid"
            price={750}
            rating={0}
            image="https://5.imimg.com/data5/IA/BR/MY-48279344/cotton-seeds-500x500.jpg"
          />
           <Product
            id="12321341"
            title="Tulasi Seeds Lambuji BG II 570g"
            price={757}
            rating={0}
            image="https://5.imimg.com/data5/VT/II/MY-4605663/lambuji-bg-ii-28tulasi-45-bg-ii-29-cotton-seed-500x500.png"
          />
          <Product
            id="49538094"
            title="Indra Raji-221 Bollgard II 450Gm"
            price={767}
            rating={0}
            image="https://5.imimg.com/data5/MD/RB/MY-48279344/hybrid-cotton-seeds-500x500.jpg"
          />
          <Product
            id="49538094"
            title="Shriram Cotton Seeds RJ Super 6488 BG II"
            price={767}
            rating={0}
            image="https://static.agrostar.in/static/AGS-S-2218_1.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="Ellora China King Onion (500 Gms) Seeds"
            price={725}
            rating={0}
            image="https://static.agrostar.in/static/AGS-S-2861_1.jpg"
          />
          <Product
            id="49538094"
            title="Kalash Research Onion Prasiddhi - KSP 117 (500 Gms) Seeds"
            price={1500}
            rating={0}
            image="https://static.agrostar.in/static/AGS-S-2916_1.jpg"
          />
           <Product
            id="12321341"
            title="Panchganga Onion Poona Fursungi (500 Gm) Seeds"
            price={1500}
            rating={0}
            image="https://static.agrostar.in/static/AGS-S-2407_2N_1.jpg"
          />
          <Product
            id="49538094"
            title="Prashant Onion N241 (1kg) Seeds"
            price={7200}
            rating={0}
            image="https://static.agrostar.in/static/AGS-S-4041_1.jpg"
          />
          <Product
            id="49538094"
            title="Divya Poona Fursungi (Onion) 1Kg Seeds"
            price={3750}
            rating={0}
            image="https://static.agrostar.in/static/AGS-S-3153_1.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="Seminis Seeds Gulmohar Onion 500 gms"
            price={1450}
            rating={0}
            image="https://cdn.shopify.com/s/files/1/0722/2059/products/GULMOHAR-ONION_grande.jpg?v=1601732326"
          />
          <Product
            id="49538094"
            title="Shine Brand Seeds Onion Diamond Super 500 gms"
            price={1500}
            rating={0}
            image="https://shinebrandseeds.com/product/product_imgs/listing_img/1593489747.jpg"
          />
           <Product
            id="12321341"
            title="Prabhat Super Kesar Poona Fursungi Pure Onion Seed 1Kg"
            price={900}
            rating={0}
            image="https://4.imimg.com/data4/UI/QQ/MY-31966354/onion-seed-500x500.jpg"
          />
          <Product
            id="49538094"
            title="Neelam Onion Seeds Nashik-53 500gm"
            price={850}
            rating={0}
            image="https://farmkey.in/uploads/product/Neelam_N_53.jpg"
          />
          <Product
            id="49538094"
            title="Jindal Onion Seeds Nasik Red N-53 500gms"
            price={789}
            rating={0}
            image="https://www.badimandi.com/wp-content/uploads/2021/10/JINDAL-300x300.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="JK Seeds Hybrid Jowar JKSH 22 6Kg"
            price={1504}
            rating={0}
            image="https://agribegri.com/productimage/6c7232d05305d99ed6527904446a3d26-07-14-21-13-57-20.jpg"
          />
          <Product
            id="49538094"
            title="Kaveri Seeds Colonel-6363 Hybrid Jowar 6Kg"
            price={1500}
            rating={0}
            image="https://www.kaveriseeds.in/wp-content/uploads/2019/09/jowar-Colonol-6363.jpg"
          />
           <Product
            id="12321341"
            title="Nuziveedu Seeds Krishna NSH 54 Hybrid Jowar 6Kg"
            price={1500}
            rating={0}
            image="https://1.bp.blogspot.com/-ujCM3m8XFkI/WGo0lfIireI/AAAAAAAAAEU/_RfiEf3pDDggbE1xx3vubPwatsHmXGC_gCEw/s1600/nsh-54%2Bkrishna.jpg"
          />
          <Product
            id="49538094"
            title="Hari Ganga Seeds GANGA 555 5Kg"
            price={240}
            rating={0}
            image="https://cpimg.tistatic.com/05451673/b/4/Ganga-555-Multicut-Jowar-Seeds.jpg?tr=n-w410"
          />
          <Product
            id="49538094"
            title="Rajni Seeds Hybrid Jowar RSHJ-295 6kg"
            price={840}
            rating={0}
            image="https://5.imimg.com/data5/CS/TC/MY-49534651/hybrid-jowar-seeds-500x500.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="Crystal Crop Seeds Hybrid Jowar RASBHARI SAFED 5Kg"
            price={1504}
            rating={0}
            image="https://5.imimg.com/data5/VV/YB/MY-1965053/crystal-rasbhari-safed-5-kg-ssg-seeds-500x500.jpg"
          />
          <Product
            id="49538094"
            title="Aadhaar Seeds AISWARYA ASH-6236 Hybrid Jowar 6Kg"
            price={1500}
            rating={0}
            image="https://5.imimg.com/data5/SELLER/Default/2020/9/PV/HM/EI/107504231/jowar-seeds-packaging-pouch-500x500.jpg"
          />
           <Product
            id="12321341"
            title="Indian Agri Farm CoFS31 Jowar Seeds (Multicut) 10 Kg"
            price={4999}
            rating={0}
            image="https://indianagrifarm.com/sw/wp-content/uploads/2020/06/cofs31_front-removebg-preview.png"
          />
          <Product
            id="49538094"
            title="HyTech 3206 Hybrid Jowar Seeds 5Kg"
            price={1440}
            rating={0}
            image="http://www.hytechseed.in/images/grain-sorghum/bag-3206.png"
          />
          <Product
            id="49538094"
            title="Arya Farm White Jowar Seeds 500g Pack of 2"
            price={250}
            rating={0}
            image="https://m.media-amazon.com/images/I/81-ToInXX3L._SX466_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="Pioneer 86M11 Hybrid Bajra Seeds 1.5Kg"
            price={570}
            rating={0}
            image="https://static.agrostar.in/static/AGS-S-145_1.jpg"
          />
          <Product
            id="49538094"
            title="Nirmal Hybrid Bajra NPH 4915 Yashwant 1.5Kg"
            price={370}
            rating={0}
            image="https://5.imimg.com/data5/SELLER/Default/2021/7/MU/FT/TB/81401545/nirmal-hybrid-bajra-seed-500x500.jpg"
          />
           <Product
            id="12321341"
            title="Mahyco Mrb 204 Research Hybrid Bajara Seed 1.5 Kg"
            price={432}
            rating={0}
            image="https://5.imimg.com/data5/RX/DJ/KH/SELLER-7327209/bajra-hybrid-calibre-mrb-204-500x500.png"
          />
          <Product
            id="49538094"
            title="Nuziveedu Seeds Balwan NBH 4903 Hybrid Bajara 5Kg"
            price={1440}
            rating={0}
            image="https://4.bp.blogspot.com/-IyCadB5Uv-A/WGo0N3q-x1I/AAAAAAAAAEQ/es293f88agsROUU3b6t8BvlxY-5BZY5IgCEw/s1600/nbh-4903%2Bbalwan.jpg"
          />
          <Product
            id="49538094"
            title="Nath Seeds SUPER 27 NBBH-27 Hybrid Bajara 5Kg"
            price={1250}
            rating={0}
            image="https://nathbiogenes.com/wp-content/uploads/2021/01/Baj-3-424x540.png"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="Ankur Seeds Hybrid Bajra ANKUR 045 3Kg"
            price={300}
            rating={0}
            image="https://ankurseeds.com/storage/upload/products_thumb_images/hy-bajra-045.jpg"
          />
          <Product
            id="49538094"
            title="Aadhaar Seeds AISWARYA ASH-6236 Hybrid Jowar 6Kg"
            price={1500}
            rating={0}
            image="https://5.imimg.com/data5/SELLER/Default/2020/9/PV/HM/EI/107504231/jowar-seeds-packaging-pouch-500x500.jpg"
          />
           <Product
            id="12321341"
            title="Samriddhi by Mahindra MB 1010 Hybrid Bajra Seeds 10 Kg"
            price={4999}
            rating={0}
            image="https://5.imimg.com/data5/HS/OZ/LL/SELLER-7390552/samriddhi-mb-1010-hybrid-bajra-seeds-500x500.png"
          />
          <Product
            id="49538094"
            title="Prathna Hybrid Bajra 4408 1.5Kg"
            price={440}
            rating={0}
            image="https://5.imimg.com/data5/RV/QY/MY-6709866/img-20171125-wa0025-250x250.jpg"
          />
          <Product
            id="49538094"
            title="Savrana Shakti Bajra Seeds SAVRANA 999 500gms"
            price={500}
            rating={0}
            image="https://5.imimg.com/data5/ANDROID/Default/2020/10/UL/LK/BS/96012962/img-20200714-wa0003-jpg-500x500.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="Pioneer P3355 Hybrid Corn Seeds 4 kg"
            price={2150}
            rating={0}
            image="https://cdn.shopify.com/s/files/1/0722/2059/products/P3355-CORN_grande.jpg?v=1601728727"
          />
          <Product
            id="49538094"
            title="Syngenta Seeds NK 7328 Hybrid Corn 500gms"
            price={1865}
            rating={0}
            image="https://www.syngenta.co.in/sites/g/files/zhg496/f/media/2021/10/07/nk_7328_new.png"
          />
           <Product
            id="12321341"
            title="Advanta Seeds PAC751 ELITE Hybrid Corn 4Kg"
            price={1550}
            rating={0}
            image="https://cdn.shopify.com/s/files/1/0722/2059/products/Advanta-Hybrid-Corn-PAC-751_grande.jpg?v=1601728802"
          />
          <Product
            id="49538094"
            title="Mahyco Hybrid Maize Seeds MRM 3845 S"
            price={728}
            rating={0}
            image="https://isteam.wsimg.com/ip/a45c2ead-6ee2-4d45-b5c7-a389081aae62/ols/2328_original/:/rs=w:600,h:600"
          />
          <Product
            id="49538094"
            title="KALASH Hybrid Maize Seeds 500gms"
            price={310}
            rating={0}
            image="https://agripari.com/wp-content/uploads/2021/06/HYBRID-MAIZE-KALASH.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="JK Seeds JKMH 8110 Hybrid Maize Seed 4kg"
            price={1580}
            rating={0}
            image="https://agribegri.com/productimage/32fe33ad2a4248b5445a73c84286fea9-12-24-20-08-37-03.jpg"
          />
          <Product
            id="49538094"
            title="Nuziveedu Seeds Dragon NMH 1247 Hybrid Maize 4Kg"
            price={560}
            rating={0}
            image="https://img2.exportersindia.com/product_images/bc-full/dir_78/2326714/hybrid-corn-seeds-dragon-nmh-1247-715373.jpg"
          />
           <Product
            id="12321341"
            title="HYTECH Seeds  5203 Hybrid Corn Seeds 4Kg"
            price={1200}
            rating={0}
            image="http://www.hytechseed.in/images/corn/bag-5203.png"
          />
          <Product
            id="49538094"
            title="SHINE HYBRID MAIZE SEEDS RISE-303 4Kg"
            price={1572}
            rating={0}
            image="https://cdn.shopify.com/s/files/1/0722/2059/products/imgpsh_fullsize_anim_26_1_grande.png?v=1605789589"
          />
          <Product
            id="49538094"
            title="VNR Maize 4343 4Kg"
            price={1200}
            rating={0}
            image="https://www.vnrseeds.com/wp-content/uploads/2020/09/4343.png"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;