import { Component } from '@angular/core';
import {LazyLoadEvent, MessageService} from "primeng/api";
import {TableLazyLoadEvent} from "primeng/table";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  visible: boolean;
  columnas: any [];
  loading: boolean;
  totalRecords: number;
  recargar = true;
  controlRowSelection: any;
  dataControl: any[];

  constructor(private _messageService: MessageService,) {
    this.columnas = [
      {field: 'codigoControl', header: 'Código'},
      {field: 'nombreControl', header: 'Detalle'}
    ];
  }
  showDialog() {
    this.visible = true;
  }

  lazyLoad(event: TableLazyLoadEvent): void {
    setTimeout(() => {
      this._messageService.add({severity: 'success', summary: 'Success', detail: 'Data Loaded'});
    }, 0);
  }

  onRowSelect(event: any): void {
    if (event.data) {
      // * unicamente si data existe
      this.controlRowSelection = event.data;
    }
  }

  onRowUnselect(event: any): void {
    // * vamos a borrar los datos temporales
    this.controlRowSelection = null;
  }
}
