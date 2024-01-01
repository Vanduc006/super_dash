import supabase from "../config/ConnectToSupabase.js";
import { decode } from 'base64-arraybuffer'
export async function UpImage(filename,encode_data) {
    try {
        const { data, error } = await supabase
        .storage
        .from('picture')
        .upload(filename+".png", decode(encode_data), {
          contentType: 'image/png'
        })
        if (error) {
            throw error;
          }
          // console(data)
    }
    catch (error) {
        console.error('Error insert:', error.message);
        // callback(error.message)
    }
}