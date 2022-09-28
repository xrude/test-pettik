import styles from "./Header.module.scss";
import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Button from "@mui/material/Button";
import { useState } from "react";
import { LoginPopUpModal } from "../LoginModal/loginPopUpModal";
import { ContactusPopUpModal } from "../ContactusModal/contactusModal";
import { useRouter } from 'next/router';


const Header = () => {

  const router = useRouter();
  const [loginModal, setLoginModal] = useState(false);
  const [contactusModal, setContactusModal] = useState(false);

  const logout = () => {
    localStorage.clear();
    router.push("/");
  };
  const getButton = () => {
    
    if (typeof window !== "undefined") {
      return localStorage.getItem("token") === null ? (
        <Button
         
          sx={{ color: "#281ACB", background: "#F9F8F8", fontweight: 700 }}
          onClick={() => {
            setLoginModal(true);
          }}
        >
          SIGN IN &nbsp;&nbsp;
          <span>
            <ArrowRightAltIcon sx={{ fontSize: 30, verticalAlign: "middle" }} />
          </span>
        </Button>
      ) : (
        <><Link href="/dashboard">
        <Button >
          DASHBOARD &nbsp;&nbsp;{" "}
          <span>
            <ArrowRightAltIcon
              sx={{ fontSize: 30, verticalAlign: "middle" }}
            />
          </span>
        </Button>
      </Link>
      <Button
          className="buttonLocationSignin"
          sx={{ color: "#281ACB", background: "#F9F8F8", fontweight: 700 }}
          onClick={logout}
        >
          LOGOUT &nbsp;&nbsp;
          <span>
            <ArrowRightAltIcon sx={{ fontSize: 30, verticalAlign: "middle" }} />
          </span>
        </Button>
      </>
       
      );
    }
  };
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerRow1}>
          <div className={styles.coupon}>
            Extra 15% off on 1st order over ₹400 with code&nbsp;
            <span className={styles.code}>PETTIKFIRST 1</span>
          </div>
          <div
            className={styles.customerSupport}
            onClick={() => {
              setContactusModal(true);
            }}
          >
            Customer Support:&nbsp;&nbsp;&nbsp;
            <span className={styles.icon}>
              <SupportAgentIcon
                sx={{ fontSize: 30, verticalAlign: "middle" }}
              />
            </span>
          </div>
        </div>
        <div className={styles.headerRow2}>
          <div className={styles.pettikLogo}>
            <Link href="/">
              <Image
                src="/logo/logo.png"
                alt="pettik-logo"
                height={130}
                width={130}
              />
            </Link>
          </div>
          <div className={styles.navigation}>
            <ul>
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/home-grooming">
              <li>Grooming</li>
              </Link>
              <Link href="/pet-vaccination">
              <li>Vaccination</li>
              </Link>
              <Link href="/vet-consult">
                <li>Consult a vet</li>
              </Link>
              
              <Link href="/blog">
                <li>Blog</li>
              </Link>
            </ul>
          </div>
          <div className={styles.button}>
            {getButton()}
          </div>
        </div>
      </div>
      <LoginPopUpModal loginModal={loginModal} setLoginModal={setLoginModal} />
      <ContactusPopUpModal
        contactusModal={contactusModal}
        setContactusModal={setContactusModal}
      />
    </>
  );
};
export default Header;
