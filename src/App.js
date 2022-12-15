import React, { useState, useEffect} from "react";
//import api from "./api";
import Form from "./components/Form";
import "./App.css"




function App() {
  /*const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.posts.findAll().then(res => setPosts(res))
  }, []);*/

  return (
    
    <div className="App">
      <Form/>
    </div>
  );
}

/*{posts.map((post) => (
        <p>{post.title}</p>
      ))} */

export default App;
