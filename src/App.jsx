import Education from "./components/Education";
import GeneralInfo from "./components/GeneralInfo";
import Output from "./components/Output";
import { useState } from "react";
function App() {
  // GeneralInfo component State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

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
    console.log(generalInfo);
  };

  // Education component State
  const [schoolName, setSchoolName] = useState("");
  const [titleStudy, setTitleStudy] = useState("");
  const [startingDateStudy, setStartingDateStudy] = useState("");
  const [endingDateStudy, setEndingDateStudy] = useState("");

  return (
    <main className="flex flex-row gap-3">
      <div>
        <GeneralInfo onChange={handleGeneralInfoChange} />
        <Education
          onSchoolNameChange={setSchoolName}
          onTitleStudyChange={setTitleStudy}
          onStartingDateStudyChange={setStartingDateStudy}
          onEndingDateStudyChange={setEndingDateStudy}
        />
      </div>
      <Output {...generalInfo} />
    </main>
  );
}

export default App;
