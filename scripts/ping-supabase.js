// Script to ping Supabase to keep it alive
// Run this every few days to prevent the free tier from pausing

require('dotenv').config({ path: '.env.local' });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

async function pingSupabase() {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Pinging Supabase to keep it alive...`);

  try {
    // Simple health check query
    const response = await fetch(`${SUPABASE_URL}/rest/v1/`, {
      method: 'GET',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });

    if (response.ok) {
      console.log(`[${timestamp}] ✓ Supabase ping successful! Status: ${response.status}`);
    } else {
      console.error(`[${timestamp}] ✗ Supabase ping failed. Status: ${response.status}`);
    }
  } catch (error) {
    console.error(`[${timestamp}] ✗ Error pinging Supabase:`, error.message);
    process.exit(1);
  }
}

pingSupabase();
