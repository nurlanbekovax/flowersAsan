import React from "react";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
    return (
    <div className="nome-container">
        <Navbar />
            <div className="home-text-section">
                <h1 className="primary-heading">
                    FlowerLand
                </h1>
                <h1 className="primary-text1">
                Lorem ipsum dolor sit amet consectetur.
                </h1>
                <h1 className="primary-text2">
                Lorem ipsum.
                </h1>
                <p className="primary-down-text">
                Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                elit.
                </p>
                <button className="secondary-button">
                    Buy Now <FiArrowRight />{" "}
                </button>
            </div>
    </div>
    );
};

export default Home;