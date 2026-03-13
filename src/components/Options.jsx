import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoIosPeople } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const tourOptions = [
  {
    id: "private",
    titleKey: "options.privateTour",
    descriptionKey: "options.privateDescription",
    included: [
      { labelKey: "options.personalGuide", ok: true },
      { labelKey: "options.flexibleItinerary", ok: true },
      { labelKey: "options.privateTransport", ok: true },
      { labelKey: "options.culturalExperiences", ok: true },
      { labelKey: "options.mealsIncluded", ok: false },
      { labelKey: "options.personalExpenses", ok: false },
    ],
  },
  {
    id: "group",
    titleKey: "options.groupTour",
    descriptionKey: "options.groupDescription",
    included: [
      { labelKey: "options.personalGuide", ok: true },
      { labelKey: "options.flexibleItinerary", ok: true },
      { labelKey: "options.privateTransport", ok: true },
      { labelKey: "options.culturalExperiences", ok: true },
      { labelKey: "options.mealsIncluded", ok: false },
      { labelKey: "options.personalExpenses", ok: false },
    ],
  },
];

const suggestedTours = [
  { titleKey: "home.ferganaTour", price: "300,000 UZS", img: "/nimadir.png" },
  { titleKey: "home.zaaminTour", price: "400,000 UZS", img: "/nimadir1.png" },
  { titleKey: "home.navoyTour", price: "400,000 UZS", img: "/nimadir2.png" },
  { titleKey: "home.shahrisabzTour", price: "200,000 UZS", img: "/nimadir3.png" },
];

export default function Options() {
  const { t } = useTranslation();
  const initialState = { name: "", email: "", phone: "+998" };
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const [adults, setAdults] = useState(1);
  const [date, setDate] = useState("05.02.2026");
  const [language, setLanguage] = useState("English");

  const validate = (values) => {
    const newErrors = {};
    if (!values.name.trim()) newErrors.name = t("errors.nameRequired");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) newErrors.email = t("errors.invalidEmail");
    if (values.phone.length !== 13) newErrors.phone = t("errors.phoneRequired");
    return newErrors;
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(form));
  };

  const handleChange = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/[^\d+]/g, "");
    if (!value.startsWith("+998")) value = "+998";
    if (value.length > 13) value = value.slice(0, 13);
    handleChange("phone", value);
  };

  const openModal = (option) => {
    setSelectedOption(option);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, phone: true });
    if (Object.keys(validationErrors).length !== 0) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success(t("options.successMessage"));
      setShowModal(false);
      setForm(initialState);
      setTouched({});
      setErrors({});
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />

      {showModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl p-8 z-10">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{t("options.bookTour")}</h2>
              {selectedOption && (
                <p className="text-sm text-[#e0174a] font-medium mt-1">{t(selectedOption.titleKey)}</p>
              )}
              <p className="text-sm text-gray-500 mt-1">
                {t("options.fillForm")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-700">{t("options.fullName")}</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  placeholder="John Doe"
                  className={`w-full rounded-xl px-4 py-3 text-sm outline-none transition border ${
                    errors.name && touched.name
                      ? "border-rose-500 bg-rose-50"
                      : "bg-gray-50 border-gray-200 focus:bg-white focus:border-gray-400"
                  }`}
                />
                {errors.name && touched.name && (
                  <p className="text-xs text-rose-500 mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-700">{t("options.email")}</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  placeholder="email@example.com"
                  className={`w-full rounded-xl px-4 py-3 text-sm outline-none transition border ${
                    errors.email && touched.email
                      ? "border-rose-500 bg-rose-50"
                      : "bg-gray-50 border-gray-200 focus:bg-white focus:border-gray-400"
                  }`}
                />
                {errors.email && touched.email && (
                  <p className="text-xs text-rose-500 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-700">{t("options.phone")}</label>
                <input
                  type="text"
                  value={form.phone}
                  onChange={handlePhoneChange}
                  onBlur={() => handleBlur("phone")}
                  className={`w-full rounded-xl px-4 py-3 text-sm outline-none transition border ${
                    errors.phone && touched.phone
                      ? "border-rose-500 bg-rose-50"
                      : "bg-gray-50 border-gray-200 focus:bg-white focus:border-gray-400"
                  }`}
                />
                {errors.phone && touched.phone && (
                  <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  disabled={loading}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 rounded-xl transition"
                >
                  {t("options.cancel")}
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-[#1D2433] hover:bg-slate-800 text-white font-semibold py-3 rounded-xl transition flex items-center justify-center"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    t("options.send")
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link to="/" className="inline-block mb-6 text-sm text-gray-500 hover:underline">
          {t("nav.home")} &gt; {t("nav.tours")} &gt; {t("options.title")}
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-1">{t("tourSelect.samarkandTour")}</h1>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <span className="text-blue-600 underline cursor-pointer font-medium">1267 {t("home.reviews")}</span>
          <span>·</span>
          <span>2 {t("tourSelect.day")} / 1 {t("tourSelect.night")}</span>
          <span>·</span>
          <span>{t("tourSelect.provider")}: Moon Travel</span>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-5">{t("options.availableOptions")}</h2>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-4">
            {tourOptions.map((option) => (
              <div
                key={option.id}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-1">{t(option.titleKey)}</h3>
                <p className="text-sm text-gray-500 mb-4">{t(option.descriptionKey)}</p>

                <ul className="space-y-2 mb-6">
                  {option.included.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      {item.ok ? (
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                      {t(item.labelKey)}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openModal(option)}
                  className="bg-[#e0174a] cursor-pointer hover:bg-[#c4143f] text-white font-semibold px-6 py-2.5 rounded-full transition text-sm"
                >
                  {t("options.selectOption")}
                </button>
              </div>
            ))}
          </div>

          <div className="lg:w-72 xl:w-80">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm sticky top-6">
              <p className="text-sm text-gray-500 mb-1">{t("tourSelect.startsFrom")}</p>
              <p className="text-2xl font-bold text-[#e0174a] mb-1">
                200,000 UZS <span className="text-sm font-normal text-gray-400">{t("tourSelect.perPerson")}</span>
              </p>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <IoIosPeople />
                    {t("tourSelect.adult")} x{adults}
                  </div>
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {date}
                  </div>
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <MdLanguage />
                    {language}
                  </div>
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{t("home.youMightAlsoLike")}</h2>
            <p className="text-gray-500 mt-1 text-sm">
              {t("home.exploreCities")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {suggestedTours.map((tour, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition cursor-pointer">
                <img
                  src={tour.img}
                  alt={t(tour.titleKey)}
                  className="w-full h-48 object-cover bg-gray-100"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 text-sm leading-snug">{t(tour.titleKey)}</h3>
                  <p className="text-xs text-gray-400 mt-2">{t("home.priceFrom")}</p>
                  <p className="text-[#e0174a] font-semibold text-sm">{tour.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}