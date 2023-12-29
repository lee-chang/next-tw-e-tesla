import { QuantitySelector, SizeSelector } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import { notFound } from "next/navigation";

const products = initialData.products;

interface Props {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: Props) {
  const { slug } = params;

  const product = products.find((product) => product.slug === slug);

  if (!product) return notFound();

  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">
      {/* SlideShow */}
      <div className="col-span-1 md:col-span-2">
        <Image
          src={`/products/${product.images[0]}`}
          alt={product.title}
          width={500}
          height={500}
        />
      </div>

      <div className="col-span-1 px-5">
        {/* Detalles */}
        <div className="col-span-1">
          <h1
            className={`${titleFont.className} antialiased font-bold text-xl`}
          >
            {product.title}
          </h1>
          <p className="text-lg mb-5">$ {product.price}</p>
        </div>

        {/* Selector de Tallas */}
        <SizeSelector selectedSize={product.sizes[0]} avalibleSize={product.sizes} />
        {/* Selector de Cantidad */}
        <QuantitySelector  quantity={2}/>

        {/* Boton add to cart */}
        <button className="btn-primary my-5">Agregar al carrito</button>

        {/* Description */}

        <div>
          <h2 className="font-bold text-lg">Descripción</h2>
          <p>{product.description}</p>
        </div>
      </div>

      {/* Productos relacionados */}
    </div>
  );
}
