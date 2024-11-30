import Image from "next/image";
import CustomCard from "../components/CustomCard";
import { useContext } from "react";
import { AppManagerContext } from "../contexts/AppManager";


const Intro = () => {
  const { setIsStarted } = useContext(AppManagerContext);

  return (
    <div className="intro-container">
      <div>
        <h1 className="title">TestCase <b>APP</b></h1>
        <h6 className="text-center">"Pixel Perfect"</h6>
      </div>
      <Image 
      src={"/img/cover.png"}
      layout={"fixed"}
      width={250}
      height={232}
      />
      <CustomCard 
      title={"Welcome to the TestCase APP!"}  
      onApprove={()=> setIsStarted(true)}
      approveText={"Start"}>
        We created this exercise to gain insights about your development skills.
      </CustomCard>
    </div>    
  );
}

export default Intro;