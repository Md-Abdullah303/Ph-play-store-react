import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { InstallAppsContext } from "../../context/InstallContextProvider";
import UseApps from "../../Hooks/UseApps";

const Dashboard = () => {
    const {installedApp} = useContext(InstallAppsContext)
    const {apps} = UseApps();
    let UninstalledApps = apps.length - installedApp.length;
    console.log(apps, 'form apps deashborad');
  const data = [
    { name: "Installed", value: installedApp.length, fill: "#0088FE" },
    { name: "Uninstalled", value: UninstalledApps, fill: "#FF8042" },
  ];
  return (
    <div className="flex container mx-auto border my-10 shadow-sm border-gray-400 rounded-xl items-center flex-col gap-10 justify-center py-20">
        <h1 className="text-3xl font-bold text-center">Installed and Uninstalled Apps</h1>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend></Legend>
        <Tooltip></Tooltip>
      </PieChart>
    </div>
  );
};

export default Dashboard;
