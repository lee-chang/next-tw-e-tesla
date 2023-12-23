export interface Product{
  id?: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: SizeProduct[];
  slug: string;
  tags: string[];
  title: string;
  type: TypeProduct;
  gender: CategoryProduct
}

export type CategoryProduct = 'men'|'women'|'kid'|'unisex'
export type SizeProduct = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
export type TypeProduct = 'shirts'|'pants'|'hoodies'|'hats';