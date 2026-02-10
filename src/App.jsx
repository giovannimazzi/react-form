import { useState } from "react";
import AddForm from "./components/AddForm";
import ArticleCard from "./components/ArticleCard";

import articles from "./data/articles";

export default function App() {
  const [articlesList, setArticlesList] = useState(articles);
  const [newArticle, setNewArticle] = useState({
    id: 0,
    title: "",
    descprition: "",
  });
  const [onEditList, setOnEditList] = useState([]);

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

  const handleEditArticle = (id) => {
    if (onEditList.includes(id)) {
      const newOnEditList = onEditList.filter((currentId) => currentId !== id);
      setOnEditList(newOnEditList);
    } else {
      setOnEditList([...onEditList, id]);
    }
  };

  const handleEditTitle = (e, id) => {
    const articlesListAlias = structuredClone(articlesList);
    const currentArticle = articlesListAlias.find(
      (article) => article.id === id,
    );
    currentArticle.title = e.target.value;
    setArticlesList(articlesListAlias);
  };

  const handleDeleteArticle = (id) => {
    const newArticlesList = articlesList.filter((article) => article.id !== id);
    setArticlesList(newArticlesList);
    if (onEditList.includes(id)) {
      const newOnEditList = onEditList.filter((currentId) => currentId !== id);
      setOnEditList(newOnEditList);
    }
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
          {articlesList.map((article) => {
            return (
              <ArticleCard
                key={article.id}
                article={article}
                isOnEdit={onEditList.includes(article.id)}
                onChangeFnc={(e) => handleEditTitle(e, article.id)}
                OnClickEditFnc={handleEditArticle}
                onClickDeleteFnc={handleDeleteArticle}
              />
            );
          })}
        </div>
      </main>
      <footer>
        <div className="container">
          <AddForm
            onSubmitFnc={handleAddNewArticle}
            observableValue={newArticle.title}
            onChangeFnc={handleNewArticleChanges}
          />
        </div>
      </footer>
    </div>
  );
}
