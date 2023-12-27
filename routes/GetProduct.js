import supabase from "../config/ConnectToSupabase.js";

export async function GetProduct(id,callback) {
    let id_product = id
    try {
        // Thực hiện truy vấn để lấy thông tin với ID là 1 từ bảng 'your_table_name'
        const { data, error } = await supabase
          .from('products')
          .select('*')
        //   .eq('id', 1);
        if (error) {
          throw error;
        }
    
        // In ra thông tin lấy được
        console.log('Info:', data);
      } catch (error) {
        console.error('Error getting info:', error.message);
      }
}
GetProduct()