import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BoardList from "./pages/board/BoardList";
import BoardWrite from "./pages/board/BoardWrite";
import { BoardDetail } from "/src/pages/board/BoardDetail.jsx";
import FindPassword from "./pages/find/FindPassword";
import FindEmail from "./pages/find/FindEmail";

function App() {
    const location = useLocation();
    const hideHeaderRoutes = ["/login", "/signup"];

    return (
        <>
            {!hideHeaderRoutes.includes(location.pathname) && <Header />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                // ...
                <Route path="/board" element={<BoardList />} />
                <Route path="/board/write" element={<BoardWrite />} />
                <Route path="/board/:id" element={<BoardDetail />} />
                // ...
                <Route path="/find-password" element={<FindPassword />} />
                <Route path="/find-email" element={<FindEmail />} />
            </Routes>
        </>
    );
}

export default App; // <<<< 여기 필수
