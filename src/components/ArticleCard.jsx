import { BsGeoAltFill } from "react-icons/bs";
import { IoTrash } from "react-icons/io5";
import { GrEdit } from "react-icons/gr";

export default function ArticleCard({
  article,
  isOnEdit,
  onChangeFnc,
  OnClickEditFnc,
  onClickDeleteFnc,
}) {
  const { id, title } = article;
  return (
    <div className="card my-4 bg-transparent border-0 rounded-5">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div className="card-title">
          <h2>
            <a href="#" className="text-decoration-none">
              <BsGeoAltFill className="me-2 trip-icon" />
              <span className="text-dark">{title}</span>
            </a>
          </h2>
          <div
            className={`d-flex align-items-center ${isOnEdit ? "" : "d-none"}`}
          >
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => {
                onChangeFnc(e, id);
              }}
            />
          </div>
        </div>
        <div className="option d-flex flex-column gap-1">
          <button
            className="btn btn-secondary d-flex align-item-center gap-1"
            onClick={() => OnClickEditFnc(id)}
          >
            <GrEdit className="fs-5" />
            <small>Edit</small>
          </button>
          <button
            className="btn btn-danger d-flex align-item-center gap-1"
            onClick={() => onClickDeleteFnc(id)}
          >
            <IoTrash className="fs-5" />
            <small>Delete</small>
          </button>
        </div>
      </div>
    </div>
  );
}
