import React from "react";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import CustomBox from "../../shared/CustomBox";
import {
  Astra,
  Atlasian,
  Boeing,
  CAT,
  KLA,
  Mahindra,
  Salesforces,
  Wells,
  exhibi,
  sj_logo,
  jmt,
  chess,
  spark,
  brain
} from "./Images";
import Footer from "../../shared/Footer";
import { useGetUsersCountQuery, useGetUsersDataCsvQuery, useTodaysHighlightsQuery } from "../../../types/generated/generated";
import Loader from "../../shared/Loader";
import { Link, useHistory } from "react-router-dom";
import { Usercontext } from "../signinUp/Context";
import RegisterNow from "../Events/RegisterNow";
import {ReactComponent as Stats1} from "../../../images/home/3k.svg"
import {ReactComponent as Stats2} from "../../../images/home/30.svg"
import {ReactComponent as Stats3} from "../../../images/home/75.svg"
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import parse from 'html-react-parser';
import { EditIcon } from "@chakra-ui/icons";
import fileDownload from "js-file-download";
import Marquee from "react-fast-marquee";
import "./../../../styles/rainbow.css";
// import Marquee from "react-fast-marquee";


const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});


interface Props {}

const Home = (props: Props) => {
  const history = useHistory();

  const { data, loading, error } = useTodaysHighlightsQuery({});
  const { role } = React.useContext(Usercontext);
  const { data: csv } = useGetUsersDataCsvQuery();
  const { data: count } = useGetUsersCountQuery();

  const Links = [
   
    "sales",
  ];

  if (loading) return <Loader />;

  return (
    <CustomBox>
      <div className="home-landing-section">

        <div>
          <Marquee pauseOnHover={true} gradient={false} speed={100} style={{
            background:"transparent",
            zIndex:0,
          
          }}>
           
            
            <Link to="/sales"  target="_blank" > <div className="rainbow1">Shaastra Juniors Merchandise Sale is live. Visit Sales.shaastra.org and know more.</div> </Link>
            
            
            </Marquee>
        </div>

        <div className="home-landing-head">Shaastra Juniors</div>
        <div className="home-landing-subhead">2021</div>
        <div className="home-landing-subhead-date">24th - 26th Sep | 1st - 3rd Oct</div>
        {
          role === "USER" || role === "ADMIN" ?
          <Link to="/workshops"><Button className="home-register-button">REGISTER</Button></Link>
          : <Link to="/signup"><Button className="home-register-button">REGISTER</Button></Link>

        }
        {
          role === "ADMIN" &&
          <Flex alignItems={"center"} flexDirection={["column", "row"]}>
            <Flex fontSize={"2xl"}>Total Number of Registration: {count?.getUsersCount}</Flex>
            <Button
              className="home-register-button"
              marginTop={"0px"}
              marginLeft={"15px"}
              onClick={() => {
                fileDownload(csv?.getUsersDataCSV!,`sj_participants.csv`);
              }}
            >
            <EditIcon m={2} />
            Download Participants Data
            </Button>
          </Flex>
        }
        {/* <div className="home-landing-subhead-init">An Initiative by Shaastra</div> */}
      </div>

      <div className="who-are-we-container">
        <div className="home-heads">Who are we?</div>
        <div className="underline"></div>

        <div className="who-are-we">
          <div className="who-are-we-image">
            <img src={sj_logo} width="100%" height="auto" alt="sideImage" />
          </div>
          <div className="who-are-we-content">
            Shaastra Juniors, from Shaastra IIT Madras is the 1st ever
            completely online Tech fest specially aimed at spreading
            technical awareness among school students (Class 1 - 12). A fun filled weekend
            filled with events, shows, lectures and workshops is sure to have
            each and every students yearning for more. Shaastra Juniors will be
            conducted online so each and every student can participate from the
            comfort of their home. Junior Shaastra will also have special
            trophies for the best school and excellent students.
            <blockquote>
              A vision board to reflect our dreams, Infinite innovation for you
              to redeem. <br />
              Put together ideas that rise from need, Beware, creativity bends
              to no greed. <br />A sacred place with ample room to grow- Behold
              one and all, it is yours to know!
            </blockquote>
          </div>
        </div>
      </div>

      {data?.todaysHighlights?.length !== 0 ? (
        <div className="today-highlights-container">
          <div className="home-heads">Highlights</div>
          <div className="underline"></div>

          <div className="highlight-cards-container">
            {data?.todaysHighlights?.map((dat) => {
              return (
                <div className="highlight-card">
                  <div className="highlight-card-image">
                    <img
                      src={dat.pic}
                      width="100%"
                      height="auto"
                      alt="highlight-pic"
                    />
                  </div>
                  <div className="highlight-card-title">{dat.title}</div>
                  <div className="highlight-card-content">
                  {parse(converter.makeHtml(dat.description.length > 100
                      ? dat.description.substring(0, (window.innerWidth < 600 ? 175 : 235)) + "..."
                      : dat.description))}
                  </div>
                  <Flex
                    p={3}
                    flexDirection={["column", "column", "row"]}
                    justifyContent={"space-evenly"}
                  >
                    <Button
                      color={"#244f3b"}
                      variant="outline"
                      border="2px solid"
                      borderColor="#244f3b"
                      size="sm"
                      p={2}
                      m={2}
                      onClick={() => {
                        if (dat.eventType === "WORKSHOPS") {
                          history.push(`/workshops/${dat.id}`);
                        } else if (dat.eventType === "COMPETITIONS") {
                          history.push(`/competitions/${dat.id}`);
                        } else if (dat.eventType === "SHOWS") {
                          history.push(`/shows/${dat.id}`);
                        }
                      }}
                    >
                      View Details
                    </Button>
                    {role && <RegisterNow data={dat} />}
                  </Flex>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div />
      )}

      <div className="prev-year-container">
        <div className="home-heads">Previous Edition</div>
        <div className="underline"></div>

        <div className="prev-year-card-container">
          <div className="prev-year-card">
            <div className="prev-year-card-image">
              <img src={jmt} width="100%" alt="prev-year-pic" />
            </div>
            <div className="prev-year-card-content">
              <h5>JUNIOR MAKE-A-THON (JMT)</h5>
              Junior Make-a-thon (JMT ) is a one-of-a-kind event under the Tech
              & Innovation Fair, Shaastra, which centres around the ideas,
              imagination, and innovation skills of high school students and
              allows them to learn practical skills and apply them to create new
              models and devices. One of the primary aims of JMT is to promote
              maker culture among school students, with quality mentorship and
              workshops.
            </div>
          </div>

          <div className="prev-year-card">
            <div className="prev-year-card-image">
              <img src={chess} width="100%" alt="prev-year-pic" />
            </div>
            <div className="prev-year-card-content">
              <h5>Shaastra Junior Chess Tournament</h5>
              Shaastra Junior Chess Tournament Shaastra presents the first ever
              Shaastra Junior Chess Tournament after organising FIDE rated
              Shaastra RAPID Chess since 4 consecutive years. SJCT aims to
              create an environment for enthusiastic and bright young minds to
              compete amongst the best for the championship.
            </div>
          </div>

          <div className="prev-year-card">
            <div className="prev-year-card-image">
              <img src={exhibi} width="100%" alt="prev-year-pic" />
            </div>
            <div className="prev-year-card-content">
              <h5>Virtual Tech Exhibition</h5>A Virtual Tech Exhibition of
              innovative techno-enter tainment projects using 3D animations to
              show the students the principle behind its working. It includes an
              animated video to explain the working of the projects and a 3D
              animation viewer capable of running simulations which allows the
              student to explore each project to its core.
            </div>
          </div>

          <div className="prev-year-card">
            <div className="prev-year-card-image">
              <img src={spark} width="100%" alt="prev-year-pic" />
            </div>
            <div className="prev-year-card-content">
              <h5>BrainSqueeze</h5>
              Do you love putting your brain into overdrive mode while cracking
              arduous puzzles. Students had come to experience the bliss of
              solving mind-bending questions in Brain Squeeze. An entirely
              logical event which puts your reasoning and analytical skills to
              the test with exceptionally tricky questions. Qualify the
              prelims to battle it out with the brightest of minds in the
              finals.
            </div>
          </div>

          <div className="prev-year-card">
            <div className="prev-year-card-image">
              <img src={brain} width="100%" alt="prev-year-pic" />
            </div>
            <div className="prev-year-card-content">
              <h5>Spark</h5>
              Spark is a national platform where students compete with each
              other across technical quizzes, case studies and presentations,
              and in the process improve themselves. Last year’s edition of the
              Spark Junior Quiz was conducted in 20 cities and saw a
              participation of more than 3000+ students across the nation. From
              introducing quizzing to students to organising a coveted
              nationwide inter school competition, Spark has seen amazing
              growth.
            </div>
          </div>
        </div>
        <div className="home-stats">
          <Stats1 style={{flex :1}}  />
          <Stats2 style={{flex :1}}  />
          <Stats3 style={{flex :1}} />
        </div>
        </div>

      <div>
        <div className="home-heads">Past Sponsors</div>
        <div className="underline"></div>
        <Box width="100%">
          <Flex width="100%" bg="#fff" flexWrap="wrap" justifyContent="center">
            <Image
              style={{ objectFit: "contain" }}
              src={Astra}
              width="400px"
              p={8}
              alt="Astra"
            />
            <Image
              style={{ objectFit: "contain" }}
              src={Atlasian}
              width="400px"
              p={8}
              alt="Atlasian"
            />
            <Image
              style={{ objectFit: "contain" }}
              src={Boeing}
              width="400px"
              p={8}
              alt="Boeing"
            />
            <Image
              style={{ objectFit: "contain" }}
              src={CAT}
              width="400px"
              p={8}
              alt="CAT"
            />
            <Image
              style={{ objectFit: "contain" }}
              src={KLA}
              width="400px"
              p={8}
              alt="KLA"
            />
            <Image
              style={{ objectFit: "contain" }}
              src={Mahindra}
              width="400px"
              p={8}
              alt="Mahindra"
            />
            <Image
              style={{ objectFit: "contain" }}
              src={Salesforces}
              width="400px"
              p={8}
              alt="Salesforces"
            />
            <Image
              style={{ objectFit: "contain" }}
              src={Wells}
              width="400px"
              p={8}
              alt="Wells"
            />
          </Flex>
        </Box>
      </div>
      <Footer></Footer>
    </CustomBox>
  );
};

export default Home;
