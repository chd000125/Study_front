import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
    "#자격증준비",
    "#공무원시험",
    "#입시정보공유",
    "#스터디모집",
    "#정보공유",
    "#시간관리팁",
    "#멘탈관리",
    "#시험꿀팁",
];

export default function Header() {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className="w-full relative">
            <header className="bg-[#0f172a] text-white py-4 px-8 flex justify-between items-center">
                <h1 className="text-2xl font-bold">STUDYLOG</h1>

                {/* ✅ 여기가 <nav> 안! */}
                <nav className="flex space-x-6 items-center">
                    {/* 🔥 요기에 그대로 넣으면 돼 */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <button className="hover:underline cursor-pointer">카테고리</button>

                        {isHovering && (
                            <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 px-6 py-3 bg-[#0f172a] text-white shadow-md rounded z-50 flex justify-center gap-x-4 whitespace-nowrap">
                                {categories.map((item, index) => (
                                    <button key={index} className="hover:underline">
                                        {item}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link to="/login" className="hover:underline">로그인</Link>
                    <Link to="/signup" className="hover:underline">회원가입</Link>
                </nav>
            </header>
        </div>
    );
}
