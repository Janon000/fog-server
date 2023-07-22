import Excel from "exceljs";
import path from 'path';
import fs from 'fs';

// const filePath = path.join('C:/User/Bridgette/React/fog', 'src', 'Data.xlsx');
const filePath = path.join(process.cwd(), 'src', 'Data.xlsx');
// console.log(filePath)


export const excelToObject = async (sheetName?: string): Promise<{ [key: string]: DataRow[] }> => {
  const workbook = new Excel.Workbook();
  await workbook.xlsx.readFile(filePath);

  const dataObject: { [key: string]: DataRow[] } = {};

  // If sheetName is provided, process only that sheet, otherwise process all sheets
  const sheetsToProcess = sheetName ? [workbook.getWorksheet(sheetName)] : workbook.worksheets;

  for (const worksheet of sheetsToProcess) {
    const data: DataRow[] = [];
    const headers: Array<string | undefined> = [];

    worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
      const rowData: DataRow = {};

      row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
        const value = cell.value;

        if (rowNumber === 1) {
          // Store the header names from the first row
          headers[colNumber] = String(value).trim();
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

    dataObject[worksheet.name] = data;
  }

  return dataObject;
};