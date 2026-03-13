import { useState } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";
import { FiCalendar, FiClock, FiMapPin, FiCheckCircle } from "react-icons/fi";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LuMapPin } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const images = [
  "/registon.png",
  "/kim.png",
  "/kim1.png",
  "/kim1.png",
  "https://picsum.photos/id/1024/1200/600",
];

export default function TourSelect() {
  const { t } = useTranslation();
  const [activeImg, setActiveImg] = useState(0);
  const [adultsOpen, setAdultsOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedLang, setSelectedLang] = useState("English");

  const languages = ["English", "Russian", "Deutsch", "Turkish"];
  const currentMonth = "May 2025";
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const calendarDays = [
    [null, null, null, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30, 31, null],
  ];

  const position = [39.6542, 66.9597];

  const itinerary = [
    {
      time: "09:00 — 10:00",
      title: "Registan Square",
      desc: "Explore the heart of ancient Samarkand.",
    },
    {
      time: "10:10 — 11:00",
      title: "Gur-Emir Mausoleum",
      desc: "The resting place of Amir Timur.",
    },
    {
      time: "11:10 — 12:00",
      title: "Bibi-Khanym Mosque",
      desc: "One of the largest mosques in the Islamic world.",
    },
    {
      time: "12:10 — 13:00",
      title: "Siab Bazaar",
      desc: "Walk through Samarkand’s oldest marketplace.",
    },
    {
      time: "14:10 — 15:00",
      title: "Shah-i-Zinda Necropolis",
      desc: "A sacred pilgrimage site with azure mausoleums.",
    },
  ];

  const toggle = (type) => {
    setAdultsOpen(type === "adults" ? !adultsOpen : false);
    setDateOpen(type === "date" ? !dateOpen : false);
    setLangOpen(type === "lang" ? !langOpen : false);
  };

  const Counter = ({ label, sublabel, value, setValue, min = 0 }) => (
    <div className="flex justify-between items-center py-3 border-b last:border-0">
      <div>
        <p className="text-sm font-semibold">{label}</p>
        <p className="text-xs text-gray-400">{sublabel}</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setValue(Math.max(min, value - 1))}
          className="w-7 h-7 rounded-full border flex items-center justify-center"
        >
          −
        </button>
        <span className="w-4 text-center font-semibold">{value}</span>
        <button
          onClick={() => setValue(value + 1)}
          className="w-7 h-7 rounded-full border flex items-center justify-center"
        >
          +
        </button>
      </div>
    </div>
  );

  return (
    <div className="font-sans px-5 py-12">
      <h1 className="text-[36px] leading-[44px] font-bold tracking-[-0.02em] text-[#1E2939]">
        {t("tourSelect.samarkandTour")}
      </h1>

      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        <div className="flex-1">
          <div className="w-full h-[260px] sm:h-[320px] lg:h-[380px] rounded-2xl overflow-hidden">
            <img
              src={images[activeImg]}
              alt="tour"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImg(i)}
                className={`min-w-[80px] h-[70px] sm:h-[80px] rounded-xl overflow-hidden cursor-pointer border-2 transition ${
                  activeImg === i
                    ? "border-[#e0174a]"
                    : "border-transparent opacity-80"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[320px]">
          <div className="pb-6 lg:pb-10">
            <p className="text-gray-500 text-sm">
              {t("tourSelect.startsFrom")}{" "}
              <span className="text-[#e0174a] font-bold text-lg">
                200,000 UZS
              </span>{" "}
              {t("tourSelect.perPerson")}
            </p>
          </div>

          <div className="mb-3 pb-5 relative">
            <div
              onClick={() => toggle("adults")}
              className="flex justify-between items-center bg-[#F3F4F6] px-5 py-4 rounded-full cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <IoIosPeople />
                <span className="text-gray-700 font-medium">
                  {t("tourSelect.adult")} x{adults}
                </span>
              </div>

              <svg
                className={`transition ${adultsOpen ? "rotate-180" : ""}`}
                width="18"
                height="18"
                fill="none"
                stroke="#374151"
                strokeWidth="2"
              >
                <path d="M6 8l4 4 4-4" />
              </svg>
            </div>

            {adultsOpen && (
              <div className="mt-2 bg-white rounded-2xl shadow-lg p-4 border">
                <Counter
                  label="Adult"
                  sublabel="Age 12 - 99"
                  value={adults}
                  setValue={setAdults}
                  min={1}
                />
                <Counter
                  label="Child"
                  sublabel="Age 4 - 11"
                  value={children}
                  setValue={setChildren}
                />
                <Counter
                  label="Infant"
                  sublabel="Age 0 - 3"
                  value={infants}
                  setValue={setInfants}
                />
              </div>
            )}
          </div>

          <div className="mb-3 pb-5 relative">
            <div
              onClick={() => toggle("date")}
              className="flex justify-between items-center bg-[#F3F4F6] px-5 py-4 rounded-full cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <BsCalendarDate />
                <span className="text-gray-700 font-medium">
                  {selectedDate ? `May ${selectedDate}` : "Select date"}
                </span>
              </div>

              <svg
                className={`transition ${dateOpen ? "rotate-180" : ""}`}
                width="18"
                height="18"
                fill="none"
                stroke="#374151"
                strokeWidth="2"
              >
                <path d="M6 8l4 4 4-4" />
              </svg>
            </div>

            {dateOpen && (
              <div className="mt-2 bg-white rounded-2xl shadow-lg p-4 border overflow-x-auto">
                {calendarDays.map((week, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-7 text-center mb-2 min-w-[280px]"
                  >
                    {week.map((day, j) => (
                      <div
                        key={j}
                        onClick={() => day && setSelectedDate(day)}
                        className={`py-2 rounded-full cursor-pointer ${
                          !day && "invisible"
                        } ${
                          day === selectedDate
                            ? "bg-[#e0174a] text-white"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mb-3 pb-5 relative">
            <div
              onClick={() => toggle("lang")}
              className="flex justify-between items-center bg-[#F3F4F6] px-5 py-4 rounded-full cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <GrLanguage />
                <span className="text-gray-700 font-medium">
                  {selectedLang}
                </span>
              </div>

              <svg
                className={`transition-transform duration-200 ${
                  langOpen ? "rotate-180" : ""
                }`}
                width="18"
                height="18"
                fill="none"
                stroke="#374151"
                strokeWidth="2"
              >
                <path d="M6 8l4 4 4-4" />
              </svg>
            </div>

            {langOpen && (
              <div className="mt-2 bg-white rounded-2xl shadow-lg p-4 border">
                {languages.map((lang) => (
                  <div
                    key={lang}
                    onClick={() => {
                      setSelectedLang(lang);
                      setLangOpen(false);
                    }}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-xl transition-colors duration-150"
                  >
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="1.5"
                    >
                      <circle cx="8" cy="8" r="6" />
                    </svg>
                    <span>{lang}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

       <Link to={'/Options'}>
          <button className="w-full mt-6 py-4 bg-[#e0174a] text-white rounded-xl font-bold hover:bg-[#c4143f] transition">
            Check availability
          </button>
       </Link>
        </div>
      </div>

      <h3 className="font-bold pt-[40px] text-[24px] leading-[32px] tracking-normal">
        Description
      </h3>

      <p className="text-[#6A7282] pt-[24px]">
        Discover the timeless beauty of one of the world’s oldest cities with
        the Samarkand Cultural Heritage Tour. This immersive journey takes you
        through iconic landmarks, breathtaking architecture, and centuries of
        rich history that shaped the Silk Road. Explore magnificent monuments
        such as Registan Square, Shah-i-Zinda, and the Gur-e-Amir Mausoleum,
        each telling its own story of ancient civilizations and cultural
        brilliance.
      </p>
      <p className="text-[#6A7282] pt-[24px]">
        Guided by local experts, you’ll uncover hidden gems, experience
        authentic traditions, and gain a deeper understanding of Samarkand’s
        artistic, spiritual, and architectural legacy. Perfect for history
        enthusiasts, culture lovers, and curious travelers seeking an
        unforgettable adventure.
      </p>

      <section className="mt-24 rounded-3xl py-12 md:py-20">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                About this activity
              </h2>

              <div className="space-y-6 mb-8 sm:mb-12">
                <div className="flex gap-3 sm:gap-4">
                  <FiCheckCircle className="text-[#e0174a] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-lg">Free cancellation</p>
                    <p className="text-gray-500 text-sm">
                      Cancel up to 24 hours in advance for a full refund
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <FiMapPin className="text-[#e0174a] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-lg">Host or greeter</p>
                    <p className="text-gray-500 text-sm">
                      English, Russian, German, Korean, Japanese
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <FiClock className="text-[#e0174a] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-lg">
                      Duration: 2 day / 1 night
                    </p>
                    <p className="text-gray-500 text-sm">
                      Check availability to see starting times
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
                Itinerary
              </h3>

              <div className="relative border-l border-gray-300 pl-8 sm:pl-10 space-y-8 sm:space-y-10">
                {itinerary.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-10 sm:-left-[46px] top-1 w-8 sm:w-9 h-8 sm:h-9 bg-[#e0174a] text-white flex items-center justify-center rounded-full font-semibold shadow-md">
                      {index + 1}
                    </div>

                    <p className="text-xs sm:text-sm text-gray-400 mb-1">
                      {item.time}
                    </p>
                    <p className="font-semibold text-lg">{item.title}</p>
                    <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <div className="rounded-3xl overflow-hidden shadow-2xl w-full h-64 sm:h-80 md:h-96 lg:h-[520px]">
                <MapContainer
                  center={position}
                  zoom={13}
                  scrollWheelZoom={true}
                  className="w-full h-full"
                >
                  <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}>
                    <Popup>
                      Samarkand <LuMapPin />
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 font-sans text-slate-800">
        <section className="flex flex-col sm:flex-row border-b border-slate-100 pb-6 sm:pb-8 mb-6 sm:mb-8">
          <div className="w-full sm:w-1/4 font-bold text-slate-700 mb-4 sm:mb-0">
            Includes
          </div>

          <div className="w-full sm:w-3/4 space-y-3">
            {[
              {
                text: "Professional English-speaking tour guide",
                included: true,
              },
              {
                text: "Comfortable private transport (AC car/minivan)",
                included: true,
              },
              { text: "Hotel pick-up & drop-off", included: true },
              { text: "Meals & drinks (lunch/dinner)", included: false },
              {
                text: "Personal expenses (souvenirs, snacks, etc.)",
                included: false,
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <svg
                  className={`w-5 h-5 mt-0.5 ${item.included ? "text-green-500" : "text-red-500"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {item.included ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  )}
                </svg>
                <span
                  className={`text-sm ${!item.included ? "text-slate-600" : ""}`}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col sm:flex-row border-b border-slate-100 pb-6 sm:pb-8 mb-6 sm:mb-8">
          <div className="w-full sm:w-1/4 font-bold text-slate-700 mb-4 sm:mb-0">
            Highlights
          </div>

          <ul className="w-full sm:w-3/4 space-y-3 list-disc list-outside pl-4 text-sm text-slate-700">
            <li>
              The iconic Timurid architectural ensemble and heart of ancient
              Samarkand
            </li>
            <li>
              Resting place of Amir Temur (Tamerlane) and the Timurid dynasty
            </li>
            <li>A breathtaking avenue of blue-tiled mausoleums</li>
            <li>One of the grandest mosques in Central Asia</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-bold mb-4">Feedbacks</h2>

          {[
            {
              name: "Carolina Marks - Australia",
              date: "January 24, 2026",
              avatar:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
              text: "The trip exceeded all my expectations! The hospitality, historical landmarks, and vibrant atmosphere made the entire journey unforgettable...",
              images: [],
            },
            {
              name: "Andrey Grigoriy - Russia",
              date: "January 24, 2026",
              avatar:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
              text: "An amazing experience from start to finish! The tour was thoughtfully planned, and the guide was incredibly knowledgeable.",
              images: ["/kim.png", "/kim1.png", "/kim1.png"],
            },
          ].map((fb, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl p-4 sm:p-6">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={fb.avatar}
                  alt="Avatar"
                />
                <div>
                  <div className="text-sm font-bold">{fb.name}</div>
                  <div className="text-xs text-slate-400">{fb.date}</div>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {fb.text}
              </p>

              {fb.images.length > 0 && (
                <div className="flex space-x-2 overflow-x-auto">
                  {fb.images.map((img, i) => (
                    <img
                      key={i}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                      src={img}
                      alt="Travel"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            You might also like{" "}
          </h2>
          <p className="text-gray-500 mt-2">
            Explore the Uzbekistan's most iconic cities and hidden gems{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <img
              src="/nimadir.png"
              alt="Fergana Valley"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">
                Fergana Valley Craft & Culture Tour
              </h3>
              <p className="text-sm text-gray-400 mt-2">From</p>
              <p className="text-red-500 font-semibold">300,000 UZS</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <img
              src="/nimadir1.png"
              alt="Zaamin"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">
                Zaamin Mountains & Nature Escape
              </h3>
              <p className="text-sm text-gray-400 mt-2">From</p>
              <p className="text-red-500 font-semibold">400,000 UZS</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <img
              src="/nimadir2.png"
              alt="Navoi Desert"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">
                Navoi Desert & Ancient Petroglyphs Tour
              </h3>
              <p className="text-sm text-gray-400 mt-2">From</p>
              <p className="text-red-500 font-semibold">400,000 UZS</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <img
              src="/nimadir3.png"
              alt="Shahrisabz"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">
                Shahrisabz & Amir Temur Heritage Tour
              </h3>
              <p className="text-sm text-gray-400 mt-2">From</p>
              <p className="text-red-500 font-semibold">200,000 UZS</p>
            </div>
          </div>
        </div>
      </section>

         <Link
  to="/"
  className="inline-block mb-4  hover:underline"
>
  Home &gt; TourSelect
</Link>
    </div>
  );
}
