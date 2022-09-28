import Image from "next/image";
import styles from "./HomeGrooming.module.scss";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ExploreOurPack = (item) => {
//  console.log("ImgData",item);
 const data=item?.item;
//  console.log("ImgData",item?.item);
  return (
    <div>
  
     <div className={styles.tabContent}>
        <div className={styles.tabContentDetails}>
        {console.log(data?.service_web_icon)}
          <div className={styles.image}>
          
            <Image
              src={"https://drive.google.com/uc?id=14lpt9Ud789rutpyDvfjWTjalnqhnqGpq"}
             height="460"
             width="1240"
              alt="dog grooming at home service"
            />
          </div>
            <div className={styles.exploreContent}>
            <div className={styles.priceNote}>*Prices may varies as per breed</div>
            <div className={styles.titlePlan}>
              <div className={styles.title}> {data?.name}</div>
              <div className={styles.priceContent}>
                <span className={styles.priceRupee}>
                  <span className={styles.price}>{data?.cost}</span>
                </span>
                <span className={styles.small}><AccessTimeIcon />{data?.service_time} </span>
              </div>
            </div>
            <div className={styles.text}>
              <span className={styles.d_color}>What's Included</span>
              {data?.included.map(e =><div>{e}</div>)}
            </div>
            <div className={styles.planDescription}>
              <div className={styles.planDescriptionContent}>
                <div>
                 paragraph
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div> 
    </div>
  );
};
export default ExploreOurPack;
