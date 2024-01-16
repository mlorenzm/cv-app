import Education from "./components/Education";
import GeneralInfo from "./components/GeneralInfo";
import Output from "./components/Output";
import Experience from "./components/Experience";
import { useState } from "react";
function App() {
  // GeneralInfo component State
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleGeneralInfoChange = (field, value) => {
    setGeneralInfo((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // Education component State
  const [education, setEducation] = useState({
    schoolName: "",
    titleStudy: "",
    startingDateStudy: "",
    endingDateStudy: "",
  });

  const handleEducationChange = (field, value) => {
    setEducation((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // Experience component State
  const [experience, setExperience] = useState({
    companyName: "",
    position: "",
    responsability: "",
    startingDateJob: "",
    endingDateJob: "",
  });

  const handleExperienceChange = (field, value) => {
    setExperience((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  return (
    <main className="flex flex-row gap-12 justify-around">
      <div className="flex flex-col gap-6">
        <h1>General information</h1>
        <GeneralInfo onChange={handleGeneralInfoChange} />
        <h1>Education</h1>
        <Education onChange={handleEducationChange} />
        <h1>Relevant experience</h1>
        <Experience onChange={handleExperienceChange} />
      </div>
      <Output {...generalInfo} {...education} {...experience} />
    </main>
  );
}

export default App;
