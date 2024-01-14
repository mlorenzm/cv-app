export default function Education({
  onSchoolNameChange,
  onTitleStudyChange,
  onDateStudyChange,
}) {
  const handleSchoolNameChange = (e) => {
    onSchoolNameChange(e.target.value);
  };
  const handleTitleStudyChange = (e) => {
    onTitleStudyChange(e.target.value);
  };

  const handleDateStudyChange = (e) => {
    onDateStudyChange(e.target.value);
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
        Date of Ending
        <input
          className="ml-2"
          type="date"
          name="dateOfStudy"
          onChange={handleDateStudyChange}
        ></input>
      </label>
    </section>
  );
}
