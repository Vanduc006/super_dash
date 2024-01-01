import supabase from "../config/ConnectToSupabase.js";
export async function NewProduct(name_product,name_brand,name_collection,list_image,callback) {
    try {
        let data = {
            name_product : name_product,
            brand : name_brand,
            collection : name_collection,                                            
            picture : list_image,
            descriptions : '',
            infor : '',
        }
        const { error } = await supabase
        .from('products')
        .insert(data)
        if (error) {
            throw error;
          }
    }
    catch (error) {
        console.error('Error insert:', error.message);
        callback(error.message)
    }
}
