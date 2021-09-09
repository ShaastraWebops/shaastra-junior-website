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
      <div className="home-heads">SPONSORS</div>
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
      {/* <Footer></Footer> */}
    </CustomBox>
  );
};

export default Home;
