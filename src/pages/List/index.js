import Card from "../../components/Card";

const List = () => {
  return (
    <div className="container">
      <div className="col-6 offset-3 mt-5">
        <h1 className="mb-2">Lista de Desejos</h1>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Adicione um desejo"
          />
          <button class="btn btn-outline-success" type="button">
            Adicionar Desejo
          </button>
        </div>
      </div>
      <div className="row">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default List;
