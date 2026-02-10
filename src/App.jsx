import { useState } from "react";
import articles from "./data/articles";

import { BsGeoAltFill } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";

export default function App() {
  const [articlesList, setArticlesList] = useState(articles);
  const [newArticle, setNewArticle] = useState({
    id: 0,
    title: "",
    descprition: "",
  });

  const handleNewArticleChanges = (e) =>
    setNewArticle({
      ...newArticle,
      title: e.target.value,
    });

  const handleAddNewArticle = (e) => {
    e.preventDefault();
    const currentMaxId = articlesList.reduce(
      (maxId, article) => (article.id > maxId ? article.id : maxId),
      0,
    );
    const articleToAdd = {
      ...newArticle,
      id: currentMaxId + 1,
    };
    setArticlesList([articleToAdd, ...articlesList]);
  };

  return (
    <div className="app-layout">
      <header>
        <div className="container text-center py-2">
          <h1>🗺️BLOG di Viaggio🗺️</h1>
        </div>
      </header>
      <main>
        <div className="container py-4">
          {articlesList.map(({ id, title }) => {
            return (
              <div key={id} className="card my-4 bg-transparent rounded-5">
                <div className="card-body">
                  <div className="card-title">
                    <h2>
                      <a href="#" className="text-decoration-none">
                        <BsGeoAltFill className="me-2 trip-icon" />
                        <span className="text-dark">{title}</span>
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <footer>
        <div className="container">
          <hr />
          <div className="card my-4 rounded-5 text-center text-light utility tool">
            <div className="card-body">
              <div className="card-title mb-4">
                <h2>📰Nuovo Articolo📰</h2>
              </div>
              <div className="card-text">
                <form
                  onSubmit={(e) => {
                    handleAddNewArticle(e);
                  }}
                >
                  <div className="mb-3">
                    <label
                      htmlFor="FormControlInput1"
                      className="form-label h5"
                    >
                      Titolo
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="FormControlInput1"
                      placeholder="Il mio Viaggio a ..."
                      value={newArticle.title}
                      onChange={(e) => {
                        handleNewArticleChanges(e);
                      }}
                    />
                    <button className="btn btn-primary fs-5 d-flex align-items-center gap-2 mx-auto mt-4">
                      <IoMdAddCircle /> <span>AGGIUNGI ARTICOLO</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
