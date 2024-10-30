import { Link } from 'react-router-dom';

export function ProductPreview({ product }) {
  console.log('product :>> ', product);

  return (
    <Link to={`/product/${product.id}`}>
      <div className="border-2 border-indigo-500">
        <img src={product.image} alt={product.description} />
        <p>{product.title}</p>
        <p>{product.price}</p>
      </div>
    </Link>
  );
}
