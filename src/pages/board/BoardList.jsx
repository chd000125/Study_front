import { Link } from "react-router-dom";

const dummyData = [
    { id: 1, title: "스터디 모집합니다", author: "기영", date: "2025-04-23", views: 15 },
    { id: 2, title: "리액트 질문 있어요", author: "민섭", date: "2025-04-22", views: 8 },
];

function BoardList() {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">📚 게시판</h1>
                <Link
                    to="/board/write"
                    className="bg-[#0c1f4a] text-white px-4 py-2 rounded hover:bg-[#0a1a3d] transition"
                >
                    글쓰기
                </Link>
            </div>
            <table className="w-full table-auto border-collapse">
                <thead>
                <tr className="bg-gray-100 text-left">
                    <th className="p-2">제목</th>
                    <th className="p-2">작성자</th>
                    <th className="p-2">작성일</th>
                    <th className="p-2">조회수</th>
                </tr>
                </thead>
                <tbody>
                {dummyData.map((post) => (
                    <tr key={post.id} className="border-b hover:bg-gray-50">
                        <td className="p-2">
                            <Link to={`/board/${post.id}`} className="text-blue-700 hover:underline">
                                {post.title}
                            </Link>
                        </td>
                        <td className="p-2">{post.author}</td>
                        <td className="p-2">{post.date}</td>
                        <td className="p-2">{post.views}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default BoardList;
