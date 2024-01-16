export default function GeneralInfo({ onChange }) {
  const handleNameChange = (e) => {
    onChange("name", e.target.value);
  };
  const handleEmailChange = (e) => {
    onChange("email", e.target.value);
  };

  const handlePhoneChange = (e) => {
    onChange("phone", e.target.value);
  };

  return (
    <section className="flex flex-col">
      <label>
        Name
        <input
          className="ml-2"
          type="text"
          name="name"
          onChange={handleNameChange}
        ></input>
      </label>
      <label>
        e-mail
        <input
          className="ml-2"
          type="email"
          name="email"
          onChange={handleEmailChange}
        ></input>
      </label>
      <label>
        Phone number
        <input
          className="ml-2"
          type="tel"
          name="phone"
          onChange={handlePhoneChange}
        ></input>
      </label>
    </section>
  );
}
