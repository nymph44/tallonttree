import React from 'react'

function Block() {
  return (
    <div className="cursor-pointer group card w-48 h-60 bg-base-100 shadow-xl image-full">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p className="text-white text-sm">Sketching • Art</p>
      </div>
    </div>
    // <div className="cursor-pointer group">
    //   <div className="border border-base-300 w-48 h-60 rounded-xl overlay bg-black">
    //     <img
    //       src="http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg"
    //       alt="BannerImage"
    //       class="relative h-full object-cover object-right opacity-30 rounded-xl"
    //     ></img>
    //     <div class="flex flex-col -mt-20 p-4">
    //       <p className="text-white text-xl font-bold group-hover:text-primary">
    //         Drawing
    //       </p>
    //       <p className="text-white text-sm">Sketching • Art</p>
    //     </div>
    //   </div>

    //   {/* <div
    //     style={{
    //       backgroundImage: `url('https://picsum.photos/400/600')`,
    //     }}
    //     className="border w-60 h-80 rounded-xl overlay"
    //   >

    //   </div> */}
    // </div>
  )
}

export default Block
