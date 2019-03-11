import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { MEAT_API } from '../app.api';
import { Order, OrderItem } from './order.model';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService,
                private http: HttpClient) {}

    itemsValue(): number {
        return this.cartService.total();
    };

    cartItems(): CartItem[] {
        return this.cartService.items;
    };

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item);
    };

    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item);
    };

    remove(item: CartItem) {
        this.cartService.removeItem(item);
    };

    clear() {
        this.cartService.clear();
    }

    // No Observable abaixo, poderia trocar o tipo string para Order e retirar o segundo map do método.
    checkOrder(order: Order): Observable<string> {
        return this.http.post<Order>(`${MEAT_API}/orders`, order)
                        .pipe(map(order => order.id))
    };
}