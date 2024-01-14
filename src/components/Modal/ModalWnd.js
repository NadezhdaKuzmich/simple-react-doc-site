import "./ModalWnd.css";

const ModalWnd = ({ visible, handleDestroy, handleDelete }) => {
  if (!visible) {
    return null;
  }

  const closeModal = (event) => {
    if (event.target.className === "modal") {
      handleDestroy();
    }
  };

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content">
        <i className="close-btn" onClick={handleDestroy}>
          &#x2715;
        </i>
        <h1>Delete this post?</h1>
        <div className="btns">
          <button className="accept" onClick={handleDelete}>
            Yes, delete
          </button>
          <button className="reject" onClick={handleDestroy}>
            No, let it be
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalWnd;
