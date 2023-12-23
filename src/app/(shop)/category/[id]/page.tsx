import { notFound } from "next/navigation";
import { ProductGrid, Title } from "@/components";

import { initialData } from "@/seed/seed";
import { CategoryProduct } from "@/interfaces";

const products = initialData.products;

interface Props {
  params: {
    id: CategoryProduct;
  };
}

export default function CategoryPage({ params }: Props) {
  const { id: category } = params;

  const productsFilter = products.filter(
    (product) => product.gender === category
  );

  const labels: Record<CategoryProduct, string> = {
    men: "Hombres",
    women: "Mujeres",
    kid: "Niños",
    unisex: "Todos",
  };

  return (
    <>
      <Title
        title="Tienda"
        subtitle={`Articulos para ${labels[category]}`}
        className="mb-3"
      />
      <ProductGrid products={productsFilter} />
    </>
  );
}
