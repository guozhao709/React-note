// import { useState, useEffect } from "react";
import useSWR from "swr";

function App() {

  // const adviceURL = 'https://api.adviceslip.com/advice';
  // const [advice, setAdvice] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  // const getAdvice = async () =>{
  //   setIsLoading(true);
  //   const response = await fetch(adviceURL);
  //   const data = await response.json();
  //   setAdvice(data.slip.advice);
  //   setIsLoading(false);
  // }

  // useEffect(() =>{
  //   // 使用 IIFE 避免在 effect 中直接同步调用 setState
  //   (async () => {
  //     await getAdvice();
  //   })();
  // }, []);


  // return (
  //   <main>
  //     <h1>Advice App</h1>
  //     <p>{isLoading ? "Loading..." : advice}</p>
  //     <button disabled={isLoading} onClick={getAdvice}>Get Advice</button>
  //   </main>
  // );

  // 使用SWR
   const adviceURL = 'https://api.adviceslip.com/advice';
   const fetcher = (...args) => fetch(...args).then(res => res.json());

   const { data, isLoading, mutate: getAdvice } = useSWR(adviceURL, fetcher);

   // 用可选链操作符防止 advice 为空而导致的错误
  const advice = data?.slip?.advice;
   
  return (
    <main>
      <h1>Advice App</h1>
      {/* // 防止因 advice 为空而导致的错误 */}
      <p>{advice || "Loading..."}</p>
      <button disabled={isLoading} onClick={getAdvice}>Get Advice</button>
    </main>
  );

}
export default App;
