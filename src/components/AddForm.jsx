import { IoMdAddCircle } from "react-icons/io";

export default function AddForm({ onSubmitFnc, observableValue, onChangeFnc }) {
  return (
    <div className="card my-4 rounded-5 text-center text-light utility tool">
      <div className="card-body">
        <div className="card-title mb-4">
          <h2>📰Nuovo Articolo📰</h2>
        </div>
        <div className="card-text">
          <form
            onSubmit={(e) => {
              onSubmitFnc(e);
            }}
          >
            <div className="mb-3">
              <label htmlFor="FormControlInput1" className="form-label h5">
                Titolo
              </label>
              <input
                type="text"
                className="form-control"
                id="FormControlInput1"
                placeholder="Il mio Viaggio a ..."
                value={observableValue}
                onChange={(e) => {
                  onChangeFnc(e);
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
  );
}
