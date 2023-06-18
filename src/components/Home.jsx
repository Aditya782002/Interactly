import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>INTERACTLY</h1>
          <p>Connect with your fav Founder</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
            voluptatum! Lorem ipsum dolor sit. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Tempore vel explicabo corrupti alias
            iure.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>What we Do</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            pariatur delectus. Sequi neque, numquam nesciunt rem, voluptatem
            minus atque deserunt eius voluptatum tenetur illo. Non quae
            accusantium perspiciatis nesciunt consequatur libero sed fugit
            dolorem voluptates, ratione perferendis saepe beatae maiores vel
            quas suscipit quis mollitia provident. Fugit, cupiditate ea dolorum
            quidem quasi quisquam distinctio facere eveniet vitae sit molestiae
            hic praesentium iste corrupti minus itaque odit possimus neque quae
            eos commodi maiores. Laborum at sit, eum doloribus nostrum a amet
            doloremque alias ad asperiores quasi dignissimos totam assumenda
            itaque autem est repellendus, ullam similique architecto magni sed
            ratione saepe aliquid!
          </p>
        </div>
      </div>

        <div className="home4" id="brands">
          <div>
            <h1>Brands</h1>
            <article>
              <div style={{ animationDelay:"0.3sec",}}>
                <AiFillGoogleCircle />
                <p>Google</p>
              </div>
              <div style={{ animationDelay: "0.5sec" ,}}>
                <AiFillAmazonCircle />
                <p>Amazon</p>
              </div>{" "}
              <div style={{ animationDelay: "0.7sec", }}>
                <AiFillYoutube />
                <p>youtube</p>
              </div>{" "}
              <div style={{ animationDelay: "1sec" ,}}>
                <AiFillInstagram />
                <p>Instagram</p>
              </div>
            </article>
          </div>
        </div>
    </>
  );
};

export default Home;
