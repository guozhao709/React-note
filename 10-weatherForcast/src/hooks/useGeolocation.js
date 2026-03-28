import { useState } from "react";

const useGeolocation = () => {
  const [buttonText, setButtonText] = useState("Get CurrentWeather");
  const [position, setPosition] = useState(null);

  const getPosition = async () => {
    return new Promise((resolve, reject) => {
      const geolocation = navigator.geolocation;

      setButtonText("Loading...");

      if (geolocation) {
        geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;

            setPosition({ latitude, longitude });
            resolve({ latitude, longitude });
            setButtonText("Get WeatherForecast");
            
          },
          (error) => {
            reject(error.message);
          },
        );
      } else {
        reject("请检查浏览器版本");
      }
    });
  };

  return { getPosition, buttonText, position };
};

export default useGeolocation;

// import { useEffect } from 'react';
// import { useState } from 'react';

// export default function () {
//   const [position, setPosition] = useState(null);

//   function getPosition() {
//     const geolocation = navigator.geolocation;

//     if (!geolocation) {
//       alert('Geolocation is not supported by your browser');
//       return;
//     }

//     geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;

//         setPosition({ latitude, longitude });
//       },
//       (error) => {
//         alert(error.message);
//         console.error(error);
//       }
//     );
//   }

//   useEffect(() => {
//     getPosition();
//   }, []);

//   return position;
// }
