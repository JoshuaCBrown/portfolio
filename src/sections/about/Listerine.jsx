import "../../style/Listerine.css";

const Listerine = ({ listContent, listTitle, listClass, listId }) => {
  return (
    <>
      <div
        className={`${listClass}-container`}
        id={`${listId}-${listClass}-container`}
        key={`${listId}${listClass}Key`}
      >
        <div className={`${listClass}-heading`}>
          <h2
            className={`${listClass}-title`}
            id={`${listId}-${listClass}-title`}
          >
            {listTitle}
          </h2>
        </div>
        <div
          className={`${listClass}-list-parent`}
          id={`${listId}-${listClass}-list-parent`}
        >
          <div className={`${listClass}-list`} id={`${listId}-list`}>
            {listContent.join(" | ")}
          </div>
        </div>
      </div>
    </>
  );
};

export default Listerine;
