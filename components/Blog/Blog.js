import Image from "next/image";
import styles from "./Blog.module.scss";
import DogAllergies from "../../public/groomingImages/Dog Allergies Know All About Them.jpg";
import DrySkin from "../../public/groomingImages/Here How You Can Prevent Dry Skin In Dogs.jpg";
import TickAndFleas from "../../public/groomingImages/Your Guide To Ticks & Fleas in Pets Symptoms, Treatment Care.jpg";
import Link from "next/link";
import axios from "axios";
import  { useEffect, useState } from "react";

const Blog = () => {
  

  const [blogData, setBlogData] = useState([])

  const blogApiCall = async() => {
    try{
      const blogBackend = "https://6u26pb8q2e.execute-api.us-east-1.amazonaws.com/blogs";
      const data = await axios.get(blogBackend);
      console.log("blog",data.data.blog_list)
      setBlogData(data.data.blog_list)
    
    }
    catch (e){
      console.log(e)
    }
    
  }
  useEffect(() => {
    blogApiCall();
  }, []);
  return (
    <div>
      <div className={styles.blogContent}>
        <div className={styles.blogHeading}>All Articles</div>
        <div className={styles.articleContent}>
       
        {
          blogData.map(item =>(
            <Link href="blog/1">
            <div className={styles.healthImage}>
            <div className={styles.postImage}>
            {console.log(item.blogImage)}
              <Image
                className={styles.imgResponsive}
                src={item.blogImage}
                width="431"
                height="232"
                alt="Dog Allergies - Know All About Them! "
                
              />
            </div>
            <div className={styles.healthText}>
              <h3 className={styles.mpPostTitle}>
                The Do’s And Don'ts Of Grooming Your Dog At Home
              </h3>
            </div>
          </div>
            </Link>
           
          ))
          
        }
       
        {/* </Link> */}
{/*           
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
                The Do’s And Don'ts Of Grooming Your Dog At Home
              </h3>
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
                The Do’s And Don'ts Of Grooming Your Dog At Home
              </h3>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
