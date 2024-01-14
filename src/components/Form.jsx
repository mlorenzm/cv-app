export default function Form({ onNameChange, onEmailChange, onPhoneChange }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleNameChange = (e) => {
    onNameChange(e.target.value);
  };
  const handleEmailChange = (e) => {
    onEmailChange(e.target.value);
  };

  const handlePhoneChange = (e) => {
    onPhoneChange(e.target.value);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
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
    </form>
  );
}
