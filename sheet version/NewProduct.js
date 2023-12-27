import { google } from 'googleapis';
import auth from '../config/ConnectToSheet.js';

export async function NewProduct(data, callback) {
  const sheets = google.sheets({ version: 'v4', auth });

  // Bước 1: Lấy giá trị id cuối cùng
  const lastRowResponse = await sheets.spreadsheets.values.get({
    spreadsheetId: "1Hn7P0LLpVL31c_JKezlaUc0jVsAchOk10ZzbwJsMVIw",
    range: 'products!A:G',
  });

  const lastRowId = lastRowResponse.data.values.length;
  console.log(lastRowId)
  // Bước 2: Tăng giá trị id
  const newId = lastRowId + 1;

  // Bước 3: Thêm hàng mới
  const range = `products!A${newId}:G${newId}`;
  const values = [
    [newId, data.name_product, data.brand, data.colllections, data.picture, data.descriptions, data.infor],
  ];
  console.log(values)

  const updateResponse = await sheets.spreadsheets.values.update({
    spreadsheetId: "1Hn7P0LLpVL31c_JKezlaUc0jVsAchOk10ZzbwJsMVIw",
    range,
    valueInputOption: 'RAW',
    resource: {
      values,
    },
  });

//   // Gọi callback hoặc xử lý kết quả khác ở đây
//   callback(updateResponse.data);

//   console.log('Row added successfully:', updateResponse.data);
}
