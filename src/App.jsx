import articles from "./data/articles";

import { BsGeoAltFill } from "react-icons/bs";

export default function App() {
  return (
    <>
      <header>
        <div className="container text-center py-2">
          <h1>BLOG di Viaggio</h1>
        </div>
      </header>
      <main>
        <div className="container py-4">
          {articles.map(({ id, title }) => {
            return (
              <div key={id} className="card my-4 bg-transparent rounded-5">
                <div className="card-body">
                  <div className="card-title">
                    <h2 className="h1">
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
    </>
  );
}
