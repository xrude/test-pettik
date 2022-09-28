import styles from "./VetConsult.module.scss";
import Image from "next/image";
import Banner from "../../public/vetConsultImages/consultBanner.jpg";
import Grid from "@mui/material/Grid";
import Android from "../../public/android.png";
import Apple from "../../public/apple.png";
import Container from "@mui/material/Container";
import CheckIcon from '@mui/icons-material/Check';

const VetConsult = () => {
  return (
    <div>
      <div className={styles.vetConsultBanner}>
      
        <Image src={Banner} alt="Banner-image" height={510} width={1728} />
        <div className={styles.bannerContent}>
        <div className={styles.bannerHeading}>Get instant access to vet care from home.</div>
        <div className={styles.bannerSubHeading}><CheckIcon />Consultations by video/text</div>
        <div className={styles.bannerSubHeading}><CheckIcon />Discounts on prescription meds</div>
        <div className={styles.bannerButton}><button className={styles.bannerButtonSchedule}>Create Schedule</button></div>
        </div>
        
      </div>
      <div className={styles.DownloadAppContent}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <div className={styles.DownloadAppCol}>
              <div className={styles.DownloadAppHeading}>Download Our App!</div>
              <div className={styles.DownloadAppSubHeading}>
                Consult with Certified Veterinarians across India on the PETTIK
                App.
              </div>
              <div className={styles.DownloadAppSubHeading}>
                Get Pet-care Advice, Community, Shop and more at your
                fingertips.
              </div>
              <div className={styles.DownloadAppImage}>
                <div className={styles.DownloadAppStore}>
                  <Image
                    src={Android}
                    alt="Android-image"
                    height={55}
                    width={190}
                  />
                </div>
                <div className={styles.DownloadAppStore}>
                  {" "}
                  <Image
                    src={Apple}
                    alt="Apple-image"
                    height={55}
                    width={190}
                  />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/07d2dXHYb94"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Grid>
        </Grid>
      </div>
      <div className={styles.ConsultationContent}>
        <div className={styles.ConsultationHeading}>
          Trusted and beloved by pet parents
        </div>
        <div className={styles.ConsultationList}>
          <div className={styles.ConsultationListItems}>
            <div className={styles.ConsultationZeroPlus}>
              {Math.floor(1000 + Math.random() * 9000)}+
            </div>
            <div className={styles.Consultations}>Consultations</div>
          </div>
          <div className={styles.ConsultationListItems}>
            <div className={styles.ConsultationZeroPlus}>
              {Math.floor(1000 + Math.random() * 9000)}+
            </div>
            <div className={styles.Consultations}>Consultations</div>
          </div>
          <div className={styles.ConsultationListItems}>
            <div className={styles.ConsultationZeroPlus}>
              {Math.floor(1000 + Math.random() * 9000)}+
            </div>
            <div className={styles.Consultations}>Consultations</div>
          </div>
        </div>
      </div>
      <div className={styles.HowPettikConsultsWorks}>
        How Pettik Consults Works
      </div>
      <div className={styles.HowPettikConsultsWorksContainer}>
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={6} md={4} lg={4}>
              <div className={styles.HowPettikConsultsWorkslist}>
                <div>
                  <Image
                    src="/../public/vetConsultImages/ICON1.jpg"
                    alt="dog-image"
                    height={150}
                    width={150}
                  />
                </div>
                <div className={styles.HowPettikConsultsWorkslistHeading}>
                  <h2>1. Tell us what's wrong</h2>
                </div>
                <div className={styles.HowPettikConsultsWorkslistSubHeading}>
                  Answer a few questions about you pet's problem and get
                  connected to an expert vet within minutes.
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={4} lg={4}>
              <div className={styles.HowPettikConsultsWorkslist}>
                <div>
                  <Image
                    src="/../public/vetConsultImages/ICON2.jpg"
                    alt="dog-image"
                    height={150}
                    width={150}
                  />
                </div>
                <div className={styles.HowPettikConsultsWorkslistHeading}>
                  <h2>2. Talk to the doctor</h2>
                </div>
                <div className={styles.HowPettikConsultsWorkslistSubHeading}>
                  Connect with your doctor over a video call. Get detailed
                  prescriptions and notes.
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={4} lg={4}>
              <div className={styles.HowPettikConsultsWorkslist}>
                <div>
                  <Image
                    src="/../public/vetConsultImages/ICON3.jpg"
                    alt="dog-image"
                    height={150}
                    width={150}
                  />
                </div>
                <div className={styles.HowPettikConsultsWorkslistHeading}>
                  <h2>3. Free follow-up</h2>
                </div>
                <div className={styles.HowPettikConsultsWorkslistSubHeading}>
                  Get a free follow-up with your doctor up to one week after
                  your consultation.
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={styles.areYouAVetContainer}>
        <div className={styles.areYouAVetPurpleContainer}>
          <div className={styles.areYouAVetPurpleCol1}>
            <div className={styles.areYouAVetHaeding}>Are you a vet?</div>
            <div className={styles.areYouAVetSubHaeding}>
              We would love to work with you. Send us a message and we’ll be in
              touch with you right away to onboard you to our platform.
            </div>
            <div className={styles.areYouAVetButton}>
              <button className={styles.buttonJoinPettik}>JOIN PETTIK</button>
            </div>
          </div>
          <div className={styles.areYouAVetPurpleCol2}>
            <Image
              src="/../public/vetConsultImages/PurpleBanner.png"
              alt="dog-image"
              height={578}
              width={678}
            />
          </div>
        </div>
      </div>
      <div className={styles.newsLetter}>Subscribe to our newsletter!</div>
      <div className={styles.newsLetterSubHeading}>
        Once-a-week short reads on pet care tips, advice from experts and more.
      </div>
      <div className={styles.newsLetterInputBox}>
        <input type="text" placeholder="Enter your Email ID"></input>
        <input type="submit" value="SUBMIT"></input>
      </div>
    </div>
  );
};

export default VetConsult;
