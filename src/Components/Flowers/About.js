import React from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import "./About.css";

const About = React.forwardRef((props, ref) => {
  return (
    <div className="about-section-container" ref={ref}>
      <div className="about-section-text-container">
        <p className="primary-subheading">Flowers</p>

        <div className="box"> 
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0507/3754/5401/files/R5522D_LOL_preset_proflowers-mx-tile-wide-sv-new.jpg?v=1696967926&width=768" alt="Birthday Bash Bouquet" /> 
            <div className="box_title">Birthday Bash Bouquet</div> 
            <div className="box_description">$60 - 80$</div>
          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/V5449D_LOL_preset_proflowers-mx-tile-wide-sv-new.jpeg?v=1637201054&width=768" alt="Light of My Life Bouquet" /> 
            <div className="box_title">Light of My Life Bouquet</div> 
            <div className="box_description">$55 - $85</div>
          </div> 
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0507/3754/5401/files/R5544D_LOL_preset_proflowers-mx-tile-wide-sv-new.jpg?v=1705430064&width=768" alt="Sweet As Can Be Bouquet" /> 
            <div className="box_title">Sweet As Can Be Bouquet</div> 
            <div className="box_description">$55 - $75</div>
          </div> 
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0507/3754/5401/files/R5520D_LOL_preset_proflowers-mx-tile-wide-sv-new.jpg?v=1696963744&width=768" alt="Pinkies Up Bouquet" /> 
            <div className="box_title">Pinkies Up Bouquet</div> 
            <div className="box_description">$60 - $80</div>
          </div>
        </div> 

        <div className="box"> 
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0507/3754/5401/files/R5553D_LOL_preset_proflowers-mx-tile-wide-sv-new.jpg?v=1703833488&width=768" alt="You're a Gem Bouquet" /> 
            <div className="box_title">You're a Gem Bouquet</div> 
            <div className="box_description">$50 - $70</div>
          </div> 
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0507/3754/5401/files/R5549D_LOL_preset_proflowers-mx-tile-wide-sv-new.jpg?v=1703830370&width=768" alt="The Dreamscape Bouquet" /> 
            <div className="box_title">The Dreamscape Bouquet</div> 
            <div className="box_description">$55 - $75</div>
          </div> 
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0507/3754/5401/files/NFGD_LOL_preset_proflowers-mx-tile-wide-sv-new.jpg?v=1688651121&width=768" alt="Clear Skies Bouquet" /> 
            <div className="box_title">Clear Skies Bouquet</div> 
            <div className="box_description">$70 - $135</div>
          </div> 
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0507/3754/5401/files/B35D_LOL_preset_proflowers-mx-tile-wide-sv-new.jpg?v=1705939468&width=768" alt="Sweet & Pretty Bouquet" /> 
            <div className="box_title">Sweet & Pretty Bouquet</div> 
            <div className="box_description">$53 - $83</div>
          </div> 
        </div> 

        <div className="green">
          <h1>with sympathy</h1>
          <h4>Send comfort with a thoughtful arrangement.</h4>
          <button>SHOP SYMPATHY</button>
        </div>

        <section className="sec3">
          <div className="information_container"> 
            <div className="info1"> 
              <img src="https://cdn.shopify.com/s/files/1/0507/3754/5401/files/C5375D_LOL_preset_proflowers-mx-tile-wide-sv-new.jpg?v=1706291426&width=768" alt="Our Beginnings" /> 
              <div> 
                <h2>Our Beginnings</h2> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              </div> 
            </div> 
            <div className="info2"> 
              <img src="https://cdn.shopify.com/s/files/1/0507/3754/5401/files/YPBD_LOL_preset_proflowers-mx-tile-wide-sv-new.jpg?v=1706296518&width=768" alt="Our Philosophy" /> 
              <div> 
                <h2>Our Philosophy</h2> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              </div> 
            </div> 
          </div> 
        </section>

        <div className="green">
          <h1>Bloom & Wild x Liberty</h1>
          <h4>We designed these bloom lorem ipsum dolor sit amet consectetur adipisicing elit...</h4>
          <button>Find out more</button>
        </div>
      </div>
    </div>
  );
});

export default About;
