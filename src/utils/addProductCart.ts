import { Product } from "@/types/product";

export default function addProductToCart(
  chaza: string,
  product: Product,
  quantity: number
): boolean {
  const cart: { [index: string]: any } = JSON.parse(
    localStorage.getItem("cart") ?? "{}"
  );
  const newProduct = {
    _id: product._id,
    name: product.name,
    image: product.image,
  };
  const cartChaza: [{ product: any; quantity: number }] = cart[chaza] ?? [];

  const alreadyInCart = cartChaza.find(
    (value) => value.product._id === product._id
  );
  if (alreadyInCart) return false;

  cartChaza.push({ product: newProduct, quantity });

  cart[chaza] = cartChaza;
  localStorage.setItem("cart", JSON.stringify(cart));
  return true;
}
