
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabaseUrl = 'https://hokajewcmxyuvauozhbk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhva2FqZXdjbXh5dXZhdW96aGJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4MDI0NTMsImV4cCI6MjA2NTM3ODQ1M30.RIf--6co8tjwwDWa2LMh2OjhWUVg_AyNPlF_nHEarIs'
export const supabase = createClient(supabaseUrl, supabaseKey)