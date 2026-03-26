import { useState, useEffect } from "react";

const useCurrentTime = ()=>{

const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  // 使用useEffect来清除定时器
  useEffect(() => {
    const timeId = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(timeId);
    };
  }, []);

  return currentTime;

}

export default useCurrentTime;