import Link from "next/link";

const baseUrl = "http://internal.ramtejajakka.com";

const pageData = {
  cards: [
    {
      image: "/app/images/logo.svg",
      url: baseUrl + "/sws-app",
      title: "SWS App",
    },
    {
      image: "/app/images/logo.svg",
      url: baseUrl + "/sales-app",
      title: "Sales App",
    },
    {
      image: "/app/images/logo.svg",
      url: baseUrl + "/sws-dashboard",
      title: "SWS Dashboard",
    },
    {
      image: "/app/images/logo.svg",
      url: baseUrl + "/pmj-locker",
      title: "Pmj Locker",
    },
    {
      image: "/app/images/logo.svg",
      url: baseUrl + "/sales-dashboard",
      title: "Sales Dashboard",
    },
  ],
};

const WhatSetsInstynApartCanSetYouPart = () => {
  return (
    <div className="containerCenter bg-[#400120]  h-screen md:px-20 md:pb-10 py-10 mx-3 flex flex-col justify-between">
      <div>
        <h1 className="text-ownDarkGreen col-12 md:text-4xl text-[32px] text-center text-alignment md:self-start mb-10 font-ClashDisplayLight font-semibold">
          PMJ APPS
        </h1>

        <div className="grid md:grid-cols-4 gap-4 pb-10 md:gap-5">
          {pageData.cards.map((items) => (
            <Link href={items.url} target="_blank">
              <div className="shadow-lg rounded-lg bg-white p-4 hover:scale-105 duration-1000 flex flex-col  items-center">
                <div className="icon mt-2">
                  <img src={items.image} alt="image" />
                </div>
                <h6 className="text-amber-900 col-12 text-alignment md:self-start font-ClashDisplayLight text-2xl text-center w-full font-semibold">
                  {items.title}
                </h6>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-between w-full">
        <a
          href="https://techarion.com"
          className="text-ownDarkGreen col-12 text-2xl text-alignment md:self-start mb-10 font-ClashDisplayLight font-semibold self-end"
        >
          <h6>Powered By Tech Arion</h6>
        </a>

        <a href="https://techarion.com/contact-us">
          <h6 className="text-ownDarkGreen col-12 text-2xl text-alignment md:self-start mb-10 font-ClashDisplayLight font-semibold">
            Help!!! Click Me
          </h6>
        </a>
      </div>
    </div>
  );
};

export default WhatSetsInstynApartCanSetYouPart;
