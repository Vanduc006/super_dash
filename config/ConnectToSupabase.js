import { createClient } from '@supabase/supabase-js';
import 'dotenv/config'
// Khởi tạo một kết nối đến Supabase
const supabase = createClient('https://lndlekujaavzetmpdraa.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuZGxla3VqYWF2emV0bXBkcmFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NTc0MDksImV4cCI6MjAxOTIzMzQwOX0.33dXT6jDH6DCSJzyeo4VWrUPQuPrk4mMoWr0GyZUJvg");
export default supabase