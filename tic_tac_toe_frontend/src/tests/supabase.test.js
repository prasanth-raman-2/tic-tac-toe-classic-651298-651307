import { supabase } from '../lib/supabaseClient';

test('Supabase client is properly configured', () => {
  expect(supabase).toBeDefined();
  expect(supabase.from).toBeDefined();
  expect(process.env.REACT_APP_SUPABASE_URL).toBeDefined();
  expect(process.env.REACT_APP_SUPABASE_KEY).toBeDefined();
});
