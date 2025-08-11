export default function VideoInfo({ movieTitle, movieDescription }) {
  return (
    <div className="absolute top-0 w-full h-full  bg-gradient-to-r from-black text-white z-20 sm:hidden">
      <div className="content-wrapper w-1/3 px-6 absolute bottom-1/4 left-8">
        <h1 className="text-5xl font-bold ">{movieTitle}</h1>
        <p className=" text-lg mt-6 max-h-40 line-clamp-4">
          {movieDescription}
        </p>
        <div className="mt-6 flex w-3xs justify-between items-center">
          <button className="bg-red-500 text-white  rounded-lg py-2 w-30 ">
            Play
          </button>
          <button className="bg-gray-700 text-white rounded-lg py-2 w-30 ">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}
