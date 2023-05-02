const WhatSetsInstynApartCanSetYouPart = () => {
  return (
    <div className="containerCenter   md:px-20 md:pb-10 py-10 mx-3">
      <h1 className="text-ownDarkGreen col-12 md:text-4xl text-[32px]  text-alignment md:self-start mb-10 font-ClashDisplayLight font-semibold">
        What Sets INSTYN Apart Can Set You Apart
      </h1>
      <div className="grid md:grid-cols-4 gap-4  md:gap-5">
        <div className="shadow-lg rounded-lg bg-white p-4 hover:scale-105 duration-1000 flex flex-col  items-center">
          <div className="icon  mb-[61px] mt-2">
            <img src="/app/images/BulbIcon.svg" alt="image" />
          </div>
          <h3 className="text-ownDarkGreen text-left font-ClashDisplayLight font-semibold mb-2 text-lg">
            The Parent Student Teacher Tech-Led Academics Program (PSTA)
          </h3>
          <p className="font-ClashDisplayLight text-sm text-left">
            Instyn's tech platform enables collaboration among parents,
            students, teachers, and academics for holistic student development.
          </p>
        </div>
        <div className="shadow-lg rounded-lg bg-white p-4 hover:scale-105 duration-1000 flex flex-col  items-center">
          <div className="icon mb-[61px] mt-2">
            <img src="/app/images/LeaderIcon.svg" alt="image" />
          </div>
          <h3 className="text-ownDarkGreen font-semibold mb-2 text-left self-start font-ClashDisplayLight text-lg">
            The School Leader Support Program (SLS)
          </h3>
          <p className="font-ClashDisplayLight text-sm text-left">
            Instyn provides comprehensive support to school leaders, including
            admissions strategy, growth planning, revenue diversification, and
            performance tracking to ensure sustained success.
          </p>
        </div>
        <div className="shadow-lg rounded-lg bg-white p-4 flex hover:scale-105 duration-1000 flex-col  items-center">
          <div className="icon mb-[61px] mt-2">
            {/* <i className="flaticon-computer"></i> */}
            <img src="/app/images/NoteBookIcon.svg" alt="image" />
          </div>
          <h3 className="text-ownDarkGreen text-left font-semibold mb-2 self-start font-ClashDisplayLight text-lg">
            A STEAM-Based Curriculum
          </h3>
          <p className="font-ClashDisplayLight text-sm text-left">
            Instyn's STEAM curriculum empowers students with hands-on experience
            and 21st-century skills through an integrated platform with lesson
            plans, assessments, and lab kits.
          </p>
        </div>
        <div className="shadow-lg rounded-lg bg-white p-4 flex hover:scale-105 duration-1000 flex-col  items-center">
          <div className="icon mb-[61px] mt-2">
            <img src="/app/images/BoardIcon.svg" alt="image" />
          </div>
          <h3 className="text-ownDarkGreen text-left mb-2 self-start font-ClashDisplayLight font-semibold text-lg">
            Valuable Tracking Systems - LMS
          </h3>
          <p className="font-ClashDisplayLight text-sm text-left">
            Keep track of your school demographic insights to make improvements
            while also keeping track of individual students and overall school
            performance, via our elearning platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatSetsInstynApartCanSetYouPart;
