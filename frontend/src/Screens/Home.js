import React from "react";
import modules from "./styles/home.module.css";
import Himage from "../Assets/Himage.jpg";
import chef from "../Assets/chef.png";
import { sample_foods } from "../data.js";
import {} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <section className={modules.mainContainer}>
        <div className={modules.header}>
          <div className={modules.description}>
            <h1>We are always here to serve you</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
              pellentesque dignissim enim sit. Cursus eget nunc scelerisque
              viverra mauris in aliquam. Lacus sed turpis tincidunt id aliquet
              risus.
            </p>
            <div className={modules.buttonContainer}>
              <button className={modules.button}>Order</button>
              <button className={modules.button}>Dine in</button>
            </div>
          </div>
          <div className={modules.imageContainer}>
            <img className={modules.chefImage} src={chef} />
            <img className={modules.image} src={Himage} />
          </div>
        </div>
      </section>
      <section className={modules.mainContainer1}>
        <div style={{ textAlign: "center" }}>
          <h1>Our Popular Dishes</h1>
        </div>
        <div className={modules.cardContainer}>
          {sample_foods.map((item) => (
            <div className={modules.cardBox}>
              <div className={modules.imageBox}>
                <img
                  style={{
                    minWidth: "100px",
                    maxWidth: "600px",
                    width: "360px",
                    height: "300px",
                    objectFit: "cover",
                  }}
                  src={item.imageUrl}
                />
              </div>
              <div style={{ padding: "10px", textAlign: "center" }}>
                <h3
                  style={{
                    margin: "2.5px 0 3.5px 0",
                    fontSize: "1.5rem",
                    color: "#262507",
                    fontWeight: "600",
                  }}
                >
                  {item.name}
                </h3>
                <p>{item.price} $</p>
                <p>Cooking-time: {item.cookTime} mins</p>
                <p>
                  <FontAwesomeIcon icon={faStar} color="green" /> {item.stars}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ margin: "20px 0" }}>
          <h3>Check our Food Menu!!!</h3>
          <div className={modules.buttonContainer}>
            <button
              onClick={() => navigate("/menu")}
              className={modules.button}
            >
              Take me there..
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
