import { useState, useEffect } from "react";

function List({ products, setProduct }) {
  const [filterText, setFilterText] = useState("");
  const [newStock, setNewStock] = useState({ id: 0, stock: 1 });

  const changeStock = (item, flag) => {
    products.map((object) => {
      if (item.id === object.id) {
        if (flag) {
          object.stock =
            parseInt(object.stock) +
            parseInt(
              item.id !== newStock.id || newStock.stock.length < 1
                ? 1
                : newStock.stock
            );
        } else {
          object.stock > 0
            ? (object.stock =
                parseInt(object.stock) -
                parseInt(
                  item.id !== newStock.id || newStock.stock.length < 1
                    ? 1
                    : newStock.stock
                ))
            : (object.stock = 0);
        }
        setProduct([...products]);
        setNewStock({ id: null, stock: 1 });
      }

      return object;
    });
  };

  const filtered = products.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  const onChangeInput = (thisStock, id) => {
    console.log(thisStock);
    console.log(id);

    setNewStock({
      id: id,
      stock: thisStock,
    });
  };

  return (
    <div>
      <input
        placeholder="Ürün ara..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((product, i) => (
          <li key={i}>
            <span>
              {product.productName} ({product.stock}){" "}
            </span>
            <div key={i} className="btn">
              {" "}
              <input
                type={"number"}
                value={newStock.id === i ? newStock.stock : 1}
                onChange={(e) => {
                  onChangeInput(e.target.value, i);
                }}
                style={{ width: 60 }}
              />
              <button
                type={"button"}
                onClick={() => {
                  changeStock(product, true);
                }}
              >
                Ekle
              </button>
              <button
                type={"button"}
                onClick={() => {
                  changeStock(product, false);
                }}
              >
                Cikar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p>Toplam Urun: ({filtered.length})</p>
    </div>
  );
}

export default List;
