import { useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/studylog-banner-twilight.jpg"; // assets 경로는 import OK

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`로그인 시도: ${email}`);
    };

    return (
        <div
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="flex items-center justify-center min-h-screen px-4"
        >
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-center mb-4">
                    {/* public 경로일 땐 이렇게 직접 문자열로! */}
                    <img src="/studylog_logo.png" alt="STUDYLOG 로고" className="h-10" />
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="이메일 입력"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border px-4 py-2 mb-4 rounded"
                        required
                    />
                    <input
                        type="password"
                        placeholder="비밀번호 입력"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border px-4 py-2 mb-4 rounded"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-[#0c1f4a] text-white py-2 rounded hover:bg-[#0a1a3d]"
                    >
                        로그인
                    </button>
                </form>
                <div className="flex justify-center gap-3 mt-4 text-sm text-[#0c1f4a]">
                    <Link to="/find-password">비밀번호 찾기</Link>
                    <span>|</span>
                    <Link to="/signup">회원가입</Link>
                    <span>|</span>
                    <Link to="/find-email">아이디(이메일) 찾기</Link>
                </div>
                <div className="flex items-center mt-4 text-sm text-gray-600 justify-center">
                    <input type="checkbox" id="keep-login" className="mr-2" />
                    <label htmlFor="keep-login">로그인 상태 유지</label>
                </div>
            </div>
        </div>
    );
}

export default Login;
