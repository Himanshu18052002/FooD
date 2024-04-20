import React from "react";
import { sample_foods } from "../data";
import modules from "./styles/menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Menu() {
  return (
    <>
      <section className={modules.search}>
        <div className={modules.searchContainer}>
          <label>Not found what you are looking for...?</label>
          <input type="text" placeholder="Search more in the Menu..." />
          <button>Search</button>
        </div>
      </section>
      <section className={modules.menu}>
        <h1>Our Menu</h1>
        <div className={modules.menuItemsContainer}>
          <div className={modules.menuItems}>
            {sample_foods.map((item) => (
              <div className={modules.menuContainer}>
                <div className={modules.imageContainer}>
                  <img src={item.imageUrl} />
                </div>
                <h2 style={{ fontSize: "1.5rem" }}>{item.name}</h2>
                <p>{item.description}</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <p>{item.cookTime} mins</p>
                  <p>
                    <FontAwesomeIcon icon={faStar} color="green" /> {item.stars}
                  </p>
                </div>
                <p
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "500",
                    color: "green",
                  }}
                >
                  {item.price} $
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
