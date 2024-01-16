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
    <section className="flex flex-col gap-1">
      <label>
        School Name
        <input
          className="ml-2 shadow-md rounded px-1 py-1"
          type="text"
          name="schoolName"
          onChange={handleSchoolNameChange}
          placeholder="Universidad de La Laguna"
        ></input>
      </label>
      <label>
        Title of Study
        <input
          className="ml-2 shadow-md rounded px-1 py-1"
          type="email"
          name="email"
          onChange={handleTitleStudyChange}
          placeholder="Biology BSc."
        ></input>
      </label>
      <label>
        Starting date
        <input
          className="ml-2 shadow-md rounded px-1 py-1"
          type="month"
          name="startingDateOfStudy"
          onChange={handleStartingDateStudyChange}
          placeholder="2015-9"
        ></input>
      </label>
      <label>
        Ending date
        <input
          className="ml-2 shadow-md rounded px-1 py-1"
          type="month"
          name="dateOfStudy"
          onChange={handleEndingDateStudyChange}
          placeholder="2019-6"
        ></input>
      </label>
    </section>
  );
}
