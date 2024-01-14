export default function Output({
  name,
  email,
  phone,
  schoolName,
  titleStudy,
  dateStudy,
}) {
  return (
    <div>
      <div>
        {name}, {email}, {phone}
      </div>
      <div>
        {schoolName} <br />
        {titleStudy} <br />
        {dateStudy} <br />
      </div>
    </div>
  );
}
