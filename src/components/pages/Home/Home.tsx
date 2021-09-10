import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import CustomBox from "../../shared/CustomBox";
import {
  Astra,
  Atlasian,
  Boeing,
  CAT,
  foxmula,
  innovaccer,
  kamal,
  KLA,
  LT,
  Mahindra,
  mtx,
  Salesforces,
  subex,
  surana,
  Wells,
  A2,
  A3,
  A1,
  sldr3
} from "./Images";
import Footer from "../footer/footer";

interface Props { }

const Home = (props: Props) => {

  return (
    <CustomBox>
      <div className="home-landing-section">
        <div className="home-landing-head">Shaastra Juniors</div>
        <div className="home-landing-subhead">2021</div>
      </div>

      <div className="who-are-we-container">
        <div className="home-heads">Who are we?</div>
        <div className="underline"></div>

        <div className="who-are-we">
          <div className="who-are-we-image">
            <img src={A2} width="100%" height="auto" alt="sideImage" />
          </div>
          <div className="who-are-we-content">
            Shaastra Juniors, from Shaastra IIT Madras is the 1st ever completely
            online two day Tech fest specially aimed at spreading technical
            awareness among school students. A fun filled weekend filled with
            events, shows, lectures and workshops is sure to have each and every
            students yearning for more.

            Shaastra Juniors will be conducted online so each and every student
            can participate from the comfort of their home. Junior Shaastra will
            also have special trophies for the best school and excellent students.

            <blockquote>
              A vision board to reflect our dreams,
              Infinite innovation for you to redeem. <br />
              Put together ideas that rise from need,
              Beware, creativity bends to no greed. <br />
              A sacred place with ample room to grow-
              Behold one and all, it is yours to know!
            </blockquote>
          </div>
        </div>
      </div>

      <div className="today-highlights-container">
        <div className="home-heads">Today's Highlights</div>
        <div className="underline"></div>

        <div className="highlight-cards-container">
          <div className="highlight-card">
            <div className="highlight-card-image">
              <img src={A1} width="100%" height="auto" alt="highlight-pic" />
            </div>
            <div className="highlight-card-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non exercitationem officia adipisci repellendus quisquam excepturi, ut ea laborum ipsa fugit nisi vel autem. Sit, quos ex voluptates eligendi, quis hic corporis fuga ratione consectetur quo ea optio maxime corrupti possimus!
            </div>
          </div>
          <div className="highlight-card">
            <div className="highlight-card-image">
              <img src={A2} width="100%" height="auto" alt="highlight-pic" />
            </div>
            <div className="highlight-card-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non exercitationem officia adipisci repellendus quisquam excepturi, ut ea laborum ipsa fugit nisi vel autem. Sit, quos ex voluptates eligendi, quis hic corporis fuga ratione consectetur quo ea optio maxime corrupti possimus!
            </div>
          </div>
          <div className="highlight-card">
            <div className="highlight-card-image">
              <img src={A3} width="100%" height="auto" alt="highlight-pic" />
            </div>
            <div className="highlight-card-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non exercitationem officia adipisci repellendus quisquam excepturi, ut ea laborum ipsa fugit nisi vel autem. Sit, quos ex voluptates eligendi, quis hic corporis fuga ratione consectetur quo ea optio maxime corrupti possimus!
            </div>
          </div>
          {/* <div className="highlight-card">
            <div className="highlight-card-image">
              <img src={A2} width="100%" height="auto" alt="highlight-pic" />
            </div>
            <div className="highlight-card-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non exercitationem officia adipisci repellendus quisquam excepturi, ut ea laborum ipsa fugit nisi vel autem. Sit, quos ex voluptates eligendi, quis hic corporis fuga ratione consectetur quo ea optio maxime corrupti possimus!
            </div>
          </div> */}

        </div>
      </div>

      <div className="prev-year-container">
        <div className="home-heads">Previous Year</div>
        <div className="underline"></div>

        <div className="prev-year-card-container">
          <div className="prev-year-card">
            <div className="prev-year-card-image">
              <img src={sldr3} width="100%" alt="prev-year-pic" />
            </div>
            <div className="prev-year-card-content">
              <h5>Title</h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, exercitationem, ab tenetur sed facilis expedita nihil corrupti sequi modi blanditiis dignissimos est voluptate eligendi veritatis dicta cupiditate magni neque dolorum praesentium. Optio laborum voluptates voluptatibus nesciunt corporis amet. Qui libero nobis iusto corrupti eius deleniti sunt quibusdam, sint nam quae?
            </div>
          </div>

          <div className="prev-year-card">
            <div className="prev-year-card-image">
              <img src={sldr3} width="100%" alt="prev-year-pic" />
            </div>
            <div className="prev-year-card-content">
              <h5>Title</h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, exercitationem, ab tenetur sed facilis expedita nihil corrupti sequi modi blanditiis dignissimos est voluptate eligendi veritatis dicta cupiditate magni neque dolorum praesentium. Optio laborum voluptates voluptatibus nesciunt corporis amet. Qui libero nobis iusto corrupti eius deleniti sunt quibusdam, sint nam quae?
            </div>
          </div>

          <div className="prev-year-card">
            <div className="prev-year-card-image">
              <img src={sldr3} width="100%" alt="prev-year-pic" />
            </div>
            <div className="prev-year-card-content">
              <h5>Title</h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, exercitationem, ab tenetur sed facilis expedita nihil corrupti sequi modi blanditiis dignissimos est voluptate eligendi veritatis dicta cupiditate magni neque dolorum praesentium. Optio laborum voluptates voluptatibus nesciunt corporis amet. Qui libero nobis iusto corrupti eius deleniti sunt quibusdam, sint nam quae?
            </div>
          </div>

          <div className="prev-year-card">
            <div className="prev-year-card-image">
              <img src={sldr3} width="100%" alt="prev-year-pic" />
            </div>
            <div className="prev-year-card-content">
              <h5>Title</h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, exercitationem, ab tenetur sed facilis expedita nihil corrupti sequi modi blanditiis dignissimos est voluptate eligendi veritatis dicta cupiditate magni neque dolorum praesentium. Optio laborum voluptates voluptatibus nesciunt corporis amet. Qui libero nobis iusto corrupti eius deleniti sunt quibusdam, sint nam quae?
            </div>
          </div>

          <div className="prev-year-card">
            <div className="prev-year-card-image">
              <img src={sldr3} width="100%" alt="prev-year-pic" />
            </div>
            <div className="prev-year-card-content">
              <h5>Title</h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, exercitationem, ab tenetur sed facilis expedita nihil corrupti sequi modi blanditiis dignissimos est voluptate eligendi veritatis dicta cupiditate magni neque dolorum praesentium. Optio laborum voluptates voluptatibus nesciunt corporis amet. Qui libero nobis iusto corrupti eius deleniti sunt quibusdam, sint nam quae?
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="home-heads">Sponsors</div>
        <div className="underline"></div>
        <Box width="100%">
          <Flex width="100%" bg="#fff" flexWrap="wrap" justifyContent="center">
            <Image style={{ objectFit: "contain" }} src={Astra} width="400px" p={8} alt="Astra" />
            <Image style={{ objectFit: "contain" }} src={Atlasian} width="400px" p={8} alt="Atlasian" />
            <Image style={{ objectFit: "contain" }} src={Boeing} width="400px" p={8} alt="Boeing" />
            <Image style={{ objectFit: "contain" }} src={CAT} width="400px" p={8} alt="CAT" />
            <Image style={{ objectFit: "contain" }} src={KLA} width="400px" p={8} alt="KLA" />
            <Image style={{ objectFit: "contain" }} src={Mahindra} width="400px" p={8} alt="Mahindra" />
            <Image style={{ objectFit: "contain" }} src={Salesforces} width="400px" p={8} alt="Salesforces" />
            <Image style={{ objectFit: "contain" }} src={Wells} width="400px" p={8} alt="Wells" />
            <Image style={{ objectFit: "contain" }} src={foxmula} width="400px" p={8} alt="foxmula" />
            <Image style={{ objectFit: "contain" }} src={kamal} width="400px" p={8} alt="kamal" />
            <Image style={{ objectFit: "contain" }} src={innovaccer} width="400px" p={8} alt="kamal" />
            <Image style={{ objectFit: "contain" }} src={LT} width="400px" p={8} alt="LT" />
            <Image style={{ objectFit: "contain" }} src={subex} height="150px" width="400px" p={8} alt="subex" />
            <Image style={{ objectFit: "contain" }} src={mtx} height="170px" width="400px" p={8} alt="mtx" />
            <Image style={{ objectFit: "contain" }} src={surana} width="400px" p={8} alt="surana" />
          </Flex>
        </Box>
      </div>
      {/* <Footer></Footer> */}
    </CustomBox>
  );
};

export default Home;
