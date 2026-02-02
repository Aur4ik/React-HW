import ProductCard from "./ProductCard";

export default function ProductList({ items, onRemove, onInc, onDec }) {
  return (
    <div>
      {items.map(item => (
        <ProductCard
          key={item.id}
          item={item}
          onRemove={onRemove}
          onInc={onInc}
          onDec={onDec}
        />
      ))}
    </div>
  );
}
