export default function ProductCard({ item, onRemove, onInc, onDec }) {
  return (
    <div>
      <h3>{item.name}</h3>

      <p>Price: {item.price} ₸</p>

      <div>
        <button onClick={() => onDec(item.id)}>-</button>
        <span>{item.qty}</span>
        <button onClick={() => onInc(item.id)}>+</button>
      </div>

      <p>Sum: {item.price * item.qty} ₸</p>

      <button onClick={() => onRemove(item.id)}>
        Delete
      </button>
    </div>
  );
}
