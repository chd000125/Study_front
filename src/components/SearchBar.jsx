import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/studylog-banner-twilight.jpg";

function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [selectedTags, setSelectedTags] = useState([
    "수능공부", "자격증준비", "공무원시험", "토익", "임용고시", "컴퓨터활용능력"
  ]);
  const navigate = useNavigate();

  const handleTagClick = (tag) => {
    setInputValue(tag);
  };

  const handleTagRemove = (tagToRemove) => {
    setSelectedTags((prev) => prev.filter((tag) => tag !== tagToRemove));
  };

  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      navigate(`/search?query=${inputValue.trim()}`);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
      <div
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
          }}
          className="flex flex-col justify-center items-center px-4"
      >
        <h1 className="text-white text-7xl font-extrabold drop-shadow-lg mb-6">
          STUDYLOG
        </h1>

        <div className="flex items-center bg-white rounded-full overflow-hidden w-[420px] shadow-lg mb-6">
          <input
              type="text"
              placeholder="검색어를 입력하세요"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full p-4 text-black text-lg focus:outline-none rounded-full"
          />
          <button
              onClick={handleSearch}
              className="bg-[#0c1f4a] px-5 py-5 rounded-r-full flex items-center justify-center -ml-1"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth="2"
                className="w-5 h-5"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {selectedTags.map((tag, index) => (
              <div
                  key={index}
                  onClick={() => handleTagClick(tag)} // ✅ 이걸 추가해줘!
                  className="bg-[#0c1f4a] text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 cursor-pointer"
              >
                #{tag}
                <button
                    onClick={(e) => {
                      e.stopPropagation(); // ⛔ 부모 div 클릭 방지
                      handleTagRemove(tag);
                    }}
                    className="text-white hover:text-red-400 transition"
                >
                  &times;
                </button>
              </div>
          ))}
        </div>
      </div>
  );
}

export default SearchBar;
