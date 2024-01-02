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
          <h3
            className={`${listClass}-title category-title`}
            id={`${listId}-${listClass}-title`}
          >
            {listTitle}
          </h3>
        </div>
        <div
          className={`${listClass}-list-parent`}
          id={`${listId}-${listClass}-list-parent`}
        >
          <div className={`${listClass}-list category-list`} id={`${listId}-list`}>
            {listContent.join(" | ")}
          </div>
        </div>
      </div>
    </>
  );
};

export default Listerine;
