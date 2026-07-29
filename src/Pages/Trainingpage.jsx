import { MeetingData } from "../data";
const Trainingpage = () => {
  return (
    <div >
      <div className="roboto padding-2xl lg:px-15 px-4">
        <div className="flex flex-col sm:pt-[40px] justify-between sm:gap-0 gap-2">
          <h2 className="text-primary mx-auto md:text-[32px] sm:text-2xl text-xl font-semibold  roboto-serif-font pr-[20px]">
            February, April, May & December 2025 Training Schedule:
            Face-to-Face, Fort Lauderdale, Florida
          </h2>
          <p className="roboto-serif-font font-bold sm:text-[21px] text-xs text-secondary pt-[10px] flex justify-center">
            In-house or on-site training can be arranged
          </p>
        </div>
      </div>
      <div className="roboto sm:pt-[70px] sm:pb-[60px] py-10 padding-2xl lg:px-15 px-4 relative">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-11 overflow-hidden">
          {MeetingData.map((data, index) => (
            <div
              key={index}
              className="max-w-[510px] overflow-hidden bg-[#F2F9FF]"
            >
              <div>
                <div className="relative">
                  <div className="absolute max-w-[85px] h-[75px] bg-primary left-[30px]">
                    <p className="text-2xl font-bold items-center p-[8px] text-center leading-[30px] text-white">
                      {data.day}
                    </p>
                  </div>
                </div>
                <img
                  src={data.image}
                  alt="Card Image"
                  className="max-w-[374px] h-[208px] object-cover"
                />
                <div className="p-[15px]">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                      <span className="text-smallclr text-[13px] font-medium">
                        {data.subtitle}
                      </span>
                      <span className="text-smallclr text-[13px] font-medium">
                        {data.Date}
                      </span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-smallclr text-[13px]">
                        <img src={data.locIcon} alt="" />
                      </span>
                      <span className="text-smallclr text-[13px] font-medium">
                        {data.location}
                      </span>
                    </div>
                  </div>
                  <div className="pt-[20px] flex flex-col gap-[15px]">
                    <h2 className="text-lg font-medium roboto-serif-font text-primary">
                      {data.title}
                    </h2>
                    <h2 className="text-lg font-medium roboto-serif-font text-primary">
                      {data.title2}
                    </h2>
                    {data.title3 && (
                      <h2 className="text-lg font-medium roboto-serif-font text-primary">
                        {data.title3}
                      </h2>
                    )}

                    {/* Clickable PDF Link */}
                    <p
                      className="text-[#ffb036] text-base cursor-pointer hover:underline"
                      onClick={() => window.open(data.PdfUrl, "_blank")}
                    >
                      {data.view}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainingpage;
