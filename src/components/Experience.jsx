export default function Experience({ onChange }) {
  const handleCompanyNameChange = (e) => {
    onChange("companyName", e.target.value);
  };
  const handlePositionTitleChange = (e) => {
    onChange("position", e.target.value);
  };
  const handleResponsabilityChange = (e) => {
    onChange("responsability", e.target.value);
  };
  const handleStartingDateJobChange = (e) => {
    onChange("startingDateJob", e.target.value);
  };
  const handleEndingDateJobChange = (e) => {
    onChange("endingDateJob", e.target.value);
  };

  return (
    <section className="flex flex-col gap-1">
      <label>
        Company name
        <input
          className="ml-2 shadow-md rounded px-1 py-1"
          type="text"
          name="name"
          onChange={handleCompanyNameChange}
        ></input>
      </label>
      <label>
        Position title
        <input
          className="ml-2 shadow-md rounded px-1 py-1"
          type="email"
          name="email"
          onChange={handlePositionTitleChange}
        ></input>
      </label>
      <label>
        Responsabilities for the job
        <input
          className="ml-2 shadow-md rounded px-1 py-1"
          type="tel"
          name="phone"
          onChange={handleResponsabilityChange}
        ></input>
      </label>
      <label>
        Starting date at company
        <input
          className="ml-2 shadow-md rounded px-1 py-1"
          type="month"
          name="startingDateOfStudy"
          onChange={handleStartingDateJobChange}
        ></input>
      </label>
      <label>
        Ending date at company
        <input
          className="ml-2 shadow-md rounded px-1 py-1"
          type="month"
          name="dateOfStudy"
          onChange={handleEndingDateJobChange}
        ></input>
      </label>
    </section>
  );
}
