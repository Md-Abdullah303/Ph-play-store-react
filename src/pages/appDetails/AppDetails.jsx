import React from "react";
import UseApps from "../../Hooks/UseApps";
import { useParams } from "react-router";
import { HashLoader } from "react-spinners";
import downloadImg from '../../assets/images/icon-downloads.png'
import ratingImg from '../../assets/images/icon-ratings.png'
import reviewImg from '../../assets/images/icon-review.png'
import Rating from "../../components/Rating/Rating";

const AppDetails = () => {
  const { apps, spinner } = UseApps();
  const { id } = useParams();

  const expectedApp = apps.find((app) => app.id == id);
//   console.log(expectedApp);

  // console.log(apps, spinner, "from app Details page");
  // console.log('id', id);

  if (spinner) {
    return (
      <div className="mx-auto h-[70vh] w-fit my-40">
        <HashLoader color="#ad46ff" />
      </div>
    );
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
  } = expectedApp;

  return (
    <div className="container mx-auto">
      <div className="flex items-center bg-base-200 py-5 my-10 rounded-xl gap-10">
        <div className="w-150 flex items-center justify-center">
          <img className="w-full rounded-lg" src={image} alt={title} />
        </div>
        <div className="space-y-3.5 w-full">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="text-gray-400 text-lg">Developed by <span className="primary-linear text-transparent bg-clip-text font-semibold">{companyName}</span></p>
          <hr className="text-gray-600 py-2"/>
          <div className="flex items-center gap-7">
            <div className="flex flex-col items-start gap-1">
              <img src={downloadImg} alt="downloadImg" />
              <p>Downloads</p>
              <h2>{downloads}</h2>
            </div>
            <div className="flex flex-col items-start gap-1">
              <img src={ratingImg} alt="ratingAvg" />
              <p>Average Ratings</p>
              <h2>{ratingAvg}</h2>
            </div>
            <div className="flex flex-col items-start gap-1">
              <img src={reviewImg} alt="reviewImg" />
              <p>Total Reviews</p>
              <h2>{reviews}</h2>
            </div>
          </div>
          <button className="btn btn-success text-white">Install Now ({size} MB)</button>
        </div>
      </div>
      <Rating ratings={ratings}></Rating>
      <div className="">
        <p className="text-lg w-[70%] mx-auto"><span className="text-xl font-bold">Description:</span> <br />{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
