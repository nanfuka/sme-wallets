import { Order } from 'src/app/model/buyer/order/order-model';

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


  public  static populateTableOnInit(fromResponse: Order[]) {

    return fromResponse.map(e => {
      console.log(`the naaame ${JSON.stringify(e.buyer.name, null, 2)}`)
      return  {
        orderNo: `ORD-${e.id}`,
        orderDate: e.timestamp,
        orderDueDate: e.orderDueDate,
        senderName: e.buyer.name,
        orderStatus: e.orderStatus,
        action: e.id
      };

    });
  }

}
