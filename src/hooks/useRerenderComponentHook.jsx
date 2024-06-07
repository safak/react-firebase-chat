import { useEffect, useState } from "react";

function useRerenderComponentHook() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      console.log("Я отображаюсь каждую секунду");
    }, 60000);

    return () => clearInterval(interval);
  }, []);
}

export default useRerenderComponentHook;
