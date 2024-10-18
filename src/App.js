import { Routes, Route } from "react-router-dom";
import ComponentOne from "./components/ComponentOne";
import myBlogs from "./utilities/Blogs";
import { useState } from "react";
import ComponentTwo from "./components/ComponentTwo";

function App() {
  const [blogs, setBlogs] = useState(myBlogs);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<ComponentOne blogs={blogs} setBlogs={setBlogs} />}
        />
        <Route path="/:id" element={<ComponentTwo blogs={blogs} />} />
      </Routes>
    </div>
  );
}

export default App;
