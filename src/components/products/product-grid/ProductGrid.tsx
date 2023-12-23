import { Product, SizeProduct } from "@/interfaces";
import ProductGridItem from "./ProductGridItem";

interface Props {
  products: Product[];
}

export default function ProductGrid({ products  }: Props) {

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
      {products.map((product) => (
        <ProductGridItem key={product.id} product={product} />
      ))}
    </div>
  );
}
