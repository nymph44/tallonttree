import React from 'react'

function Carousel() {
  return (
    <>
      <div className="carousel w-full">
        <div
          style={{
            backgroundImage: 'url(https://placeimg.com/1600/400/arch)',
            height: '400px',
          }}
          id="slide1"
          className="carousel-item relative  bg-no-repeat bg-cover bg-center	  w-full rounded-lg"
        >
          <div className="z-10 pb-8 ml-24  flex flex-col">
            <div className=" mt-auto w-1/2 py-4 bg-base-200  p-4 rounded-lg">
              <p className="py-2 text-2xl text-base-content drop-shadow-lg font-bold">
                Advanced React
              </p>
              <p className="text-sm text-base-content drop-shadow-lg ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn btn-primary btn-outline btn-sm my-2 font-normal">
                Check out the course
              </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              {'❮'}
            </a>
            <a href="#slide2" className="btn btn-circle">
              {'❯'}
            </a>
          </div>
        </div>
        <div
          style={{
            backgroundImage: 'url(https://placeimg.com/1600/400/arch)',
            height: '400px',
          }}
          id="slide2"
          className="carousel-item relative  bg-no-repeat bg-cover w-full rounded-lg"
        >
          <div className="z-10 pb-8 ml-24  flex flex-col">
            <div className=" mt-auto w-1/2 py-4 bg-base-200  p-4 rounded-lg">
              <p className="py-2 text-2xl text-base-content drop-shadow-lg font-bold">
                Advanced React
              </p>
              <p className="text-sm text-base-content drop-shadow-lg ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. .
              </p>
              <button className="btn btn-primary btn-outline btn-sm my-2 font-normal">
                Check out the course
              </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          style={{
            backgroundImage: 'url(https://placeimg.com/1600/400/arch)',
            height: '400px',
          }}
          id="slide3"
          className="carousel-item relative  bg-no-repeat bg-cover w-full rounded-lg"
        >
          <div className="z-10 pb-8 ml-24  flex flex-col">
            <div className=" mt-auto w-1/2 py-4 bg-base-200  p-4 rounded-lg">
              <p className="py-2 text-2xl text-base-content drop-shadow-lg font-bold">
                Advanced React
              </p>
              <p className="text-sm text-base-content drop-shadow-lg ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. .
              </p>
              <button className="btn btn-primary btn-outline btn-sm my-2 font-normal">
                Check out the course
              </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          style={{
            backgroundImage: 'url(https://placeimg.com/1600/400/arch)',
            height: '400px',
          }}
          id="slide4"
          className="carousel-item relative  bg-no-repeat bg-cover w-full rounded-lg"
        >
          <div className="z-10 pb-8 ml-24  flex flex-col">
            <div className=" mt-auto w-1/2 py-4 bg-base-200  p-4 rounded-lg">
              <p className="py-2 text-2xl text-base-content drop-shadow-lg font-bold">
                Advanced React
              </p>
              <p className="text-sm text-base-content drop-shadow-lg ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. .
              </p>
              <button className="btn btn-primary btn-outline btn-sm my-2 font-normal">
                Check out the course
              </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#slide1" className="btn btn-xs">
          1
        </a>
        <a href="#slide2" className="btn btn-xs">
          2
        </a>
        <a href="#slide3" className="btn btn-xs">
          3
        </a>
        <a href="#slide4" className="btn btn-xs">
          4
        </a>
      </div>
    </>
  )
}

export default Carousel
