import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";
const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium rem possimus voluptatibus iure reiciendis soluta, nisi tempore ratione laudantium ex commodi doloremque. Cum mollitia illum doloribus. Error, corporis nobis placeat vitae laudantium tenetur neque deleniti in, quae animi dolore."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis architecto delectus quo repellendus inventore id!"
        />
        <Feature
          title="Knowledgebase"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut nulla accusantium temporibus vitae, impedit necessitatibus dicta nam earum possimus animi."
        />

        <Feature
          title="Education"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quos omnis minus magnam voluptatum, nisi libero unde eius, provident, illum facere."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
