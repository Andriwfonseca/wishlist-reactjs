const Card = ({ item, onRemove = () => {} }) => {
    const keywords = item?.title?.split(" ").join(",");

    return (
        <div
            id={item?.id}
            className="card"
            style={{ width: "25%", padding: 0 }}
        >
            <img
                src={`https://loremflickr.com/320/240/${keywords}`}
                className="card-img-top"
                alt="Tênis Nike"
            />
            <div className="card-body">
                <h5 className="card-title">{item?.title}</h5>
                <button
                    onClick={() => onRemove(item?.id)}
                    className="btn btn-danger"
                >
                    Remover da lista
                </button>
            </div>
        </div>
    );
};

export default Card;
