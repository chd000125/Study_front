import { useLocation } from "react-router-dom";

function SearchResult() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query'); // URL에서 'query' 꺼냄!

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-bold mb-4">"{query}"에 대한 검색 결과</h2>
      {/* 나중에 여기 결과 리스트 추가 */}
    </div>
  );
}

export default SearchResult;
