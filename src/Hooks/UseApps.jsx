import React, { useEffect, useState } from "react";

const UseApps = () => {
  const [apps, setApps] = useState([]);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    const fetchApps = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      //   console.log(data, "way 3");
      setApps(data);
      setSpinner(false);
    };
    fetchApps();
  }, []);

  return { apps, spinner };
};

export default UseApps;
