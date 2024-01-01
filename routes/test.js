import { createClient } from '@supabase/supabase-js';

// Khởi tạo Supabase Client với thông tin từ Supabase Dashboard
const supabase = createClient('https://lndlekujaavzetmpdraa.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuZGxla3VqYWF2emV0bXBkcmFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NTc0MDksImV4cCI6MjAxOTIzMzQwOX0.33dXT6jDH6DCSJzyeo4VWrUPQuPrk4mMoWr0GyZUJvg');

async function getDataById() {
  try {
    // Thực hiện truy vấn để lấy dữ liệu với ID là 1 từ bảng 'your_table_name'
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id_product', 1);

    if (error) {
      throw error;
    }

    // In ra dữ liệu lấy được
    console.log('Data by ID:', data);
  } catch (error) {
    console.error('Error getting data by ID:', error.message);
  }
}

// Gọi hàm để thực hiện việc lấy dữ liệu
getDataById();
