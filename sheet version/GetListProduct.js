import { google } from 'googleapis';
import auth from '../config/ConnectToSheet.js';

export async function GetListProduct(id,callback) {
  const range = `products!A${id}:G${id}`;

  const sheets = google.sheets({ version: 'v4', auth });
  const response = await sheets.spreadsheets.values.get({
      spreadsheetId: "1Hn7P0LLpVL31c_JKezlaUc0jVsAchOk10ZzbwJsMVIw",
      range,
    });
    
  const values = response.data.values;
  callback(values)
  console.log(values)
  // return values
  
}