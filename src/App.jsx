import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import MainLayout from "./layouts/MainLayout";
import "./App.css";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import Users from "./components/Users";
import InnerData from "./components/InnerData";
import CommentsData from "./components/CommentsData";
import UserData from "./components/UserData";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="posts" element={<Posts />} />
            <Route path="users" element={<Users />} />
            <Route path="comments" element={<Comments />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="posts/:id" element={<InnerData />} />
          <Route path="comments/:id" element={<CommentsData />} />
          <Route path="users/:id" element={<UserData />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
