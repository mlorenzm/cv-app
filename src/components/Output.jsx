export default function Output({
  name,
  email,
  phone,
  //   schoolName,
  //   titleStudy,
  //   startingDateStudy,
  //   endingDateStudy,
}) {
  return (
    <div>
      <div>
        {name}, {email}, {phone}
      </div>
      {/* <div>
        {schoolName} <br />
        {titleStudy} <br />
        {startingDateStudy} — {endingDateStudy} <br />
      </div> */}
    </div>
  );
}
