import { Component, ViewChild, } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http'

import * as XLSX from 'xlsx';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http: HttpClient) { }


  agGrid!: AgGridAngular;


  onGridReady(params: any): void {
    this.agGrid = params.api;
    console.log(params, this.rowData)

  }



  importExcelData(fileInput: any): void {
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        var a: any[] = XLSX.utils.sheet_to_json(worksheet, { raw: true });
        // console.log(this.agGrid, this.rowData)
        // console.log(this.gridOptions.api?.setRowData(this.rowData));
        this.rowData = a;
        console.log(this.gridOptions.rowData, a, this.rowData);
        this.gridOptions.api?.setRowData(a);


        // if (this.agGrid) {
        //   this.agGrid.api.refreshCells();
        //   console.log(this.agGrid.api)
        // }
        // console.log(this.rowData)
        // console.log("THis is a", a);
        // Define your column definitions based on your Excel data.
        // You may need to process the data as needed.
        // this.agGrid.api.refreshCells();

      };
      // console.log(this.rowData)
      reader.readAsArrayBuffer(file);
      // console.log(this.rowData);

    }
  }



  title = 'agGridApp';

  rowData = [
    { "child": "DRAGG", "Row": "AGG", "sod": 8, "sofr": 0, "total": 8 },
    { "child": "VPAGG", "Row": "AGG", "sod": 6, "sofr": 0, "total": 6 },
    { "child": "COOK", "Row": "AGG", "sod": 4, "sofr": 2, "total": 6 },
    { "child": "COOK", "Row": "AGG", "sod": 4, "sofr": 2, "total": 6 },
    { "child": "CSTATEHW", "Row": "AGG", "sod": 4, "sofr": 2, "total": 6 },
    { "child": "PAAGG", "Row": "AGG", "sod": 4, "sofr": 2, "total": 6 },
    { "child": "jackson", "Row": "AGG", "sod": 4, "sofr": 2, "total": 6 },
    { "child": "ENAGG", "Row": "AGG", "sod": 4, "sofr": 2, "total": 6 },
    { "child": "EBDLAAG", "Row": "AGG", "sod": 4, "sofr": 2, "total": 6 },
    { "child": "BKAG", "Row": "AGG", "sod": 4, "sofr": 2, "total": 6 },
    { "child": "EFGH", "Row": "BLOOMBERG BARCLAYS 1-5 CORP INDEX", "sod": 4, "sofr": 2, "total": 6 },
    { "child": "ABCD", "Row": "BLOOMBERG BARCLAYS 1-5 CORP INDEX", "sod": 4, "sofr": 2, "total": 6 },
    { "child": "ABCD", "Row": "BLOOMBERG BARCLAYS 1-5 CORP INDEX", "sod": 4, "sofr": 2, "total": 6 },
    { "child": "XYZ", "Row": "BLOOMBERG BARCLAYS 50% GOVERNMENT 1-3 YEAR", "sod": 4, "sofr": 2, "total": 6 },
    { "child": "PQR", "Row": "BLOOMBERG BARCLAYS 50% GOVERNMENT 1-3 YEAR", "sod": 4, "sofr": 2, "total": 6 },

  ]

  gridOptions: GridOptions = {
    columnDefs: [
      { field: 'Row', headerName: 'Row Label', rowGroup: true, hide: true },
      { field: 'sod', headerName: 'Sum of Diff', aggFunc: 'sum', enableValue: true },
      { field: 'sofr', headerName: 'Sum of Fund Return', aggFunc: 'sum', enableValue: true },

    ],
    rowData: this.rowData,
    defaultColDef: {
      flex: 1,
      minWidth: 120,
      resizable: true,
      sortable: true,
    },
    autoGroupColumnDef: {
      flex: 1,
      minWidth: 280,
      field: 'child',
    },

    animateRows: true,
  };







}
