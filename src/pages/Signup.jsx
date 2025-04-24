import { useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/studylog-banner-twilight.jpg"; // 배경 이미지 import

function Signup() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("회원가입 완료! 🎉");
    };

    return (
        <div
            className="background"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "2rem",
            }}
        >
            <div className="login-card">
                <h2 className="text-2xl font-bold text-[#0c1f4a] mb-6">회원가입</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <input
                        className="login-input"
                        type="text"
                        name="name"
                        placeholder="이름 입력"
                        value={form.name}
                        onChange={handleChange}
                    />
                    <input
                        className="login-input"
                        type="email"
                        name="email"
                        placeholder="이메일 입력"
                        value={form.email}
                        onChange={handleChange}
                    />
                    <input
                        className="login-input"
                        type="password"
                        name="password"
                        placeholder="비밀번호 입력"
                        value={form.password}
                        onChange={handleChange}
                    />
                    <button type="submit" className="login-button">회원가입</button>
                </form>
                <p className="login-footer">
                    <Link to="/login" className="login-link">이미 회원이신가요?</Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
