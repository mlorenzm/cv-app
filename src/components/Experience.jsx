import Input from "../Input";
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
        <Input
          type="text"
          name="name"
          onChange={handleCompanyNameChange}
          placeholder="Company"
        />
      </label>
      <label>
        Position title
        <Input
          type="email"
          name="email"
          onChange={handlePositionTitleChange}
          placeholder="Position"
        />
      </label>
      <label>
        Responsabilities for the job
        <Input
          type="text"
          textArea={true}
          name="phone"
          onChange={handleResponsabilityChange}
          placeholder="Responsabilities"
        />
      </label>
      <label>
        Starting date at company
        <Input
          type="month"
          name="startingDateOfStudy"
          onChange={handleStartingDateJobChange}
        />
      </label>
      <label>
        Ending date at company
        <Input
          type="month"
          name="dateOfStudy"
          onChange={handleEndingDateJobChange}
        />
      </label>
    </section>
  );
}
