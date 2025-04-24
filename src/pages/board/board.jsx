import { Link } from "react-router-dom";

function Board() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">📋 게시판</h1>
            <Link to="/board/write" className="bg-blue-500 text-white px-4 py-2 rounded">
                글쓰기
            </Link>
            {/* 여기 나중에 게시글 목록 들어감 */}
        </div>
    );
}

export default Board;
