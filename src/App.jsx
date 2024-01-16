import Education from "./components/Education";
import GeneralInfo from "./components/GeneralInfo";
import Output from "./components/Output";
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
    console.log(education);
  };

  return (
    <main className="flex flex-row gap-3">
      <div>
        <GeneralInfo onChange={handleGeneralInfoChange} />
        <Education onChange={handleEducationChange} />
      </div>
      <Output {...generalInfo} {...education} />
    </main>
  );
}

export default App;
