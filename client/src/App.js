import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Blog from "./pages/Blog";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import UsersBlogs from "./pages/UsersBlogs";
import CreateBlog from "./pages/CreateBlog";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/my-blogs" element={<UsersBlogs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-blog" element={<CreateBlog />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
