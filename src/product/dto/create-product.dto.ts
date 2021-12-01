export class CreateProductDto {
  name: string;
  url: string;
  img: string;
  price: number;
  promotional_price: number;
  amount: number;
  id_category: string;
  id_shop: string;
  create_at: Date;
  description: string;
  view_amount: number;
  buy_amount: number;
  properties: number;
  is_show: boolean;
  isHot: boolean;
}
