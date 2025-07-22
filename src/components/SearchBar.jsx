import { useRef } from "react";
import gemini from "../utils/gemini";
import { enhancedPrompt } from "../utils/constants";

export default function SearchBar() {
  const inputRef = useRef(null);
  async function handleSearch() {
    const searchText = inputRef.current.value;

    const response = await gemini.models.generateContent({
      model: "gemini-2.5-flash",
      contents: enhancedPrompt(searchText),
      config: {
        thinkingConfig: {
          thinkingBudget: 0, // Disables thinking
        },
      },
    });
    console.log(response?.text.split(","));
  }

  //   ------------
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bg-black grid grid-cols-12 text-white"
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="What would you like to watch? "
        className="col-span-9 bg-gray-800 rounded-lg m-4 p-4"
      />
      <button
        className="py-2 px-4 text-xl m-4 font-semibold text-white col-span-3 bg-red-700 rounded-lg cursor-pointer"
        onClick={handleSearch}
      >
        Search
      </button>
    </form>
  );
}
