import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lxzxeawizzdgtxygftqj.supabase.co'
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4enhlYXdpenpkZ3R4eWdmdHFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4MTE5MDcsImV4cCI6MjA2OTM4NzkwN30.yyblZzOaXvBum0LyDg270dxja3MmXxFteel2SXYu9Wg"


export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };

};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  return { error };
};

export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};