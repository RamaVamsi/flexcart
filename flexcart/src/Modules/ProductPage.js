import React from "react";

const ProductPage = () => {
  return (
    <>
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
          <img
            className="w-50"
            alt="Iphone Pictures"
            src="https://rukminim2.flixcart.com/image/312/312/kgiaykw0/mobile/d/d/s/apple-iphone-11-mhdj3hn-a-original-imafwqepmfedbhb2.jpeg?q=70"
          />
        </div>
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
          <p className="text-sm leading-none text-gray-600">
            Balenciaga Fall Collection
          </p>
          <h1
            className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
          >
            Balenciaga Signature Sweatshirt
          </h1>
          <p className="lg:text-2xl text-base lg:leading-tight leading-normal text-gray-600 mt-3">
            It is a long established fact that a reader will be distracted by
            thereadable content of a page when looking at its layout. The point
            of usingLorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </p>
          <p className="lg:text-2xl text-base lg:leading-tight leading-normal text-gray-600 mt-3">
            Composition: 100% calf leather, inside: 100% lamb leather
          </p>
        </div>
      </div>
      <div className="ml-5">
        <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
          It is a long established fact that a reader will be distracted by
          thereadable content of a page when looking at its layout. The point of
          usingLorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>
        <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
          Composition: 100% calf leather, inside: 100% lamb leather
        </p>
      </div>
    </>
  );
};

export default ProductPage;
