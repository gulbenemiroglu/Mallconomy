import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export const AppManagerContext = createContext();

const AppManager = ({children}) => {
    const router = useRouter();
    const {pathname} = router;
    const [completedItems, setCompletedItems] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [isStarted, setIsStarted] = useState(false);

    useEffect(()=>{
        if(isStarted && pathname === '/'){
            router.push('home')
        }

        if(!isStarted && pathname !== '/'){
            router.push('/')
        }
    },[pathname, isStarted])
    
    return (
        <AppManagerContext.Provider 
        value={{
            isStarted,
            setIsStarted,
            currentScore,
            setCurrentScore,
            completedItems,
            setCompletedItems
        }}> 
        {isStarted ? <Navbar/> : null}
            {children}
        </AppManagerContext.Provider>
        )
}


export default AppManager;