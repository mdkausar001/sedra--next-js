import React from "react";

const newProjects = [
  {
    projectName: "Masar Makkah Underpass & Data Center",
    location: "Makkah",
    client: "BTC",
    scope: "BMS",
  },
  {
    projectName: "MISK Sport City",
    location: "Riyadh",
    client: "Marco",
    scope: "BMS",
  },
  {
    projectName: "IHG Intercontinental Hotel",
    location: "Abha",
    client: "BTC",
    scope: "GRMS",
  },
  {
    projectName: "Copthorne Hotel by Millennium",
    location: "Jeddah",
    client: "Golden Land",
    scope: "BMS, GRMS & Door Lock",
  },
  {
    projectName: "Double Tree Hotel by Hilton",
    location: "Jeddah",
    client: "HHC",
    scope: "BMS & Lighting Control",
  },
  {
    projectName: "Courtyard Hotel by Marriot",
    location: "Al Madinah",
    client: "Pro Art",
    scope: "BMS & GRMS",
  },
];

const projectList = [
  { projectName: "Massar", city: "Makkah", sector: "Commercial" },
  { projectName: "MISK Sport City", city: "Riyadh", sector: "Commercial" },
  { projectName: "Mohamadiah Avenue", city: "Jeddah", sector: "Commercial" },
  {
    projectName: "Industrial City Market",
    city: "Jeddah",
    sector: "Commercial",
  },
  {
    projectName: "Oppolia showrooms",
    city: "Jeddah / Riyadh",
    sector: "Commercial",
  },
  { projectName: "Plex Sport City", city: "Jeddah", sector: "Commercial" },
  {
    projectName: "Haya Abdulatif Jameel",
    city: "Jeddah",
    sector: "Commercial",
  },
  { projectName: "Reza Office", city: "Jeddah", sector: "Commercial" },
  { projectName: "Ibdaat 5 towers", city: "Riyadh", sector: "Commercial" },
  { projectName: "Azdan Tower", city: "Riyadh", sector: "Commercial" },
  { projectName: "Tameer Tower", city: "Riyadh", sector: "Commercial" },
  { projectName: "Goudia Tower", city: "Riyadh", sector: "Commercial" },
  { projectName: "Sameem Tower", city: "Riyadh", sector: "Commercial" },
  { projectName: "Nahda Academy school", city: "Jeddah", sector: "Education" },
  { projectName: "Tatweer Schools - TBC", city: "Jeddah", sector: "Education" },
  { projectName: "Court Of Appeal", city: "Jeddah", sector: "Governmental" },
  {
    projectName: "King Abdullah Airport",
    city: "Jeddah",
    sector: "Governmental",
  },
  { projectName: "King Fisal Hospital", city: "Jeddah", sector: "Hospital" },
  { projectName: "Riyadh Hospital", city: "Jeddah", sector: "Hospital" },
  { projectName: "IHG Intercontinental", city: "Abha", sector: "Hotel" },
  { projectName: "Copthorne by Millennium", city: "Jeddah", sector: "Hotel" },
  { projectName: "Double Tree by Hilton", city: "Jeddah", sector: "Hotel" },
  { projectName: "Courtyard By Marriot", city: "Al Madina", sector: "Hotel" },
  { projectName: "Weekend Hotel", city: "Jeddah", sector: "Hotel" },
  { projectName: "Rasd Hotel", city: "Jeddah", sector: "Hotel" },
  { projectName: "Makkarem By DUR", city: "Al Madinah", sector: "Hotel" },
  { projectName: "Nova By Rotana", city: "Riyadh", sector: "Hotel" },
  { projectName: "Afrina HQ", city: "Jeddah", sector: "Office" },
  { projectName: "Schnider Electric Branch", city: "Jeddah", sector: "Office" },
  { projectName: "red sea festival", city: "Jeddah", sector: "Office" },
  { projectName: "OCC Wavers", city: "Jeddah", sector: "Office" },
  { projectName: "Kholoud trading", city: "Riyadh", sector: "Office" },
  { projectName: "Bawazeer Trading", city: "Jeddah", sector: "Office" },
  { projectName: "Khaled Juffali", city: "Jeddah", sector: "Residential" },
  {
    projectName: "Abdullah Saleh Kamel",
    city: "Jeddah",
    sector: "Residential",
  },
  { projectName: "Dr.Lama Suliman", city: "Jeddah", sector: "Residential" },
  { projectName: "Abu Dawood", city: "Jeddah", sector: "Residential" },
  { projectName: "Chken", city: "Jeddah", sector: "Restaurant" },
];

const ProjectList = () => {
  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
        List of Projects
      </h1>
      <div className="overflow-auto rounded-lg shadow">
        <table className="min-w-full bg-white text-left md:w-8/12">
          <thead>
            <tr className="bg-gray-100 text-sm uppercase text-gray-800 dark:text-white">
              <th className="px-4 py-3">Project Name</th>
              <th className="px-4 py-3">City</th>
              <th className="px-4 py-3">Sector</th>
            </tr>
          </thead>
          <tbody>
            {projectList.map((project, index) => (
              <tr
                key={index}
                className="border-b text-gray-800 transition duration-150 hover:bg-gray-50 dark:text-white"
              >
                <td className="px-4 py-3">{project.projectName}</td>
                <td className="px-4 py-3">{project.city}</td>
                <td className="px-4 py-3">{project.sector}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectList;
