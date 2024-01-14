export default function Education({
  onSchoolNameChange,
  onTitleStudyChange,
  onStartingDateStudyChange,
  onEndingDateStudyChange,
}) {
  const handleSchoolNameChange = (e) => {
    onSchoolNameChange(e.target.value);
  };
  const handleTitleStudyChange = (e) => {
    onTitleStudyChange(e.target.value);
  };

  const handleStartingDateStudyChange = (e) => {
    onStartingDateStudyChange(e.target.value);
  };
  const handleEndingDateStudyChange = (e) => {
    onEndingDateStudyChange(e.target.value);
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
