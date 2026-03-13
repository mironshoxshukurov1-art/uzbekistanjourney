import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  const photos = [
    { id: 1, src: "/odam.png", alt: "Couple travelling" },
    { id: 2, src: "/Samarqand1.png", alt: "Registan Samarkand" },
    { id: 3, src: "/oila.png", alt: "Family at airport" },
    { id: 4, src: "/kimdir.png", alt: "Uzbek mosque woman" },
    { id: 5, src: "/kimdirbuham.png", alt: "Boat on sea" },
    { id: 6, src: "/girl.png", alt: "World travel girl" },
    { id: 7, src: "/kimdir1.png", alt: "Hiker on mountain" },
    { id: 8, src: "/kimdir2.png", alt: "Woman on road" },
    { id: 9, src: "/qayer1.png", alt: "Blue mosque Uzbekistan" },
  ];

  function Photo({ src, alt, className = "" }) {
    const [loaded, setLoaded] = useState(false);
    return (
      <div className={`relative overflow-hidden rounded-2xl group ${className}`}>
        {!loaded && (
          <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-2xl" />
        )}
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-2xl" />
      </div>
    );
  }

  return (
    <div>
      <header className="w-full border-b border-gray-200">
        <div className="bg-[url('/bg.png')] bg-cover bg-center w-full
          pt-40 sm:pt-56 lg:pt-[420px]
          px-6 sm:px-10 lg:px-20 pb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-[90px] 
            leading-tight lg:leading-[100px] 
            font-bold text-white">
            {t("home.title")}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg
            pt-4 max-w-2xl text-white">
            {t("home.description")}
          </p>
          <Link to="/Tours">
            <button className="mt-6 bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition">
              {t("home.goToTour")}
            </button>
          </Link>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-2">{t("home.featuredTours")}</h2>
        <p className="text-gray-600 mb-8">{t("home.exploreCities")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img src="/rasm.png" className="w-full h-48 object-cover" alt=""/>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">{t("home.samarkandTour")}</h3>
              <p className="text-[#EA004A] mt-2">{t("home.priceFrom")} 200,000 UZS</p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img src="/Bukhara.png" className="w-full h-48 object-cover" alt=""/>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">{t("home.bukharaTour")}</h3>
              <p className="text-[#EA004A] mt-2">{t("home.priceFrom")} 300,000 UZS</p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img src="/xiva.png" className="w-full h-48 object-cover" alt=""/>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">{t("home.khivaTour")}</h3>
              <p className="text-[#EA004A] mt-2">{t("home.priceFrom")} 500,000 UZS</p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img src="/Tashkent.png" className="w-full h-48 object-cover" alt=""/>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">{t("home.tashkentTour")}</h3>
              <p className="text-[#EA004A] mt-2">{t("home.priceFrom")} 300,000 UZS</p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img src="/Fargona.png" className="w-full h-48 object-cover" alt=""/>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">{t("home.ferganaTour")}</h3>
              <p className="text-[#EA004A] mt-2">{t("home.priceFrom")} 300,000 UZS</p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img src="/zomin.png" className="w-full h-48 object-cover" alt=""/>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">{t("home.zaaminTour")}</h3>
              <p className="text-[#EA004A] mt-2">{t("home.priceFrom")} 400,000 UZS</p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img src="/qayerdir.png" className="w-full h-48 object-cover" alt=""/>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">{t("home.navoyTour")}</h3>
              <p className="text-[#EA004A] mt-2">{t("home.priceFrom")} 400,000 UZS</p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img src="/shaxri.png" className="w-full h-48 object-cover" alt=""/>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">{t("home.shahrisabzTour")}</h3>
              <p className="text-[#EA004A] mt-2">{t("home.priceFrom")} 200,000 UZS</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-2">{t("home.toursByCity")}</h2>
        <p className="text-gray-600 mb-8">{t("home.popularDestinations")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative rounded-2xl overflow-hidden group">
            <img src="/Bukhara1.png" className="w-full h-44 object-cover group-hover:scale-105 transition" alt=""/>
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
              <h3 className="text-lg font-semibold">Bukhara</h3>
              <p className="text-sm">{t("tours.toursAvailable")}</p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden group">
            <img src="/samarqand.png" className="w-full h-44 object-cover group-hover:scale-105 transition" alt=""/>
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
              <h3 className="text-lg font-semibold">Samarkand</h3>
              <p className="text-sm">{t("tours.toursAvailable")}</p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden group">
            <img src="/xorazm.png" className="w-full h-44 object-cover group-hover:scale-105 transition" alt=""/>
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
              <h3 className="text-lg font-semibold">Khorezm</h3>
              <p className="text-sm">{t("tours.toursAvailable")}</p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden group">
            <img src="/tashkent1.png" className="w-full h-44 object-cover group-hover:scale-105 transition" alt=""/>
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
              <h3 className="text-lg font-semibold">Tashkent</h3>
              <p className="text-sm">{t("tours.toursAvailable")}</p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden sm:col-span-2 group">
            <img src="/qayer.png" className="w-full h-44 object-cover group-hover:scale-105 transition" alt=""/>
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
              <h3 className="text-lg font-semibold">Shahrisabz</h3>
              <p className="text-sm">{t("tours.toursAvailable")}</p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden group">
            <img src="/termiz.png" className="w-full h-44 object-cover group-hover:scale-105 transition" alt=""/>
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
              <h3 className="text-lg font-semibold">Termez</h3>
              <p className="text-sm">{t("tours.toursAvailable")}</p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden group">
            <img src="/zomin1.png" className="w-full h-44 object-cover group-hover:scale-105 transition" alt=""/>
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
              <h3 className="text-lg font-semibold">Zaamin</h3>
              <p className="text-sm">{t("tours.toursAvailable")}</p>
            </div>
          </div>
        </div>

        <Link to="/Tours" className="flex justify-center mt-8">
          <button className="bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-700 transition">
            {t("home.seeAllRegions")} →
          </button>
        </Link>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{t("home.gallery")}</h2>
          <p className="text-sm text-gray-400 mt-1">{t("home.discoverMoments")}</p>
        </div>

        <div className="grid grid-cols-4 grid-rows-[200px_200px_220px] gap-3">
          <Photo src={photos[0].src} alt={photos[0].alt} className="col-start-1 row-start-1" />
          <Photo src={photos[1].src} alt={photos[1].alt} className="col-start-2 row-start-1" />
          <Photo src={photos[2].src} alt={photos[2].alt} className="col-start-3 row-start-1 row-span-2" />
          <Photo src={photos[3].src} alt={photos[3].alt} className="col-start-4 row-start-1" />
          <Photo src={photos[4].src} alt={photos[4].alt} className="col-start-1 col-span-2 row-start-2 row-span-2" />
          <Photo src={photos[5].src} alt={photos[5].alt} className="col-start-3 row-start-3" />
          <div className="col-start-4 row-start-2 grid grid-cols-2 gap-3">
            <Photo src={photos[6].src} alt={photos[6].alt} />
            <Photo src={photos[7].src} alt={photos[7].alt} />
          </div>
          <Photo src={photos[8].src} alt={photos[8].alt} className="col-start-4 row-start-3" />
        </div>
      </section>
    </div>
  );
}