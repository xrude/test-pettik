import styles from "./Vaccination.module.scss";
import * as React from "react";
import Image from "next/image";
import vaccineBanner from "../../public/VaccinationImages/Dog cat vaccination at home.jpg";
import puppyIcon from "../../public/VaccinationImages/Puppy Vaccination Schedule.png";
import KittenIcon from "../../public/VaccinationImages/Kitten Vaccination Schedule copy.png";
import DogCatIcon from "../../public/VaccinationImages/Vaccination Schedule for Adult Cat & Dog.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgb(234 222 243 / 75%)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
 
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Vaccination = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <div className={styles.vaccinationBanner}>
        <Image src={vaccineBanner} layout="responsive" alt="vaccineBanner" />
      </div>
      <div className={styles.vaccinationScheduleContainer}>
        <div className={styles.vaccinationSchedule}>
          <div className={styles.vaccinationScheduleHeadingtitle}>
            Check out the vaccination schedule for dogs, cats
          </div>
          <div className={styles.vaccinationScheduleSubHeading}>
            Dog, Cat Vaccination are an important part of your pet’s overall
            wellness plan and are required to prevent life-threatening
            infections. We provide all of the necessary core and non-core
            vaccines for your pet.
          </div>
          <div className={styles.vaccinationScheduleDetailsContainer}>
            <div className={styles.vaccinationScheduleDetails}>
              <div className={styles.vaccinationSchedulePuppyContainer}>
                <div className={styles.vaccinationSchedulePuppy}>
                  <div className={styles.vaccinationSchedulePuppyIcon}>
                    <Image
                      src={puppyIcon}
                      width="136"
                      height="136"
                      alt="PuppyIcon"
                    />
                  </div>
                  <div className={styles.vaccinationSchedulePuppyheading}>
                    Puppy Vaccination Schedule
                  </div>
                </div>
                <div className={styles.vaccinationSchedulePuppyDetails}>
                  <div className={styles.vaccinationSchedulePuppyDetailsRows}>
                    <span
                      className={styles.vaccinationSchedulePuppyDetailsRowsicon}
                    >
                      <AccessTimeIcon fontSize="large" />
                    </span>
                    6-10 weeks: DHPPL(Distemper, Hepatities, Parvovirus,
                    Parainfluenza, Leptospirosis)
                  </div>
                  <div className={styles.vaccinationSchedulePuppyDetailsRows}>
                    <span
                      className={styles.vaccinationSchedulePuppyDetailsRowsicon}
                    >
                      <AccessTimeIcon fontSize="large" />
                    </span>
                    6-10 weeks: DHPPL(Distemper, Hepatities, Parvovirus,
                    Parainfluenza, Leptospirosis)
                  </div>
                  <div className={styles.vaccinationSchedulePuppyDetailsRows}>
                    <span
                      className={styles.vaccinationSchedulePuppyDetailsRowsicon}
                    >
                      <AccessTimeIcon fontSize="large" />
                    </span>
                    6-10 weeks: DHPPL(Distemper, Hepatities, Parvovirus,
                    Parainfluenza, Leptospirosis)
                  </div>
                </div>
              </div>
              <div className={styles.vaccinationScheduleKittenContainer}>
                <div className={styles.vaccinationScheduleKitten}>
                  <div className={styles.vaccinationScheduleKittenIcon}>
                    <Image
                      src={KittenIcon}
                      width="136"
                      height="136"
                      alt="KittenIcon"
                    />
                  </div>
                  <div className={styles.vaccinationScheduleKittenheading}>
                    Kitten Vaccination Schedule
                  </div>
                </div>
                <div className={styles.vaccinationScheduleKittenDetails}>
                  <div className={styles.vaccinationScheduleKittenDetailsRows}>
                    <span
                      className={
                        styles.vaccinationScheduleKittenDetailsRowsicon
                      }
                    >
                      <AccessTimeIcon fontSize="large" />
                    </span>
                    6-10 weeks: DHPPL(Distemper, Hepatities, Parvovirus,
                    Parainfluenza, Leptospirosis)
                  </div>
                  <div className={styles.vaccinationScheduleKittenDetailsRows}>
                    <span
                      className={
                        styles.vaccinationScheduleKittenDetailsRowsicon
                      }
                    >
                      <AccessTimeIcon fontSize="large" />
                    </span>
                    6-10 weeks: DHPPL(Distemper, Hepatities, Parvovirus,
                    Parainfluenza, Leptospirosis)
                  </div>
                  <div className={styles.vaccinationScheduleKittenDetailsRows}>
                    <span
                      className={
                        styles.vaccinationScheduleKittenDetailsRowsicon
                      }
                    >
                      <AccessTimeIcon fontSize="large" />
                    </span>
                    6-10 weeks: DHPPL(Distemper, Hepatities, Parvovirus,
                    Parainfluenza, Leptospirosis)
                  </div>
                </div>
              </div>
              <div className={styles.vaccinationScheduleDogCatContainer}>
                <div className={styles.vaccinationScheduleDogCat}>
                  <div className={styles.vaccinationScheduleDogCatIcon}>
                    <Image
                      src={DogCatIcon}
                      width="136"
                      height="136"
                      alt="DogCatIcon"
                    />
                  </div>
                  <div className={styles.vaccinationScheduleDogCatheading}>
                    Vaccination Schedule For Adult Cat & Dog
                  </div>
                </div>
                <div className={styles.vaccinationScheduleDogCatDetails}>
                  <div className={styles.vaccinationScheduleDogCatDetailsRows}>
                    <span
                      className={
                        styles.vaccinationScheduleDogCatDetailsRowsicon
                      }
                    >
                      <AccessTimeIcon fontSize="large" />
                    </span>
                    6-10 weeks: DHPPL(Distemper, Hepatities, Parvovirus,
                    Parainfluenza, Leptospirosis)
                  </div>
                  <div className={styles.vaccinationScheduleDogCatDetailsRows}>
                    <span
                      className={
                        styles.vaccinationScheduleDogCatDetailsRowsicon
                      }
                    >
                      <AccessTimeIcon fontSize="large" />
                    </span>
                    6-10 weeks: DHPPL(Distemper, Hepatities, Parvovirus,
                    Parainfluenza, Leptospirosis)
                  </div>
                  <div className={styles.vaccinationScheduleDogCatDetailsRows}>
                    <span
                      className={
                        styles.vaccinationScheduleDogCatDetailsRowsicon
                      }
                    >
                      <AccessTimeIcon fontSize="large" />
                    </span>
                    6-10 weeks: DHPPL(Distemper, Hepatities, Parvovirus,
                    Parainfluenza, Leptospirosis)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.faqContainer}>
        <div className={styles.faqHeading}>Frequently asked questions</div>
        <div className={styles.faqAccordion}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography className={styles.vaccinationTypography}>Why pet vaccinations are Important?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Pet vaccinations play a critical role in protecting your dog,
                cat from many dangerous and even fatal diseases. While state law
                requires all dogs, cats to be vaccinated for rabies, many other
                vaccinations can protect your fur-kid from serious diseases that
                are easily preventable.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography  className={styles.vaccinationTypography}>When do puppies start their vaccinations?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Distemper shots are usually given at 8, 10, and 12 weeks. Then
                at 15 weeks, three weeks later. Some vets give them at the ages
                of 8, 12, and 16, while others give them at the ages of 6, 12,
                and 16.
              </Typography>
              <Typography>
                The fundamental criterion is that they should be administered
                3-4 weeks apart (4 weeks maximum), with the last one occurring
                at or after 15-16 weeks.
              </Typography>
              <Typography>
                The reason to vaccinate more frequently when dogs are young is
                that the mother-given immunity against distemper, parvo,
                adenovirus, hepatitis, parainfluenza and other diseases tends to
                fall off really precipitously around 10 weeks of age.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography  className={styles.vaccinationTypography}>
                What if I misses a puppy vaccine in the series?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                It should be given within a specified time frame, according to
                the manufacturer’s recommendation. So, if it’s been a while,
                your veterinarian will assess the dog’s age and week when each
                vaccine was given, and then determine the fresh series for your
                dog.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography  className={styles.vaccinationTypography}>
                Kitten and cat vaccinations: Do they really need to be given?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Well Yes! A kitten or cat owner is responsible for their feline
                friend’s happiness and longevity. Vaccinations for cats are an
                important part of their long-term health.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel5d-content"
              id="panel5d-header"
            >
              <Typography  className={styles.vaccinationTypography}>What are the recommended cat vaccines?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Vaccinations for kittens and cats are determined by a variety of
                criteria, including pre-existing medical issues and whether they
                live indoors or outdoors.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              aria-controls="panel6d-content"
              id="panel6d-header"
            >
              <Typography  className={styles.vaccinationTypography}>
                What is the difference between a core vaccine and a non-core
                vaccine?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Core vaccines for cats and dogs are rabies and distemper,
                according to the Indian Veterinary Council. Of course, there is
                no distemper vaccine for cats. Although there is no such disease
                as feline distemper, we refer to the feline viral
                rhinotracheitis calicivirus and panleukopenia vaccine as
                distemper in cats.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Vaccination;
