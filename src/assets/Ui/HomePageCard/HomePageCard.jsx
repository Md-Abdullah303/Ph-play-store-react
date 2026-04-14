import React from "react";
import DownloadImg from "../../images/icon-downloads.png";
import RatingImg from "../../images/icon-ratings.png";
import { NavLink } from "react-router";

const HomePageCard = ({ app }) => {
  //   console.log(app);
  const { image, title, downloads, ratingAvg } = app;
  return (
    <NavLink to={`/apps/${app.id}`} className="card bg-base-100 shadow-sm">
      <figure>
        <img className="h-40 p-3" src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-1 font-medium bg-base-200 py-1 px-2  rounded-lg">
            <img className="w-3" src={DownloadImg} alt="downloading img" />
            {downloads}
          </div>
          <div className="flex items-center gap-1 font-medium bg-amber-100 py-1 px-2 rounded-lg">
            <img className="w-3" src={RatingImg} alt="downloading img" />
            {ratingAvg}
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default HomePageCard;
