const BASE_URL = 'https://fakestoreapi.com';

export async function getAllProducts({ limit, sort } = {}) {
  const params = new URLSearchParams();

  if (limit) {
    params.set('limit', limit);
  }

  if (sort) {
    params.set('sort', sort);
  }

  const url = `${BASE_URL}/products` + (params.size ? params.toString() : '');

  const res = await fetch(url);

  if (!res.ok) throw new Error(res.statusText);

  return res.json();
}

export async function getProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);

  if (!res.ok) throw new Error(res.statusText);

  return res.json();
}

export async function getProductCategories() {
  const res = await fetch(`${BASE_URL}/products/cate`);

  if (!res.ok) throw new Error(res.statusText);

  return res.json();
}

export async function getAllProductsByCategory(category, { limit, sort } = {}) {
  const params = new URLSearchParams();

  if (limit) {
    params.set('limit', limit);
  }

  if (sort) {
    params.set('sort', sort);
  }

  const url =
    `${BASE_URL}/products/categories/${category}` +
    (params.size ? params.toString() : '');

  const res = await fetch(url);

  if (!res.ok) throw new Error(res.statusText);

  return res.json();
}
