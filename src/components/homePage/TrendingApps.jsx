import React, { use, useEffect, useState } from "react";
import HomePageCard from "../../assets/Ui/HomePageCard/HomePageCard";
import { HashLoader } from "react-spinners";
import UseApps from "../../Hooks/UseApps";
// import { useLoaderData } from "react-router";

// we have 3 way to fetch the api data

// way 1: use normal promise then use .then and use hook and use it like this
// const promisApps = fetch("/data.json").then((res) => res.json());

// way 2: use react router loader and useLoader then use it

// way 3: use useEffect with useState then use that

const TrendingApps = () => {
  // const apps = use(promisApps);
  // console.log(apps, "way 1");

  // const apps = useLoaderData();
  // console.log(apps, 'way 2');
  
  const {apps, spinner} = UseApps();
  console.log(apps, "way 3 out of useEffect");

  return (
    <div className="mt-5 sm:mt-10 container mx-auto">
      <div className="text-center py-5 space-y-4 ">
        <h1 className="text-3xl sm:text-5xl font-bold primary-linear text-transparent bg-clip-text">
          Tending Apps
        </h1>
        <p className="text-gray-400 mx-auto text-lg w-[90%] sm:w-[50%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus reprehenderit id, corrupti doloribus quasi magni
          perspiciatis distinctio, dicta ipsam, nesciunt nobis magnam
          blanditiis!
        </p>
      </div>

      <div className="">
        <h2 className="text-center container mx-auto sm:text-left font-bold">Apps: {apps.length}</h2>
        {spinner ? (
          <div className="mx-auto w-fit my-40">
            <HashLoader color="#ad46ff" />
          </div>
        ) : (
          <div className="grid px-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 mt-5">
            {apps.slice(0,8).map((app, index) => (
              <HomePageCard key={index} app={app}></HomePageCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingApps;
