import Image from "next/image";
import React from "react";

import { Infinite, Infinite2 } from "../components/Infinite";
import { Button } from "../components/elements/Button";
import { FAVORITE_BRANDS } from "../utils/constant";
import CardCarousels from "../components/Carousel";

export default function Home() {
  const CAROUSEL_DATA_ONE = [
    {
      src: "https://via.placeholder.com/150",
      title: "VooPoo Argus P1 Pod Vape Kit",
      id: "1",
    },
    {
      src: "https://via.placeholder.com/150",
      title: "VooPoo Argus P1 Pod Vape Kit",
      id: "2",
    },
    {
      src: "https://via.placeholder.com/150",
      title: "VooPoo Argus P1 Pod Vape Kit",
      id: "3",
    },
    {
      src: "https://via.placeholder.com/150",
      title: "VooPoo Argus P1 Pod Vape Kit",
      id: "4",
    },
    {
      src: "https://via.placeholder.com/150",
      title: "VooPoo Argus P1 Pod Vape Kit",
      id: "5",
    },
    {
      src: "https://via.placeholder.com/150",
      title: "VooPoo Argus P1 Pod Vape Kit",
      id: "6",
    },
    {
      src: "https://via.placeholder.com/150",
      title: "VooPoo Argus P1 Pod Vape Kit",
      id: "7",
    },
    {
      src: "https://via.placeholder.com/150",
      title: "VooPoo Argus P1 Pod Vape Kit",
      id: "8",
    },
  ];

  // futurola, backwoods, raw, bou, ocb, smok, voopoo, lostMary, blazySuzan

  return (
    <div>
      <section className="container pt-10">
        <div className="flex items-center gap-[10px] px-[10px] py-1 mx-auto rounded-full w-fit bg-primary border border-gray-3">
          <div className="w-3 min-w-3 aspect-square bg-white rounded-full" />
          <span className="text-white text-sm">
            Nigeria&apos;s most trusted smoke shop
          </span>
        </div>
        <h1 className="text-[80px] w-[1111px] mx-auto text-center leading-[100px] mt-8">
          Luxury smoking accessories, delivered at lightspeed⚡️
        </h1>
        <p className="text-[20px] text-gray-4 mt-10 md:w-[668px] mx-auto text-center">
          Vamp is here to change the game and revolutionize the smoking
          experience. Get your favorite smoking accessories delivered to you in
          no time.
        </p>
        <Button className="mx-auto mt-10 w-[149px]">Show Now</Button>
      </section>
      <section className="my-28 px-[20px]">
        <CardCarousels cardData={CAROUSEL_DATA_ONE} />
      </section>
      <section className="container py-10">
        <h2 className="text-[66px] w-[1111px] mx-auto text-center leading-[75px] mt-8">
          Providing your deserved smoking experience
        </h2>
        <p className="text-[20px] text-gray-4 mt-10 md:w-[668px] mx-auto text-center">
          We aim at providing you with the smoking experience that you solely
          deserve. Explore our catalogue of your favorite smoking accessories.
        </p>
      </section>
      <section className="mt-20">
        <Infinite />
        <div className="mt-14">
          <Infinite2 />
        </div>
      </section>
      <section className="my-44">
        <div className="container bg-primary rounded-[40px] p-10 text-white">
          <div className="flex items-center gap-[10px] px-[10px] py-1 rounded-full w-fit bg-gray-2">
            <div className="w-3 min-w-3 aspect-square bg-white rounded-full" />
            <span className="text-white text-sm">Buy by brand</span>
          </div>
          <div className="mt-4 flex items-end justify-between">
            <h3 className="text-[66px] w-[476px] leading-[80px]">
              Shop your favorite brands
            </h3>
            <p className="text-[20px] w-[616px]">
              We offer a curated selection of trendy smoking accessories you'll
              love. We have also made it easy for you to shop your favorite
              brands in our store. <strong>Shop Vamp "by brand"</strong>
            </p>
          </div>
          <div className="mt-10 grid grid-cols-5 items-center gap-6">
            {FAVORITE_BRANDS.map((brand) => (
              <div
                key={brand.id}
                className="bg-black w-full border border-gray-2 rounded-[20px] justify-center flex items-center h-[168px] group hover:bg-white transition-all"
              >
                <Image
                  src={brand.img}
                  alt="reboot-monkey-logo"
                  style={{ maxWidth: "199px", height: "auto" }}
                  className="group-hover:invert transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
