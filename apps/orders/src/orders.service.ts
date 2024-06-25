import { Injectable } from '@nestjs/common';
import { OrderRepository } from './orders.repository';
import { CreateOrderRequest } from './dto/create-order.request';

@Injectable()
export class OrdersService {
  constructor(private readonly orderRepository: OrderRepository) {}

  async createOrder(request: CreateOrderRequest) {
    return this.orderRepository.create(request);
  }
}
