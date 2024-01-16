export default function Output({
  name,
  email,
  phone,
  schoolName,
  titleStudy,
  startingDateStudy,
  endingDateStudy,
  companyName,
  position,
  responsability,
  startingDateJob,
  endingDateJob,
}) {
  return (
    <div className="border shadow-md flex-1 px-4 py-8">
      <div>
        <h1 className="text-3xl font-semibold text-center">{name}</h1>
        {email} <br />
        {phone}
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-center">Education</h2>
        <div className="flex flex-row gap-5">
          {startingDateStudy} — {endingDateStudy}
          <div>
            <div className="font-semibold">{schoolName}</div>
            {titleStudy}
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-center">
          Relevant work experience
        </h2>
        <div className="flex flex-row gap-5">
          {startingDateJob} — {endingDateJob} <br />
          <div>
            {companyName}
            {position}
            {responsability}
          </div>
        </div>
      </div>
    </div>
  );
}
