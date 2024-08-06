import { useEffect, useState } from "react";
import Notification from "./components/Notification";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [input, setInput] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    console.log("blogs:", blogs);
  }, [blogs]);

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { blog: input, id: uuidv4() };
    setBlogs([...blogs, newBlog]);
    setMessage(`✨ You just added ${newBlog.blog}!`);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
    setInput("");
  };

  return (
    <>
      <h1>💾 Simple Blog™</h1>

      <Notification message={message} />

      <form onSubmit={handleSubmit}>
        <p>Write something...</p>
        <input value={input} onChange={handleChange} />
        <button type="submit">Add the Blog</button>
      </form>

      <h2>👀 Here are all the blogs</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>{blog.blog}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
