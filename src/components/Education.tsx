import { GiUpgrade } from "react-icons/gi";

const education = [
  {
    course: "M.Sc in Software Engineering",
    university: "Kingston University",
    location: "London",
    grade: "7.5",
    endDate: "Jan 2024",
    startDate: "Jan 2023",
    details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam dolorem molestiae, eligendi fugit commodi sed ea nesciunt enim, tenetur aspernatur a laboriosam voluptate. Mollitia illo aperiam inventore dolorem consectetur.`,
  },
  {
    course: "B.Tech in Computer Science",
    university: "Lovely Professional University",
    location: "Punjab",
    grade: "7.14",
    endDate: "Aug 2021",
    startDate: "Sept 2017",
    details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam dolorem molestiae, eligendi fugit commodi sed ea nesciunt enim, tenetur aspernatur a laboriosam voluptate. Mollitia illo aperiam inventore dolorem consectetur.`,
  },
];
export default function Education() {
  return (
    <>
      <div>
        <ol>
          {education.map(
            ({
              course,
              university,
              location,
              grade,
              endDate,
              startDate,
              details,
            }) => (
              <li className="mb-12" key={university}>
                <div className="relative grid sm:grid-cols-8 sm:gap-8 md:gap-4">
                  <header className="uppercase z-10 mb-2 mt-1 text-xs font-semibold tracking-wide text-slate-500 sm:col-span-2">
                    {startDate}
                    <span className="mx-1">-</span>
                    {endDate}
                  </header>
                  <div className="z-10 sm:col-span-6">
                    {/* Course Name */}
                    <h3 className="font-medium leading-snug text-slate-200">
                      {course}
                    </h3>
                    {/* University / Location */}
                    <h4 className="text-slate-500 gap-1 flex capitalize">
                      {university}
                      <span>-</span>
                      <span>{location}</span>
                    </h4>
                    {/* Description */}
                    <p className="mt-2 text-sm leading-normal">{details}</p>
                    {/* Grade */}
                    <p className="mt-2 inline-flex items-center gap-2">
                      <GiUpgrade />
                      {grade}
                    </p>
                  </div>
                </div>
              </li>
            )
          )}
        </ol>
      </div>
    </>
  );
}
