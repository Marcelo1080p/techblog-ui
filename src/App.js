import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import api from "./api";

import "./App.css"
import Noticias from "./pages/Noticias";
import Hello from "./pages/hello";




function App() {
  /*const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.posts.findAll().then(res => setPosts(res))
  }, []);*/
  /*const [posts, setPosts] = useState([])
 
  const novaMateria = (materia) => {
    setPosts([...posts, materia])
  
  }*/

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Noticias/>}/>
          <Route path="/hello" element={<Hello/>}/>
        </Routes>
    </Router>
  )
  
}

/*
<Form 
        pos={posts}
        materiaCadastrada={(materia) => 
        novaMateria(materia)
      }
      />

      <section style={{border: "1px solid red", height: "500px"}}>
        {posts.map( post => {
          return <div key={post.id}
            style={{heigth: "100px", width: "100px", border: "1px solid #FFF"}}>
            <h1>{post.title}</h1>
            <h2>{post.subtitulo}</h2>
            <p>{post.texto}</p>
            <p>{post.categoria}</p>
          </div>
        })}
      </section>
       */


/*{posts.map((post) => (
        <p>{post.title}</p>
      ))} */

export default App;
