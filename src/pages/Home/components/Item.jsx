const Item = ({ id,note, date, time, deleteData,submitingStatus }) => {
  function deleteItem() {
    submitingStatus.current = true
    deleteData(function (prev) {
      return prev.filter(item => item.id !== id);
    });
  }

  return (
    <div className="item">
      <p>{note}</p>
      <p>{`${date} ${time}`}</p>
      <button onClick={deleteItem} className="remove">
        delete
      </button>
    </div>
  );
};

export default Item;
