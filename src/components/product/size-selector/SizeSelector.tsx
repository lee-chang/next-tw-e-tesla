import type { SizeProduct } from "@/interfaces";
import clsx from "clsx";

interface Props {
  selectedSize: SizeProduct;
  avalibleSize: SizeProduct[];
}

export default function SizeSelector({ selectedSize, avalibleSize }: Props) {
  return (
    <div className="my-5">
      <h3 className="mb-4 font-bold">Tallas disponibles</h3>
    
    <div className="flex" >
      {
        avalibleSize.map((size) => (
          <button
            key={size}
            className={clsx(
              "mx-2  hover:underline text-lg",
              {
                "underline" : size === selectedSize,
                
              }
            )}
          >
            {size}
          </button>
        ))
      }
    </div>
    
    </div>
  );
}
