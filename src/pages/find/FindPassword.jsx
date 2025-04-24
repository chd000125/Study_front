import { useState } from "react";
import bgImage from "../../assets/studylog-banner-twilight.jpg";  // ✅ 경로 수정됨

function FindPassword() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`비밀번호 찾기 메일 전송: ${email}`);
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
            <h2 className="text-2xl font-bold mb-6 text-white drop-shadow-md">비밀번호 찾기</h2>
            <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm p-6 rounded shadow-md w-full max-w-md">
                <input
                    type="email"
                    placeholder="가입한 이메일"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border px-4 py-2 mb-4 rounded focus:outline-none"
                />
                <button type="submit" className="w-full bg-[#0c1f4a] text-white py-2 rounded hover:bg-[#0a1a3d] transition">
                    이메일로 임시 비밀번호 받기
                </button>
            </form>
        </div>
    );
}

export default FindPassword;
