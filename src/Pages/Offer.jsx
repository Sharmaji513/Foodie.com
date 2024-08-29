import React from "react";
import Navbar from "../components/Navbar";

const Offer = () => {
  return (
    <>
      <Navbar />

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5 gap-5">
        {[
          "https://i.pinimg.com/736x/8e/5c/29/8e5c2958751749936a2baded4c11b5d8.jpg",
          "https://i.pinimg.com/736x/0b/f7/6f/0bf76f7f6da2311fd6e8b34ee2d8073b.jpg",
          "https://i.pinimg.com/564x/f1/80/17/f18017900711d078c87bcafc18a5bd4b.jpg",
          "https://i.pinimg.com/736x/94/59/c5/9459c542640d6385ae8902bacd814322.jpg",
          "https://i.pinimg.com/564x/9a/3f/fc/9a3ffcc0f59ae7a537adae2e5b006290.jpg",
          "https://i.pinimg.com/564x/58/c6/c1/58c6c15a6cd7d734c8c8dd56549cb3ea.jpg",
          "https://i.pinimg.com/564x/24/f7/82/24f7829a2fb4d74ed665135fda7edb91.jpg",
          "https://i.pinimg.com/564x/ca/cc/ba/caccbab0cbed78bd27cb8174bc93ed59.jpg",
          "https://i.pinimg.com/736x/aa/2a/04/aa2a0408809e12a6b83cf6dcc0d5550f.jpg",
          "https://i.pinimg.com/564x/f7/81/5c/f7815c762345401f46409797946416f7.jpg",
          "https://i.pinimg.com/736x/12/ef/6e/12ef6eae03cde30668ad6c1d0f61c32b.jpg",
          "https://i.pinimg.com/564x/f4/c5/3b/f4c53b559911e7022b443d10714c7015.jpg",
          "https://i.pinimg.com/736x/94/59/c5/9459c542640d6385ae8902bacd814322.jpg",
          "https://i.pinimg.com/564x/f1/80/17/f18017900711d078c87bcafc18a5bd4b.jpg",
          "https://i.pinimg.com/564x/fe/61/be/fe61be7e8d37d7671a20107869163ed8.jpg"
        
        ].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`offer-${index + 1}`}
            className="object-cover w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 rounded-md shadow-lg"
          />
        ))}
      </div>
    </>
  );
};

export default Offer;
