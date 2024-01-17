import Input from "../Input";

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
        <Input
          type="text"
          name="schoolName"
          onChange={handleSchoolNameChange}
          placeholder="Universidad de La Laguna"
        />
      </label>
      <label>
        Title of Study
        <Input
          className="ml-2 shadow-md rounded px-1 py-1"
          type="email"
          name="email"
          onChange={handleTitleStudyChange}
          placeholder="Biology BSc."
        />
      </label>
      <label>
        Starting date
        <Input
          type="month"
          name="startingDateOfStudy"
          onChange={handleStartingDateStudyChange}
          placeholder="2015-9"
        />
      </label>
      <label>
        Ending date
        <Input
          type="month"
          name="dateOfStudy"
          onChange={handleEndingDateStudyChange}
          placeholder="2019-6"
        />
      </label>
    </section>
  );
}
