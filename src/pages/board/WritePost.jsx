import React, { useState } from "react";

export default function WritePost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("제목:", title);
        console.log("내용:", content);
        // 👉 서버로 전송 또는 상태 업데이트 추가 예정
    };

    return (
        <div className="max-w-3xl mx-auto mt-10 px-4">
            <h2 className="text-2xl font-bold mb-4">게시글 작성</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">제목</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="제목을 입력하세요"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">내용</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full p-2 border rounded h-40"
                        placeholder="내용을 입력하세요"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    작성 완료
                </button>
            </form>
        </div>
    );
}
