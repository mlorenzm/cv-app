import Input from "../Input";

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
    <section className="flex flex-col gap-1">
      <label>
        Name
        <Input
          type="text"
          name="name"
          onChange={handleNameChange}
          placeholder="Mauro Lorenzo"
        />
      </label>
      <label>
        e-mail
        <Input
          type="email"
          name="email"
          onChange={handleEmailChange}
          placeholder="mlorenzo@example.com"
        />
      </label>
      <label>
        Phone number
        <Input
          type="tel"
          name="phone"
          onChange={handlePhoneChange}
          placeholder="922928000"
        />
      </label>
    </section>
  );
}
