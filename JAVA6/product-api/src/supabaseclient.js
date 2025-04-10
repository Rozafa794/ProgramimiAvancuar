const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://rkuwpzbrpggyqkukwaoj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrdXdwemJycGdneXFrdWt3YW9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyNzI4NTUsImV4cCI6MjA1OTg0ODg1NX0.2IPsf_Yk5KVcfjUtSUmio6anUAjljxf9XOTL_Ifn2b0';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
