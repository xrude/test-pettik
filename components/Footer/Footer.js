import styles from "./Footer.module.scss";
import StraightIcon from "@mui/icons-material/Straight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.backToTop}>
        <div
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <StraightIcon fontSize="large" />
        </div>
        <div> Back To Top</div>
      </div>
      <div className={styles.mainSection}>
        <div className={styles.column}>
          <div className={styles.heading}>Most Searched</div>
          <ul>
            <li>Dog Food</li>
            <li>Dog Treat</li>
            <li>Cat Food & Treat</li>
            <li>Dog Toys & Acc.</li>
            <li>Dog HealthCare</li>
            <li>Cat Toys & Acc.</li>
            <li>Dog Grooming</li>
          </ul>
        </div>
        <div className={styles.column}>
          <div className={styles.heading}>Quick Link</div>
          <ul>
            <li className={styles.underline}>Shop For Dogs</li>
            <li className={styles.underline}>Shop For Cats</li>
            <li className={styles.underline}>Book a Consult</li>
            <li className={styles.underline}>Pet Care Blogs</li>
          </ul>
        </div>
        <div className={styles.column}>
          <div className={styles.heading}>Company</div>
          <ul>
            <li>About Us</li>
            <li>Carrers</li>
            <li>Contact Us</li>
            <li>Press</li>
            <li>Legal</li>
          </ul>
        </div>
        <div className={styles.column}>
          <div className={styles.heading}>Product</div>
          <ul>
            <li>Consult</li>
            <li>Shop</li>
            <li>Club</li>
            <li>Guide</li>
            <li>Tracker</li>
          </ul>
        </div>
        <div className={styles.column}>
          <div className={styles.heading}>Account</div>
          <ul>
            <li>My Orders</li>
            <li>My Wishlist</li>
            <li>My Addresses</li>
            <li>My Account</li>
          </ul>
        </div>
        <div className={styles.column}>
          <div className={styles.heading}>Get In Touch</div>
          <div className={styles.optionWithIcon}>
            <div>
              <LocationOnIcon sx={{ verticalAlign: "middle" }} />
            </div>
            <div className={styles.text}>
              3rd Floor, T-04 Pettik, <br />
              Sector 3 Noida, <br />
              Uttar Pradesh - 201301
            </div>
          </div>

          <div className={styles.optionWithIcon}>
            <div>
              <CallIcon sx={{ verticalAlign: "middle" }} />
            </div>
            <div className={styles.text}>+91-997116196</div>
          </div>

          <div className={styles.optionWithIcon}>
            <div>
              <MailIcon sx={{ verticalAlign: "middle" }} />
            </div>
            <div className={styles.text}>pettik.services@gmail.com</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;