import Education from "./components/Education";
import GeneralInfo from "./components/GeneralInfo";
import Output from "./components/Output";
import Experience from "./components/Experience";
import { useState } from "react";
function App() {
  // GeneralInfo component State
  const [generalInfo, setGeneralInfo] = useState({
    name: "Mauro Lorenzo",
    email: "mlorenzo@example.com",
    phone: "922928000",
  });

  const handleGeneralInfoChange = (field, value) => {
    setGeneralInfo((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // Education component State
  const [education, setEducation] = useState({
    schoolName: "Universidad de La Laguna",
    titleStudy: "Biology BSc.",
    startingDateStudy: "2015-9",
    endingDateStudy: "2019-6",
  });

  const handleEducationChange = (field, value) => {
    setEducation((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // Experience component State
  const [experience, setExperience] = useState({
    companyName: "FICUS",
    position: "PhD. Student",
    responsability:
      "Developed a PhD thesis about preclinical studies for new drugs on multiple myeloma",
    startingDateJob: "2020-9",
    endingDateJob: "2025-6",
  });

  const handleExperienceChange = (field, value) => {
    setExperience((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  return (
    <main className="grid place-items-center w-screen">
      <div className="flex gap-12">
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">General information</h2>
          <GeneralInfo onChange={handleGeneralInfoChange} />
          <h2 className="text-xl font-semibold">Education</h2>
          <Education onChange={handleEducationChange} />
          <h2 className="text-xl font-semibold">Relevant experience</h2>
          <Experience onChange={handleExperienceChange} />
        </div>
        <Output {...generalInfo} {...education} {...experience} />
      </div>
    </main>
  );
}

export default App;
