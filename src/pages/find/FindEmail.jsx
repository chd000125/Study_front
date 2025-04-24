import { useState } from "react";
import bgImage from "../../assets/studylog-banner-twilight.jpg";  // ✅ 경로 수정됨

function FindEmail() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`입력한 이름: ${name}, 전화번호: ${phone} → 이메일 찾기 시도`);
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
            }}
            className="flex flex-col items-center justify-center px-4"
        >
            <h2 className="text-2xl font-bold mb-6 text-white drop-shadow-md">이메일 찾기</h2>
            <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm p-6 rounded shadow-md w-full max-w-md">
                <input
                    type="text"
                    placeholder="이름"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border px-4 py-2 mb-4 rounded focus:outline-none"
                />
                <input
                    type="tel"
                    placeholder="전화번호"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border px-4 py-2 mb-4 rounded focus:outline-none"
                />
                <button type="submit" className="w-full bg-[#0c1f4a] text-white py-2 rounded hover:bg-[#0a1a3d] transition">
                    이메일 찾기
                </button>
            </form>
        </div>
    );
}

export default FindEmail;
