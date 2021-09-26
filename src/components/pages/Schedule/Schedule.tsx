import * as React from "react";
import CustomBox from "../../shared/CustomBox";
import ImageGallery from 'react-image-gallery';
import sch1 from "../../../images/schedule/25sep.png";
import sch2 from "../../../images/schedule/26sep.png";
import sch3 from "../../../images/schedule/1oct.png";
import sch4 from "../../../images/schedule/2oct.png";
import sch5 from "../../../images/schedule/3oct.png";
import { Box, Flex, Heading } from "@chakra-ui/layout";

const images = [
    {
      original: sch1,
      thumbnail: sch1,
      originalTitle : "September 25th 2021",
      thumbnailTitle : "September 25th 2021",
      size : "600px"
    },
    {
        original: sch2,
        thumbnail: sch2,
        originalTitle: "September 26th 2021",
        thumbnailTitle : "September 26th 2021"
    },
    {
        original: sch3,
        thumbnail: sch3,
        originalTitle : "October 1st 2021",
        thumbnailTitle : "October 1st 2021"
    },{
        original: sch4,
        thumbnail: sch4,
        originalTitle : "October 2nd 2021",
        thumbnailTitle : "October 2nd 2021"
    },{
        original: sch5,
        thumbnail: sch5,
        originalTitle : "October 3rd 2021",
        thumbnailTitle : "October 3rd 2021"
    }
  ];
  

const Schedule = () => {
    const [title,setTitle] = React.useState("September 25th 2021");
    return (
        <CustomBox >
            <Flex flexDirection={"column"} justifyItems="center" alignItems="center" paddingTop={['50px', '20px']} minHeight={'100vh'} >
           <Heading m={2} p={2}>{title}</Heading>
            <Box p={3} >
           <ImageGallery 
           showThumbnails = {false}
           showFullscreenButton= {false}
           onSlide = {(index)=> setTitle(images[index].originalTitle) }
           showPlayButton = {false}
           items={images} />
           </Box>
           </Flex>
        </CustomBox>
    )
}

export default Schedule
