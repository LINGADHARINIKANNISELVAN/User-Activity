import React from "react";
import images from "./images";
import ImageSlider from "./ImageSlider";

function Home() {
  //let username = localStorage.getItem("name").replace(/"/g, "");

  return (
    <><div>
    <ImageSlider images={images} /></div>
      <div class="body text-white text-center">
        <h1>Home Page</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>

      <div class="body">
        <div class=" row">
          <div class=" col-sm-4">
            <h3>Column 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris...
            </p>
          </div>
          <div class="col-sm-4">
            <h3>Column 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris...
            </p>
          </div>
          <div class="col-sm-4">
            <h3>Column 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
