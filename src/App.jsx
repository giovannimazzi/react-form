import { useState } from "react";
import articles from "./data/articles";

import { BsGeoAltFill } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { IoTrash } from "react-icons/io5";
import { GrEdit } from "react-icons/gr";

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
    if (articleToAdd.title === "") return;
    setArticlesList([articleToAdd, ...articlesList]);
    setNewArticle({ ...newArticle, title: "" });
  };

  const handleDeleteArticle = (id) => {
    console.log(id);
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
              <div
                key={id}
                className="card my-4 bg-transparent border-0 rounded-5"
              >
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div className="card-title">
                    <h2>
                      <a href="#" className="text-decoration-none">
                        <BsGeoAltFill className="me-2 trip-icon" />
                        <span className="text-dark">{title}</span>
                      </a>
                    </h2>
                  </div>
                  <div className="option d-flex flex-column gap-1">
                    <button className="btn btn-secondary d-flex align-item-center gap-1">
                      <GrEdit className="fs-5" />
                      <small>Edit</small>
                    </button>
                    <button
                      className="btn btn-danger d-flex align-item-center gap-1"
                      onClick={() => handleDeleteArticle(id)}
                    >
                      <IoTrash className="fs-5" />
                      <small>Delete</small>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <footer>
        <div className="container">
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
