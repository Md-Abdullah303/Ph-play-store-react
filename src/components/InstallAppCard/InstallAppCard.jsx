import React, { useContext } from "react";
import downloadImg from "../../assets/images/icon-downloads.png";
import ratingImg from "../../assets/images/icon-ratings.png";
import { InstallAppsContext } from "../../context/InstallContextProvider";

const InstallAppCard = ({ app }) => {
    const {installedApp , setInstalledApp} = useContext(InstallAppsContext)
    const handleDlt = (deletedApp)=>{
        const newFilterApps = installedApp.filter(app=> app.id !== deletedApp.id );
        setInstalledApp(newFilterApps);
    }

  const {
    title,
    size,
    reviews,
    ratings,
    ratingAvg,
    image,
    downloads,
    description,
    companyName,
  } = app;
  return (
    <div className="bg-amber-100 flex items-center gap-10 justify-between rounded-lg py-3 px-6">
      <div className="flex items-center gap-3">
        <div className=" bg-base-200 p-5 rounded-xl">
          <img className="w-20" src={image} alt={title} />
        </div>
        <div className="">
          <h1 className="text-2xl font-bold">{title}</h1>
          <div className="flex font-medium items-center gap-6 mt-4">
            <div className="flex items-center gap-1">
              <img className="w-4" src={downloadImg} alt="" />
              <h1>{downloads}</h1>
            </div>
            <div className="flex items-center gap-1">
              <img className="w-4" src={ratingImg} alt="" />
              <h1>{ratingAvg}</h1>
            </div>
            <h1>{size} MB</h1>
          </div>
        </div>
      </div>
      <button onClick={()=> handleDlt(app)} className="btn btn-success text-white ">Uninstall</button>
    </div>
  );
};

export default InstallAppCard;
