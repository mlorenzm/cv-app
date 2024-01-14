import GeneralInfo from "./components/GeneralInfo";
import Output from "./components/Output";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <main className="flex flex-row gap-3">
      <GeneralInfo
        onNameChange={setName}
        onEmailChange={setEmail}
        onPhoneChange={setPhone}
      />
      <Output name={name} email={email} phone={phone} />
    </main>
  );
}

export default App;
