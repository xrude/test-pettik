import styles from "./HomeGrooming.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import  { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Carousel from "react-bootstrap/Carousel";
import QualityPetCare from "../../public/groomingImages/Pettik at home banner.jpg"
import GroomingBannerOne from "../../public/groomingImages/Groom in easy banner.jpg";
import GroomingBannerTwo from "../../public/groomingImages/certified groomers.jpg";
import Haircut from "../../public/groomingImages/Breed Specific Haircut.png";
import GroomingExpert from "../../public/groomingImages/Grooming Experts.png";
import QualityProduct from "../../public/groomingImages/Quality Products.png";
import ModernSaloon from "../../public/groomingImages/High Convenience.png";
import DogAllergies from "../../public/groomingImages/Dog Allergies Know All About Them.jpg";
import DrySkin from "../../public/groomingImages/Here How You Can Prevent Dry Skin In Dogs.jpg";
import TickAndFleas from "../../public/groomingImages/Your Guide To Ticks & Fleas in Pets Symptoms, Treatment Care.jpg";
import TakeCarePetGroomingOne from "../../public/groomingImages/Certified Groomers, At Your Service.png";
import TakeCarePetGroomingTwo from "../../public/groomingImages/happy pets happy parents.png";
import ExploreOurPack from "./ExploreOurPack";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { TabContext } from "@mui/lab";
import TabPanel from "@mui/lab/TabPanel";
import ExploreImagesOne from "../../public/groomingImages/essential package.jpg";
import ExploreImagesTwo from "../../public/groomingImages/all in one.jpg";
import ExploreImagesThree from "../../public/groomingImages/tick & flea control.jpg";
import ExploreImagesFour from "../../public/groomingImages/customised pack.jpg";
import axios from "axios";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
  },
  "& .MuiTabs-indicatorSpan": {
    width: "100%",
    backgroundColor: "rgba(160, 68, 255, 0.9882352941)",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: "#052A5075",
    "&.Mui-selected": {
      color: "rgb(24, 55, 98)",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgb(24, 55, 98)",
    },
  })
);

