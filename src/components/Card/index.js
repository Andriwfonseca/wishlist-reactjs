const Card = () => {
  return (
    <div class="card" style={{ width: "25%" }}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyTwys7LrLAWu9VqXGl2EDwOP-iQr1h0WuxUG_MJRttAwQZ2i3dBHmJpzg5L9rLHYPFU&usqp=CAU"
        class="card-img-top"
        alt="Tênis Nike"
      />
      <div class="card-body">
        <h5 class="card-title">Tênis Nike</h5>
        <a href="#" class="btn btn-danger">
          Remover da lista
        </a>
      </div>
    </div>
  );
};

export default Card;
