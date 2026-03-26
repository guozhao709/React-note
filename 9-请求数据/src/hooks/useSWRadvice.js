import useSWR from "swr";

const useSWRadvice = () => {
  const adviceURL = "https://api.adviceslip.com/advice";
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, isLoading, mutate: getAdvice } = useSWR(adviceURL, fetcher);

  // 用可选链操作符防止 advice 为空而导致的错误
  const advice = data?.slip?.advice;

  return { advice, isLoading, getAdvice };
};

export default useSWRadvice;
