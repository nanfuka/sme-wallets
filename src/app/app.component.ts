import { Component, OnInit } from "@angular/core";
import { WebsocketService } from "./utils/websocket/websocket.service";
import { HttpClient } from "@angular/common/http";
import { HttpService } from "./utils/http/http-service";
import { Order } from "./model/buyer/order/order-model";
import { ObjectsUtil } from './utils/objects/objects';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "sme-wallets";
  


  constructor(
    private websocketService: WebsocketService,
    private httpService: HttpService<Order>,
    private objectsUtil: ObjectsUtil<Order>
  ) {
    this.theNotice();
  }

  ngOnInit() {
  }

  theNotice(): void {
    
          this.websocketService.notify("/topic/orders/findAll", this.test);

  }

  test(result): void {
    var x = this.objectsUtil.dataObjectToArray(result.body)
    console.log(`rrrrrrrr: ${x}`);
  }
}
