import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Tours() {
  const { t } = useTranslation();
  
  return (
    <div>
      <div className="w-full h-63.75 sm:h-[350px] md:h-[450px] mb-5 bg-[url('/bg.png')] bg-cover bg-center flex flex-col justify-center items-center text-center px-4">
        <h2 className="font-syne font-bold text-[32px] sm:text-[48px] md:text-[64px] lg:text-[86px] leading-[40px] sm:leading-[60px] md:leading-[80px] lg:leading-[110px] tracking-[-0.02em] text-[#F9FAFB]">
          {t("tours.toursByCity")}
        </h2>
        <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] mt-2">
          {t("tours.popularDestinations")}
        </p>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center sm:text-left">
          {t("tours.toursByCity")}
        </h2>
        <p className="text-gray-600 mb-8 text-center sm:text-left">
          {t("tours.popularDestinations")}
        </p>

        <Link to={"/TourSelect"}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="/Bukhara1.png"
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                alt="Bukhara"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                <h3 className="font-semibold">Bukhara</h3>
                <p className="text-sm">{t("tours.toursAvailable")}</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="/samarqand.png"
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                alt="Samarkand"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                <h3 className="font-semibold">Samarkand</h3>
                <p className="text-sm">{t("tours.toursAvailable")}</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="/xorazm.png"
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                alt="Khiva"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                <h3 className="font-semibold">Khiva</h3>
                <p className="text-sm">{t("tours.toursAvailable")}</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="/tashkent1.png"
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                alt="Tashkent"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                <h3 className="font-semibold">Tashkent</h3>
                <p className="text-sm">{t("tours.toursAvailable")}</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="/qayer.png"
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                alt="Shahrisabz"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                <h3 className="font-semibold">Shahrisabz</h3>
                <p className="text-sm">{t("tours.toursAvailable")}</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="/termiz.png"
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                alt="Termez"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                <h3 className="font-semibold">Termez</h3>
                <p className="text-sm">{t("tours.toursAvailable")}</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="/zomin1.png"
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                alt="Zaamin"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                <h3 className="font-semibold">Zaamin</h3>
                <p className="text-sm">{t("tours.toursAvailable")}</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="/Nukus.png"
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                alt="Nukus"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                <h3 className="font-semibold">Nukus</h3>
                <p className="text-sm">{t("tours.toursAvailable")}</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="/Namangan.png"
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                alt="Namangan"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                <h3 className="font-semibold">Namangan</h3>
                <p className="text-sm">{t("tours.toursAvailable")}</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="/Qarshi.png"
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                alt="Karshi"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                <h3 className="font-semibold">Karshi</h3>
                <p className="text-sm">{t("tours.toursAvailable")}</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="/Navoyiy.png"
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                alt="Navoi"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                <h3 className="font-semibold">Navoi</h3>
                <p className="text-sm">{t("tours.toursAvailable")}</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="/Qoqan.png"
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                alt="Kokand"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                <h3 className="font-semibold">Kokand</h3>
                <p className="text-sm">{t("tours.toursAvailable")}</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="/andijon.png"
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                alt="Andijon"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                <h3 className="font-semibold">Andijon</h3>
                <p className="text-sm">{t("tours.toursAvailable")}</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="/Fargona.png"
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                alt="Fargona"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                <h3 className="font-semibold">Fargona</h3>
                <p className="text-sm">{t("tours.toursAvailable")}</p>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="/gulistan.png"
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                alt="Gulistan"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                <h3 className="font-semibold">Gulistan</h3>
                <p className="text-sm">{t("tours.toursAvailable")}</p>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="/Muynoq.png"
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                alt="Muynoq"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                <h3 className="font-semibold">Muynoq</h3>
                <p className="text-sm">{t("tours.toursAvailable")}</p>
              </div>
            </div>
          </div>
        </Link>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            {t("home.recommendedTours")}
          </h2>
          <p className="text-gray-500 mt-2">
            {t("home.exploreCities")}
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
                {t("home.ferganaTour")}
              </h3>
              <p className="text-sm text-gray-400 mt-2">{t("home.priceFrom")}</p>
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
                {t("home.zaaminTour")}
              </h3>
              <p className="text-sm text-gray-400 mt-2">{t("home.priceFrom")}</p>
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
                {t("home.navoyTour")}
              </h3>
              <p className="text-sm text-gray-400 mt-2">{t("home.priceFrom")}</p>
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
                {t("home.shahrisabzTour")}
              </h3>
              <p className="text-sm text-gray-400 mt-2">{t("home.priceFrom")}</p>
              <p className="text-red-500 font-semibold">200,000 UZS</p>
            </div>
          </div>
        </div>
      </section>
      
      <Link
        to="/"
        className="inline-block mb-6 ml-18 text-sm text-gray-500 hover:underline"
      >
        {t("nav.home")} &gt; {t("nav.tours")}
      </Link>
    </div>
  );
}