import styles from "./Dashboard.module.scss";
import Image from "next/image";
import DogIcon from "../../public/DOGICON.png";
import Grid from "@mui/material/Grid";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import Card from "@mui/material/Card";
import Link from "next/link";
import {useState,useEffect} from "react";
import AccountInformation from "../AccountInformation/AccountInformation";
import { useRouter } from 'next/router';
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

const Dashboard = () => {
  let phoneValue;
  if (typeof window !== "undefined"){
     phoneValue = localStorage.getItem("phoneNumber") ?? "-";
     console.log("phonevalhelloe",phoneValue);
  }
 
  const [userData, setUserData] = useState({});
  const [isEditProfile, setIsEditProfile] = useState(false);
  const[petData, setPetData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userExist, setUserExist] = useState(false);
  const router = useRouter();

  const fetchUserData =async ()=>{
    const token =localStorage.getItem("token");
 var userUrl = {
      method: "get",
      url: "https://6u26pb8q2e.execute-api.us-east-1.amazonaws.com/user/details/check",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try{
      setLoading(true);
      const userData = await axios(userUrl);
      setUserData(userData.data.userData.user_details);
      setPetData(userData.data.userData.pet_details)
      setLoading(false);
    }
    catch (e){
      console.log(e)
    }
  }
  useEffect(() => {
     fetchUserData()
    if(!localStorage.getItem("token")){
      setUserExist(false);
      router.push("/")
    } 
    else{
      setUserExist(true);
    }
  }, []);
  return (
    <>
    {userExist ?<>{!isEditProfile?<div>
    <div className={styles.dashboardContainer}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div className={styles.userProfileContainer}>
            {/* <Link href="/account-information"> */}
              <div className={styles.editProfile} onClick={()=>{
                setIsEditProfile(true)
              }}>
                <EditIcon />
              </div>
            {/* </Link> */}
            <div className={styles.userProfiledetails}>
              <div className={styles.yourProfile}>Your Profile</div>
              <div className={styles.yourProfileDetails}>{userData?.name}</div>
              <div className={styles.yourProfileDetails}>+91 {phoneValue}</div>
              <div className={styles.yourProfileDetails}>{userData?.email}</div>
            </div>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className={styles.managePetContainer}>
            <div className={styles.managePetContainerHeading}>
              <div className={styles.ManagePets}>Manage Pets</div>
              <Link href="/add-newpet">
                <div className={styles.ManageAddPets}>
                  <div>Add Pets&nbsp;&nbsp;&nbsp;</div> <AddIcon />
                </div>
              </Link>
            </div>
            <div className={styles.petDetailsContainer}>
            {
              loading ? (
            <Box className="loading">
              <CircularProgress />
              <h4>Loading Products...</h4>
            </Box>
          ) : (
            <Grid container spacing={2} padding="1rem">
               {petData.length ? <>
                {petData?.map((data) => (
                  <Grid item xs={12} md={4} lg={4} key={data.pet_unique_id}>
                    <Card sx={{ maxWidth: 350, background: "#F5F5F5" }}>
                      <div className={styles.petDetailsCard}>
                        <div className={styles.petDetailsIconHeading}>
                          <div className={styles.petDetailsIcon}>
                            <Image src={DogIcon} width="50" height="50" />
                          </div>
                          <div className={styles.petDetailsHeading}>
                            <div className={styles.petDetailsName}>
                              {data.name}
                            </div>
                            <div className={styles.petDetailsTypeAge}>
                            {data.breed}
                            </div>
                            <div className={styles.petDetailsTypeAge}>
                            {data.dob} 
                            </div>
                          </div>
                        </div> 
                        {/* <div className={styles.petDetailsDottedLine}></div>
                      <div className={styles.petDetailsEditDeleteDate}>
                        <div className={styles.petDetailsEditDelete}>
                          <div className={styles.petDetailsEdit}>Edit</div>
                          <div className={styles.petDetailsDelete}>
                            Delete
                          </div>
                        </div>
                        <div className={styles.petDetailsDate}>
                          21 - August - 2022
                        </div>
                      </div> */}
                       </div>
                    </Card>
                  </Grid>
                ))}</> : ( <Box className="loading">
                    
                    <h4>You have not added any pets</h4>
                  </Box>)
               }
              </Grid> 
          ) 
          
            }
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  </div>:(<AccountInformation userData={userData} setIsEditProfile={setIsEditProfile}/>)}</> : <center><CircularProgress /></center>}
   
  </>
  );
};

export default Dashboard;
