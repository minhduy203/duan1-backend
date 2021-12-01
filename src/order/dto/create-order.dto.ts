export class CreateOrderDto {
  delivery_address: string;
  delivery_status: number;
  total_money: number;
  created_at: Date;
  completed_at: Date;
  payment_status: number;
  id_deliver: string;
  id_client: string;
  id_shop: string;
}
