import React from 'react';
import PickMeals from "../../Assets/pick-meals-image.png";
import ChooseMeals from "../../Assets/choose-image.png";
import DeliveryMeals from "../../Assets/delivery-image.png";
import "./Work.css";

// Adding React.forwardRef to the component function
const Work = React.forwardRef((props, ref) => {
  const workInfoData = [
    {
      image: PickMeals, // Associating image with the data
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: ChooseMeals, // Associating image with the data
      title: "Choose How Often",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: DeliveryMeals, // Associating image with the data
      title: "Fast Deliveries",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];

  return (
    <div className="work-section-wrapper" ref={ref}> {/* Adding ref to the div */}
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data, index) => (
          <div className="work-section-info" key={index}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt={data.title} /> {/* Correct alt text */}
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Work;
