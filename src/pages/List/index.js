import { useState } from "react";
import Card from "../../components/Card";
import uuid from "react-uuid";

const List = () => {
    const [wishItem, setWishItem] = useState("");
    const [wishList, setWishList] = useState([
        {
            id: uuid(),
            title: "Tênis Nike",
        },
    ]);

    const addWishItem = () => {
        const newWishItem = {
            id: uuid(),
            title: wishItem,
        };

        setWishList([...wishList, newWishItem]);
    };

    return (
        <div className="container">
            <div className="col-6 offset-3 mt-5 text-center">
                <h1 className="mb-2">Lista de Desejos</h1>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Adicione um desejo"
                        onChange={(e) => {
                            setWishItem(e.target.value);
                        }}
                    />
                    <button
                        className="btn btn-outline-success"
                        type="button"
                        onClick={addWishItem}
                    >
                        Adicionar Desejo
                    </button>
                </div>
            </div>
            <div className="row mt-5">
                {wishList?.map((item) => (
                    <Card item={item} />
                ))}
            </div>
        </div>
    );
};

export default List;
