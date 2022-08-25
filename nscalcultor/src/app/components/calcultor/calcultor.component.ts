import { Component, OnInit } from '@angular/core';
import { Calculatordata} from '../../Models/cmlCalcultor';

@Component({
  selector: 'app-calcultor',
  templateUrl: './calcultor.component.html',
  styleUrls: ['./calcultor.component.scss']
})
export class CalcultorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "Dev ผ่านศึก";
  str = '';
  cTotal = 0;

  oData = new Calculatordata();

  C_SUMxData(){
    this.str = "ค่าจากแบบฟอร์ม : " + JSON.stringify(this.oData);
    this.cTotal = Number(this.oData.rc_para1) + Number(this.oData.rc_para2);
    //window.alert(this.cTotal);
    }

  C_RSTxData(){
    this.oData = new Calculatordata();
    this.str = "ค่าจากแบบฟอร์ม : " + JSON.stringify(this.oData);
    this.cTotal = Number(this.oData.rc_para1) + Number(this.oData.rc_para2);
  }

}
