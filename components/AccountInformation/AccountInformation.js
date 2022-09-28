import styles from "./AccountInformation.module.scss";
import Image from "next/image";
import AccountInfoImage from "../../public/PAW BACKGROUND.jpg";
import axios from "axios";
import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { useSnackbar } from "notistack";
import { useRouter } from 'next/router';


const AccountInformation = ({userData,setIsEditProfile}) => {
 
  let phoneValue;
  if (typeof window !== "undefined"){
     phoneValue = localStorage.getItem("phoneNumber") ?? "-";
     console.log("phonevalhelloe",phoneValue);
  }
  const router = useRouter();
  const [userExist, setUserExist] = useState(false);
 const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    name: userData?.name,
    email: userData?.email,
  });
 
useEffect(()=>{
  if(!localStorage.getItem("token")){
    setUserExist(false);
    router.push("/");
  }
  else{
    setUserExist(true);
  }
},[]);

  const [loading, setLoding] = useState(false);
  const handelInput = (e) => {
    const [key, value] = [e.target.name, e.target.value];
    setFormData((prevValue) => ({ ...prevValue, [key]: value }));
  };

  const register = async (formData) => {
    if (!validateInput(formData)) return;

setIsEditProfile(false);
const token = localStorage.getItem("token");
    try {
      var data = JSON.stringify({
        "name": formData.name,
        "email" : formData.email,
        
      });
      var config = {
        method: "post",
        url: "https://6u26pb8q2e.execute-api.us-east-1.amazonaws.com/user/details/store",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: data,
      };
      setLoding(true);
      axios(config)
      .then(function (response) {
       
      })
      .catch(function () {
        console.log("Error while sending user details");
      });
      setLoding(false);
      enqueueSnackbar("Submited Successfully", { variant: "success" });
     
    } catch (e) {
      setLoding(false);
      if (e.response && e.response.status === 400) {
        enqueueSnackbar(e.response.data.message, { variant: "error" });
      } else {
        enqueueSnackbar("Somthing went wrong. Server error ...", {
          variant: "error",
        });
      }
    }
  };

  const validateInput = (data) => {
    if (!data.name) {
      enqueueSnackbar("Username is a required field", { variant: "error" });
      return false;
    }
    if (data.name.length < 3) {
      enqueueSnackbar("Username must be at least 3 characters", {
        variant: "error",
      });
      return false;
    }
   
    if (!data.email) {
      enqueueSnackbar("Email is a required field", { variant: "error" });
      return false;
    }
    if (!emailRegex.test(data.email)) {
      enqueueSnackbar("Enter a valid email id.. ", { variant: "error" });
      return false;
    }

    return true;
  };
  return (
    <div>
    {userExist ?
    <> 
    <div className={styles.accountInformationContainer}>
        <div className={styles.accountInformationBackgroundImage}>
          <Image src={AccountInfoImage} alt="banner" layout="responsive" />
        </div>
        <div className={styles.accountInformationBox}>
          <div className={styles.accountInformationBoxHeading}>
            ACCOUNT INFORMATION
          </div>
          <input
            name="name"
            type="text"
            placeholder="Username"
            value={formData.name}
            onChange={handelInput}
          />
           
          <input
            name="phoneNumber"
            type="text"
            placeholder="Phone number"
            disabled="disabled"
            value={phoneValue}
          
            className={styles.disabledBtn}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handelInput}
          />
          {loading ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          ) : (
            <button
              type="submit"
              className={styles.accountInformationSaveButton}
              onClick={() => register(formData)}
            >
              SAVE
            </button>
          )}
        </div>
      </div>
      </> : 
      <center><CircularProgress /></center>}
     
    </div>
  );
};

export default AccountInformation;
