import blogFetch from "../axios/config";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    // console.log("testando")
    try {
      const response = await blogFetch.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = response.data;
      setPosts(data);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home">
      <h1 >Ùltimos posts</h1>
      {posts.lenth === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/post/${post.id}`} className="btn">
              Ler Mais{" "}
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
