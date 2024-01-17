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
    <div className="border shadow-md w-[1024px]">
      <header className="flex content-center flex-col bg-slate-700 text-white px-4 py-8 gap-3 items-center">
        <h1 className="text-3xl font-semibold text-center">{name}</h1>
        <div className="text-center text-xl flex gap-10">
          <div>{email}</div>
          <div>{phone}</div>
        </div>
      </header>
      <div className="mb-5">
        <h2 className="text-2xl font-semibold text-center bg-slate-100 py-1">
          Education
        </h2>
        <div className="flex flex-row gap-5 mt-2 mx-4">
          {startingDateStudy} — {endingDateStudy}
          <div>
            <div className="font-semibold">{schoolName}</div>
            {titleStudy}
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-center bg-slate-100 py-1">
          Work experience
        </h2>
        <div className="flex flex-row gap-5 mt-2 mx-4">
          {startingDateJob} — {endingDateJob} <br />
          <div>
            <div className="font-semibold">
              {companyName} <br />
            </div>
            <div className=" break-words ">
              {position} <br />
            </div>
            <div className=" break-all max-w-[100%]">
              {responsability} <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
