// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://frzzikjngzjeakncasfu.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyenppa2puZ3pqZWFrbmNhc2Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MDAzMzUsImV4cCI6MjA2MjA3NjMzNX0.qlWtI6K1P56GdqNvwFwRqHlB7bAXtj8kmp0KAjpoDVM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);