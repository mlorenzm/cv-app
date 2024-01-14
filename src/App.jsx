import Education from "./components/Education";
import GeneralInfo from "./components/GeneralInfo";
import Output from "./components/Output";
import { useState } from "react";
function App() {
  // GeneralInfo component State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Education component State
  const [schoolName, setSchoolName] = useState("");
  const [titleStudy, setTitleStudy] = useState("");
  const [startingDateStudy, setStartingDateStudy] = useState("");
  const [endingDateStudy, setEndingDateStudy] = useState("");

  return (
    <main className="flex flex-row gap-3">
      <div>
        <GeneralInfo
          onNameChange={setName}
          onEmailChange={setEmail}
          onPhoneChange={setPhone}
        />
        <Education
          onSchoolNameChange={setSchoolName}
          onTitleStudyChange={setTitleStudy}
          onStartingDateStudyChange={setStartingDateStudy}
          onEndingDateStudyChange={setEndingDateStudy}
        />
      </div>
      <Output
        name={name}
        email={email}
        phone={phone}
        schoolName={schoolName}
        titleStudy={titleStudy}
        startingDateStudy={startingDateStudy}
        endingDateStudy={endingDateStudy}
      />
    </main>
  );
}

export default App;
