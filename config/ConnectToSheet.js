import { google } from 'googleapis';

const auth = await google.auth.getClient({
    keyFile: 'secrets.json', // Điều này là tệp tin bạn tải xuống từ Google Cloud Console
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });
export default auth  