const HomeGrooming = () => {

  const [GroomingData, setGroomingData] = useState([])
 
  // const ImageData = [ExploreImagesOne,ExploreImagesTwo,ExploreImagesThree, ExploreImagesFour]

  const GroomingApiCall = async() => {
    try{
      const groomingBackend = "https://6u26pb8q2e.execute-api.us-east-1.amazonaws.com/services/grooming";
      const data = await axios.get(groomingBackend);
      console.log(data.data.services)
      setGroomingData(data.data.services);
    
    }
    catch (e){
      console.log(e)
    }
    
  }
  useEffect(() => {
    GroomingApiCall();
  }, []);
  // const ExploreImagesOneObj = {
  //   packName: "Essential Package",
  //   img: ExploreImagesOne,
  //   price: "1,249",
  //   time: "75",
  //   include: ["Bath And Blow Dry","Cleaning Package"],
  //   description:
  //     "Upon assessing your dog’s skin & coat our groomers use suitable products, ensuring that it leaves with a clean coat & ears, and trimmed paws",
  // };
  // const ExploreImagesTwoObj = {
  //   packName: "All in one Pack",
  //   img: ExploreImagesTwo,
  //   price: "2,099",
  //   time: "135",
  //   include: ["Bath And Blow Dry","Hair Cut","Cleaning Package","Face and Feet Trim"],
  //   description:
  //   "In addition to the basic grooming our professional groomers trim and style your fur buddy’s hair to keep it camera ready, always!",

  // };
  // const ExploreImagesThreeObj = {
  //   packName: "Ticks and Flea Control",
  //   img: ExploreImagesThree,
  //   price: "1,349",
  //   time: "60",
  //   include: ["Bath And Blow Dry","Anti Tick Treatment"],
  //   description:
  //   "Our groomers thoroughly check your pooch’s coat, removing the ticks/fleas manually and end the session with a medicated bath !!",

  // };
  // const ExploreImagesFourObj = {
  //   packName: "Customized Pack",
  //   img: ExploreImagesFour,
  //   price: "1,249",
  //   time: "--",
  //   include: ["Bath And Blow Dry","Dematt","Cleaning Package","Puppy Pack","Haircut","Winter Spa","Face and Feet Trim"],
  //   description:
  //   "Have some special requirements for your pooch? Choose the services you want our Groomers to offer !! ",

  // };


  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className={styles.carouselGroomingContent}>
        <Carousel>
          <Carousel.Item>
            <Image src={GroomingBannerOne} alt="First slide" layout="responsive" />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src={GroomingBannerTwo}
              alt="Second slide"
              layout="responsive"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={styles.professionalGroomingText}>
        <h1>
          <strong>Professional Grooming Services</strong>
          <br></br>that put your pet's needs first
        </h1>
      </div>
      <div className={styles.groomingImage}>
        <div className={styles.breedSpecific}>
          <Image
            src={Haircut}
            alt="Dog Grooming Services at home"
            width="266"
            height="266"
          />
          <div className={styles.groomingImageText}>
            <h3>Breed Specific Haircut</h3>
            <div>
              Pettik's experienced groomers suggest <br></br>speciality trims
              for each breed.
            </div>
          </div>
        </div>
        <div className={styles.groomingExperts}>
          <Image
            src={GroomingExpert}
            alt="Pettik certified and trained dog groomers"
            width="266"
            height="266"
          />
          <div className={styles.groomingImageText}>
            <h3>Grooming Experts</h3>
            <div>
              Pettik certified and trained groomers <br></br>for your little
              companions.
            </div>
          </div>
        </div>
        <div className={styles.qualityProducts}>
          <Image
            src={QualityProduct}
            alt="A wide variety of tested pet products"
            width="266"
            height="266"
          />
          <div className={styles.groomingImageText}>
            <h3>Quality Products</h3>
            <div>
              A wide variety of tested <br></br>products to ensure the best
              care.
            </div>
          </div>
        </div>
        <div className={styles.modernSaloon}>
          <Image
            src={ModernSaloon}
            alt="Pet Salon for all your pet grooming needs"
            width="266"
            height="266"
          />
          <div className={styles.groomingImageText}>
            <h3>High Convenience</h3>
            <div>
              Curate a package of the<br></br>services you need for your pet.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bookAppoinment}>
        <button className={styles.appoinment} type="submit">
          BOOK NOW
        </button>
      </div>
      <div className={styles.qualityPetCare}>
      <Image
              className={styles.homeItemImage}
              src={QualityPetCare}
              alt="qualitypetcare"
             layout="responsive"
            />
      </div>
      <div className={styles.exploreOurPack}>
        <div className={styles.exploreOurPackTitle}>Explore Our Packs</div>
        <div className={styles.exploreTabs}>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box>
                <StyledTabs
                  value={value}
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  centered
                >
                  <StyledTab
                    className={styles.tablink}
                    label="Essential Package"
                    value="1"
                  />
                  <StyledTab
                    className={styles.tablink}
                    label="All in one Pack"
                    value="2"
                  />
                  <StyledTab
                    className={styles.tablink}
                    label="Ticks and Flea Control"
                    value="3"
                  />
                  <StyledTab
                    className={styles.tablink}
                    label="Customized Pack"
                    value="4"
                  />
                </StyledTabs>
              </Box>
                <TabPanel value="1">
                   <ExploreOurPack data={1}  item ={GroomingData[0]}/>
              </TabPanel>
               <TabPanel value="2">
                <ExploreOurPack data={2}  item ={GroomingData[1]} />
              </TabPanel>
              <TabPanel value="3">
                <ExploreOurPack data={3}  item ={GroomingData[2]} />
              </TabPanel>
              <TabPanel value="4">
                <ExploreOurPack data={4}  item ={GroomingData[3]} />
              </TabPanel> 
            </TabContext>
          </Box>
          <div className={styles.bookAppoinmentExplore}>
            <button className={styles.appoinment} type="submit">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
      <div className={styles.takecarePets}>
        <div className={styles.pets}>
          <div className={styles.title}>
            Quality and Convenience - The Mantra of Pettik Tribe
          </div>
          <div className={styles.subtitle}>
            Your little bundle of joy will always be in good hands. Our groomers
            are not just certified but also care for your pets with all their
            heart. And the best part is , that your pet can enjoy all our
            services at home.
          </div>
        </div>
        <div className={styles.groomingImagePet}>
          <div className={styles.homeItem}>
            <Image
              className={styles.homeItemImage}
              src={TakeCarePetGroomingOne}
              alt="Dog Allergies - Know All About Them! "
              width="625"
              height="406"
            />
            <div className={styles.groomingImageText}>
              <h3>Certified Groomers, At Your Service</h3>
              <div>
                When the question is of your pet's upkeep our certified,{" "}
                <br></br>pet-loving groomers ensure that your <br></br>pet
                enjoys the best-in-className services at the comfort of its
                home.
              </div>
            </div>
          </div>
          <div className={styles.homeItem}>
            <Image
              className={styles.homeItemImage}
              src={TakeCarePetGroomingTwo}
              alt="Dog Allergies - Know All About Them! "
              width="625"
              height="406"
            />
            <div className={styles.groomingImageText}>
              <h3>Happy Pets, Happy Parents</h3>
              <div>
                Our high quality services address your <br></br>pets' needs with
                the ultimate perfection! <br></br>Every grooming session will
                help them be their best, happy selves.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.knowBtn}>
          <button className={styles.appoinment} type="submit">
            BOOK NOW
          </button>
        </div>
      </div>
      <div className={styles.tipsForPets}>
        <div className={styles.petsHealth}>
          <div className={styles.tipsText}>
            <h1>Day-to-day Tips To Maintain Your Pet's Health</h1>
          </div>
          <div className={styles.healthImages}>
            <div className={styles.healthImage}>
              <div className={styles.postImage}>
                <Image
                  className={styles.imgResponsive}
                  src={DogAllergies}
                  alt="Dog Allergies - Know All About Them! "
                  layout="responsive"
                />
              </div>
              <div className={styles.healthText}>
                <h3 className={styles.mpPostTitle}>
                  Dog Allergies - Know All About Them!{" "}
                </h3>
                <div className={styles.healthTextReadNow}> READ NOW</div>
              </div>
            </div>
            <div className={styles.healthImage}>
              <div className={styles.postImage}>
                <Image
                  className={styles.imgResponsive}
                  src={DrySkin}
                  alt="Here's How You Can Prevent Dry Skin In Dogs"
                  layout="responsive"
                />
              </div>
              <div className={styles.healthText}>
                <h3 className={styles.mpPostTitle}>
                  Here's How You Can Prevent Dry Skin In Dogs{" "}
                </h3>
                <div className={styles.healthTextReadNow}> READ NOW</div>
              </div>
            </div>
            <div className={styles.healthImage}>
              <div className={styles.postImage}>
                <Image
                  className={styles.imgResponsive}
                  src={TickAndFleas}
                  alt="Your Guide To Ticks &amp; Fleas in Pets: Symptoms, Treatment, Care"
                  layout="responsive"
                />
              </div>
              <div className={styles.healthText}>
                <h3 className={styles.mpPostTitle}>
                  Your Guide To Ticks &amp; Fleas in Pets: Symptoms, Treatment,
                  Care{" "}
                </h3>
                <div className={styles.healthTextReadNow}> READ NOW</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGrooming;
