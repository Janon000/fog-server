import Excel from "exceljs";
import path from 'path';
import fs from 'fs';

const filePath = path.join(process.cwd(), 'src', 'Data.xlsx');



  export const excelToArray = async (): Promise<DeviceRowData[]> => {
    const workbook = new Excel.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.worksheets[0];
  
    const data: DeviceRowData[] = [];
    const headers: Array<keyof DeviceRowData | undefined> = [];
  
    worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
      const rowData: any = {} as DeviceRowData; // type error
      row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
        const value = cell.value;
  
        if (rowNumber === 1) {
          // Store the header names from the first row
          headers[colNumber] = value as keyof DeviceRowData;
        } else {
          // Map the data to objects using the header names as keys
          const header = headers[colNumber];
          if (header) {
            // Trim the value to remove any leading or trailing white spaces
            rowData[header] = String(value).trim();
          }
        }
      });
  
      // Exclude the first row (headers) from the data array
      if (rowNumber !== 1) {
        data.push(rowData);
      }
    });
    return data;
  };