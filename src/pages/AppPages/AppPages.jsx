import { HashLoader } from "react-spinners";
import HomePageCard from "../../assets/Ui/HomePageCard/HomePageCard";
import UseApps from "../../Hooks/UseApps";

const AppPages = () => {
  const {apps, spinner} = UseApps();
  console.log(apps, spinner);

  return (
    <div>
      <div className="text-center space-y-3 py-10">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p className="w-[50%] mx-auto text-gray-400 font-semibold text-lg">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="container mx-auto">
        {spinner ? (
          <div className="mx-auto w-fit my-40">
            <HashLoader color="#ad46ff" />
          </div>
        ) : (
          <div className="grid px-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 mt-5">
            {apps.map((app, index) => (
              <HomePageCard key={index} app={app}></HomePageCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppPages;
