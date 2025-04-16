const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = "https://mybtplobgexmvgkgstjt.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15YnRwbG9iZ2V4bXZna2dzdGp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MzM1NzQsImV4cCI6MjA2MDQwOTU3NH0.tM7j9o482qf6BKTnnapASIiX50PQK80j51GB7-zfj3w";

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
