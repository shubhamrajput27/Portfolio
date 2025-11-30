import { Timeline } from "./Timeline";

function Education() {
  const data = [
    {
      title: "2023 - Present",
      content: (
        <div>
          <h3 className="mb-3 text-xl font-bold text-primary md:text-2xl">
            Bachelor of Engineering (B.E.) - Computer Science & Engineering
          </h3>
          <p className="mb-2 text-base text-neutral-800 md:text-lg">
            <span className="font-bold">PES Institute of Technology and Management, Shimoga</span>
          </p>
          <p className="mb-6 text-base text-neutral-800 md:text-lg italic">
            Visvesvaraya Technological University, Belagavi
          </p>
          <p className="mb-4 text-base text-neutral-800 md:text-lg leading-relaxed">
            Pursuing Computer Science & Engineering with focus on Full-Stack Development, 
            Data Structures & Algorithms, DBMS, and Modern Web Technologies. 
            Building strong foundation in software engineering principles and practical application development.
          </p>
          <div className="flex gap-6 mt-6">
            <div>
              <p className="text-sm text-neutral-600 md:text-base">Status:</p>
              <p className="text-lg font-bold text-primary md:text-xl">Pursuing</p>
            </div>
            <div>
              <p className="text-sm text-neutral-600 md:text-base">Specialization:</p>
              <p className="text-lg font-bold text-primary md:text-xl">Computer Science</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h3 className="mb-3 text-xl font-bold text-primary md:text-2xl">
            Senior School Certificate Examination (Class XII)
          </h3>
          <p className="mb-6 text-base text-neutral-800 md:text-lg">
            <span className="font-bold">St Joseph's School, Shakti Nagar, Sonebhadra, UP</span>
          </p>
          <p className="mb-4 text-base text-neutral-800 md:text-lg leading-relaxed">
            Completed Higher Secondary Education with focus on Science stream. 
            Developed strong foundation in Mathematics, Physics, Chemistry and Computer Science, 
            which laid the groundwork for engineering studies.
          </p>
          <div className="flex gap-6 mt-6">
            <div>
              <p className="text-sm text-neutral-600 md:text-base">Year:</p>
              <p className="text-2xl font-bold text-primary md:text-3xl">2022</p>
            </div>
            <div>
              <p className="text-sm text-neutral-600 md:text-base">Stream:</p>
              <p className="text-lg font-bold text-primary md:text-xl">Science (PCM + CS)</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <h3 className="mb-3 text-xl font-bold text-primary md:text-2xl">
            Secondary School Examination (Class X)
          </h3>
          <p className="mb-6 text-base text-neutral-800 md:text-lg">
            <span className="font-bold">St Joseph's School, Shakti Nagar, Sonebhadra, UP</span>
          </p>
          <p className="mb-4 text-base text-neutral-800 md:text-lg leading-relaxed">
            Completed Secondary Education with strong performance across all subjects. 
            Developed early interest in technology and programming, which led to pursuing 
            Computer Science in higher education.
          </p>
          <div className="flex gap-6 mt-6">
            <div>
              <p className="text-sm text-neutral-600 md:text-base">Year:</p>
              <p className="text-2xl font-bold text-primary md:text-3xl">2020</p>
            </div>
            <div>
              <p className="text-sm text-neutral-600 md:text-base">Board:</p>
              <p className="text-lg font-bold text-primary md:text-xl">CBSE</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="education" className="relative w-full overflow-clip bg-cream">
      <Timeline data={data} />
    </section>
  );
}

export default Education;
