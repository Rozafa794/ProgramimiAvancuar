const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://zuknzufbcjrkrhnatalm.supabase.co'; // Replace with your actual URL
const supabaseKey = 'your-anon-key'; // Replace with your anon public key

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
