import { useEffect, useState } from 'react';
import { ProductPreview } from '../components/ProductPreview.jsx';
import * as ProductService from '../services/product.service.js';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getAllProducts().then(setProducts);
  }, []);

  return (
    <main className="px-8 py-12">
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductPreview product={product} key={product.id} />
        ))}
      </div>
    </main>
  );
}

export default App;
