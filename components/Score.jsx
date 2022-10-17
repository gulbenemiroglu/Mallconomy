import { useRouter } from "next/router";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { AppManagerContext } from "../contexts/AppManager";

const Score = () => {
  const router = useRouter();
  const {currentScore} = useContext(AppManagerContext);
  return (
    <Button variant="dark" className="score-btn" onClick={()=> router.push('myPoints')}>
        <h6 className="text-white">Points: <b>{currentScore}</b></h6>
    </Button>
  );
};

export default Score;