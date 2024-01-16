export default function Education({ onChange }) {
  const handleSchoolNameChange = (e) => {
    onChange("schoolName", e.target.value);
  };
  const handleTitleStudyChange = (e) => {
    onChange("titleStudy", e.target.value);
  };

  const handleStartingDateStudyChange = (e) => {
    onChange("startingDateStudy", e.target.value);
  };
  const handleEndingDateStudyChange = (e) => {
    onChange("endingDateStudy", e.target.value);
  };
  return (
    <section className="flex flex-col">
      <label>
        School Name
        <input
          className="ml-2"
          type="text"
          name="schoolName"
          onChange={handleSchoolNameChange}
        ></input>
      </label>
      <label>
        Title of Study
        <input
          className="ml-2"
          type="email"
          name="email"
          onChange={handleTitleStudyChange}
        ></input>
      </label>
      <label>
        Starting date
        <input
          className="ml-2"
          type="month"
          name="startingDateOfStudy"
          onChange={handleStartingDateStudyChange}
        ></input>
      </label>
      <label>
        Ending date
        <input
          className="ml-2"
          type="month"
          name="dateOfStudy"
          onChange={handleEndingDateStudyChange}
        ></input>
      </label>
    </section>
  );
}
