import styles from "./AddPet.module.scss";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";
import petImage from "../../public/addpet.jpg";
import React, { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSnackbar } from "notistack";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from 'next/router';

const AddPet = () => {
  
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoding] = useState(false);
  // const[year, setYear] = useState(0);
  // const[month, setMonth] = useState();
  const [formData, setFormData] = useState({});
  const [userExist, setUserExist] = useState(false);
  const router = useRouter();
  const handelInput = (e) => {
    const [key, value] = [e.target.name, e.target.value];
    setFormData((prevValue) => ({ ...prevValue, [key]: value }));
  };

  // const handleChangeYear = (set, e) => {
  //   console.log(e.target.value)
  //   set(parseInt(e.target.value));
  // };
  

  // const handleChangeMonth = (set, e) => {
  //   console.log(e.target.value)
  //   const val = parseInt(e.target.value);
    
   
  //   if(val>=12){
  //     setYear(year+Math.floor(val/12));
  //     setMonth(e.target.value%12);
  //   }
  //   else{
  //     set(e.target.value) ;
  //   }
  // };

  useEffect(()=>{
    if(!localStorage.getItem("token")){
      setUserExist(false);
      router.push("/");
    }
    else{
      setUserExist(true);
    }
  },[]);

  const register = async (formData) => {
    if (!validateInput(formData)) return;

    const token = localStorage.getItem("token");
    try {
      var petDetails = JSON.stringify({
        "pet" : {
          pet_name: formData.pet_name,
        pet_breed: formData.pet_breed,
        pet_type: formData.pet_type,
        pet_dob: formData.pet_dob,
        pet_gender: formData.pet_gender,
        }
      })
      var petData = petDetails;
     
      var config = {
        method: "post",
        url: "https://6u26pb8q2e.execute-api.us-east-1.amazonaws.com/user/details/store",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: petData,
      };
      setLoding(true);
      axios(config)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function () {
          console.log("Error while sending pet details");
        });
      setLoding(false);
      enqueueSnackbar("Submited Successfully", { variant: "success" });
      router.push("/dashboard")
    } catch (e) {
      setLoding(false);
      console.log(e.response, "error");
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
    if (!data.pet_type) {
      enqueueSnackbar("Pet Type is a required field", { variant: "error" });
      return false;
    }
    if (!data.pet_gender) {
      enqueueSnackbar("Gender is a required field", { variant: "error" });
      return false;
    }
    if (!data.pet_breed) {
      enqueueSnackbar("Breed is a required field", { variant: "error" });
      return false;
    }
    if (!data.pet_dob) {
      enqueueSnackbar("DOB is a required field", { variant: "error" });
      return false;
    }
    if (!data.pet_name) {
      enqueueSnackbar("Name is a required field", { variant: "error" });
      return false;
    }
    return true;
  };
  return (
    <div>
     {userExist ?
    <> 
      <div className={styles.addPetContent}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <div className={styles.addPetContentBox}>
              <div className={styles.addPetContentBoxheading}>Add New Pet</div>
              <div className={styles.addPetContentBoxCategories}>
                <div className={styles.addPetContentBoxSubCategories}>
                  <div className={styles.addPetContentBoxCategoriesName}>
                    TYPE
                  </div>
                  <div className={styles.addPetContentBoxCategoriesBox}>
                    <input
                      type="text"
                      placeholder="Dog | Cat"
                      name="pet_type"
                      value={formData.pet_type}
                      onChange={handelInput}
                    />
                  </div>
                </div>
                <div className={styles.addPetContentBoxSubCategories}>
                  <div className={styles.addPetContentBoxCategoriesName}>
                    GENDER
                  </div>
                  <div className={styles.addPetContentBoxCategoriesBox}>
                    <input placeholder="Male | Female" type="text"  name="pet_gender"
                      value={formData.pet_gender}
                      onChange={handelInput} />
                  </div>
                </div>
                <div className={styles.addPetContentBoxSubCategories}>
                  <div className={styles.addPetContentBoxCategoriesName}>
                    BREED
                  </div>
                  <div className={styles.addPetContentBoxCategoriesBox}>
                    <input type="text"  name="pet_breed"
                      value={formData.pet_breed}
                      onChange={handelInput} />
                  </div>
                </div>
                <div className={styles.addPetContentBoxSubCategories}>
                  <div className={styles.addPetContentBoxCategoriesName}>
                    DOB
                  </div>
                  <div className={styles.addPetContentBoxCategoriesBox}>
                  <input
                  type="date"
                  value={formData.pet_dob}
                      name="pet_dob"
                      onChange={handelInput} />
                  </div>
                </div>
                {/* <div className={styles.addPetContentBoxSubCategories}>
                   <div className={styles.addPetContentBoxCategoriesName}>
                    AGE
                  </div> 
                   <div className={styles.addPetContentBoxCategoriesBox}>
                    <div className={styles.addPetContentBoxCategoriesBoxGender}>
                      <input
                        placeholder="year"
                        className={styles.gender1}
                        type="text"
                        name="pet_age"
                      value={year}
                      onChange={(e) => handleChangeYear(setYear, e)}
                      />
                      <input
                        placeholder="month"
                        className={styles.gender2}
                        type="text"
                        value={month}
                      onChange={(e) => handleChangeMonth(setMonth, e)}
                      ></input>
                    </div>
                  </div> 
                </div> */}
                <div className={styles.addPetContentBoxSubCategories}>
                  <div className={styles.addPetContentBoxCategoriesName}>
                    NAME
                  </div>
                  <div className={styles.addPetContentBoxCategoriesBox}>
                    <input type="text" name="pet_name"
                      value={formData.pet_name}
                      onChange={handelInput} />
                  </div>
                </div>
              </div>
              <div className={styles.addPetContentBoxAddPetButtonConent}>
              {loading ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          ): <div className={styles.addPetContentBoxAddPetButton}  onClick={() => register(formData)}>
                  ADD PET
                </div>}
               
              </div>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className={styles.addPetImage}>
              <Image src={petImage} width="1119" height="588" />
            </div>
          </Grid>
        </Grid>
      </div>
      </> : 
      <center>
      <CircularProgress /></center>}
    </div>
  );
};

export default AddPet;
