import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="App">
      <div className="brand">
        {" "}
        <h1>Welcome To My Website</h1>
      </div>

      <ul className="ul">
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/profile">Profile </Link>
        </li>
        <li>
          <Link to="/blog">Blog </Link>
        </li>
        <li>
          <Link to="/contact">Contact </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetail />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
