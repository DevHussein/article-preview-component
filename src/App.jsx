import React from "react";
function App() {
  const [show, setShow] = React.useState(false);
  const [showDesktop, setShowDesktop] = React.useState(false);
  return (
    <main className="bg-light-grayish-blue max-w-screen-mobile desktop:max-w-screen-desktop min-h-screen pt-[4.625rem] px-6 desktop:py-[260px] desktop:px-[355px] font-sans antialiased">
      <div className="relative grid desktop:grid-cols-[285px_1fr] desktop:grid-rows-1 rounded-[.625rem] bg-white shadow-custom">
        <img
          className="rounded-t-[.625rem] desktop:rounded-l-[.625rem] desktop:rounded-r-none h-[12.5rem] w-full desktop:h-[280px] deskktop:w-[285px] object-cover object-left"
          src="/images/drawers.jpg"
          alt="Drawers"
        />
        <div className="px-8 desktop:px-10 desktop:py-8">
          <p className="mt-9 desktop:mt-0 text-very-dark-grayish-blue font-bold text-[16px] desktop:text-[20px] leading-6 desktop:leading-7 tracking-[.0125rem] desktop:tracking-[0.25px]">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </p>
          <p className="mt-3 text-desaturated-dark-blue font-medium text-[.8125rem] leading-[1.25rem] tracking-[.0075rem]">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <div className="mt-8 desktop:mt-5 pb-5 desktop:pb-0 flex items-center justify-between">
            <div className="flex items-center gap-x-4">
              <img
                className="w-10 h-10 rounded-full "
                src="/images/avatar-michelle.jpg"
                alt="Avatar"
              />
              <div className="text-[.8125rem] leading-[1.25rem] tracking-[.0075rem]">
                <h1 className="font-bold text-very-dark-grayish-blue">
                  Michelle Appleton
                </h1>
                <span className="text-grayish-blue font-medium">
                  28 Jun 2020
                </span>
              </div>
            </div>
            <div
              className="bg-light-grayish-blue p-2 rounded-full w-8 h-8 desktop:hidden"
              onClick={() => setShow(!show)}
            >
              <svg
                className="fill-desaturated-dark-blue"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
              </svg>
            </div>
            <div
              className={`hidden ${
                showDesktop
                  ? "bg-desaturated-dark-blue"
                  : "bg-light-grayish-blue"
              }   p-2 rounded-full w-8 h-8 desktop:block desktop:relative`}
              onClick={() => setShowDesktop(!showDesktop)}
            >
              <svg
                className={`${
                  showDesktop ? "fill-white" : "fill-desaturated-dark-blue"
                }`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
              </svg>
              {/* TODO: Fix the margin */}
              {showDesktop ? (
                <div className="absolute desktop:-top-[84px] desktop:-left-[108px] h-[55px] w-[248px] bg-very-dark-grayish-blue  rounded-[.625rem] flex items-center px-8 text-grayish-blue text-[.8125rem] leading-[1.25rem] tracking-[.3125rem] customSM">
                  <span className="uppercase mr-[1.3125rem]">SHARE</span>
                  <div className="flex gap-x-4 mr-14">
                    <img src="images/icon-facebook.svg" alt="Facebook" />
                    <img src="images/icon-twitter.svg" alt="Twitter" />
                    <img src="images/icon-pinterest.svg" alt="Pinterest" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-t-[12px] border-t-very-dark-grayish-blue border-x-[12px] border-x-transparent border-b-0"></div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        {/* TODO: Fix the margin */}
        {show ? (
          <div className="absolute bottom-0 desktop:top-0 h-16 w-full bg-very-dark-grayish-blue  rounded-b-[.625rem] flex items-center px-8 text-grayish-blue text-[.8125rem] leading-[1.25rem] tracking-[.3125rem] customSM">
            <span className="uppercase mr-[1.3125rem]">SHARE</span>
            <div className="flex gap-x-4 mr-14">
              <img src="images/icon-facebook.svg" alt="Facebook" />
              <img src="images/icon-twitter.svg" alt="Twitter" />
              <img src="images/icon-pinterest.svg" alt="Pinterest" />
            </div>
            <div
              className=" p-2 rounded-full w-8 h-8 bg-desaturated-dark-blue"
              onClick={() => setShow(!show)}
            >
              <svg className="fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
              </svg>
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}

export default App;
