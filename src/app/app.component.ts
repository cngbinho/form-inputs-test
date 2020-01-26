import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "projeto-teste";

  arrFields: any = [0, 1, 2];
  arrColumns: any = [0, 1, 2];
  fieldsValue: any = [];
  totalValue: any = [0, 0, 0];
  geralTotal = 0;

  showLog(event?, field?) {
    this.fieldsValue[field] = event;

    this.sumTotal();
  }

  sumTotal() {
    this.totalValue[0] = 0;
    this.totalValue[1] = 0;
    this.totalValue[2] = 0;

    Object.keys(this.fieldsValue).map(item => {
      this.totalValue[Number(item.split("-")[1])] += this.fieldsValue[item];
    });

    this.geralTotal = this.totalValue
      .map(item => item)
      .reduce((curValue = 0, nextValue) => (curValue += nextValue));
  }
}
