export interface Category{
  id: string;
  name: string;
}

export interface Product{
  id: string;
  title: string;
  price: number;
  images: string[];
  description: string;
  category: Category;
}

//*POST
export interface CreateProductDTO extends Omit<Product, 'id'|'category'>{
  categoryId: number;
}

//*PATCH  partial add ?:
export interface UpdateProductDTO extends Partial<CreateProductDTO>{

}
