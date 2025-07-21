export default function VideoInfo({ movieTitle, movieDescription }) {
  return (
    <div className="absolute w-screen aspect-video bg-gradient-to-r from-black text-white">
      <h1 className="text-5xl font-bold">{movieTitle}</h1>
      <p className="w-1/3 text-lg mt-6">{movieDescription}</p>
      <div className="mt-6 flex w-1/4 justify-between items-center">
        <button className="bg-red-500 text-white  rounded-lg py-2 w-30 ">
          Play
        </button>
        <button className="bg-gray-700 text-white rounded-lg py-2 w-30 ">
          More Info
        </button>
      </div>
    </div>
  );
}
