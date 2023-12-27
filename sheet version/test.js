import { google } from 'googleapis';
import auth from '../config/ConnectToSheet.js';

async function appendToSheet() {
  const sheets = google.sheets({ version: 'v4', auth });

  const spreadsheetId = '1Hn7P0LLpVL31c_JKezlaUc0jVsAchOk10ZzbwJsMVIw';
  const range = 'Sheet1'; // Chọn tên bảng tính hoặc phạm vi cụ thể (ví dụ: 'Sheet1!A1:B2')

  const values = [
    ['New Value1', 'New Value2'],
    ['New Value3', 'New Value4'],
  ];

  const resource = {
    values,
  };

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW', // Có thể sử dụng 'USER_ENTERED' nếu bạn muốn áp dụng định dạng người dùng
      insertDataOption: 'INSERT_ROWS', // Sử dụng 'OVERWRITE' nếu bạn muốn ghi đè dữ liệu
      resource,
    });

    console.log('Appended data:', response.data);
  } catch (error) {
    console.error('Error appending to sheet:', error.message);
  }
}

// Gọi hàm để thực hiện việc thêm dữ liệu
appendToSheet();
