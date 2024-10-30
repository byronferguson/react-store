import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductPreview } from '../components/ProductPreview';
import { getProductById } from '../services/product.service';

export function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    getProductById(id).then(setProduct);
  });

  return (
    <div>
      <h1>Product Page</h1>
      {product && <ProductPreview product={product} />}
    </div>
  );
}
