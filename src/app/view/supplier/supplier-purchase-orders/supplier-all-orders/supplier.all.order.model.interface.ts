import {Order} from '../../../../model/buyer/order/order-model';
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';

export interface ISupplierAllOrders {
    orderNo: string;
    orderDate: any;
    orderDueDate: any;
    senderName: string;
    orderStatus: string;
    action: any;
  }


export class PopulateSupplierAllOrderTable {

  public static displayedColumns: string[] = [
        "orderNo",
        "orderDate",
        "orderDueDate",
        "senderName",
        "orderStatus",
        "action"
      ];


  public  static populateTableOnInit(fromResponse: SupplierOrder[]) {

    return fromResponse.map(e => {

      return  {
        orderNo: `ORD-${e.id}`,
        orderDate: e.timestamp,
        orderDueDate: e.order.orderDueDate,
        senderName: e.order.buyer.name,
        orderStatus: e.order.orderStatus,
        action: e.id
      };

    });
  }

}
