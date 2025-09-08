# Supabase Integration Documentation

## Environment Variables

The following environment variables are required for Supabase integration:

- `REACT_APP_SUPABASE_URL`: The URL of your Supabase project
- `REACT_APP_SUPABASE_KEY`: The anon/public key of your Supabase project

## Current Configuration

The Supabase client is configured in `src/lib/supabaseClient.js`. This exports a pre-configured Supabase client that can be imported and used throughout the application.

### Usage Example

```javascript
import { supabase } from '../lib/supabaseClient'

// Example query
const { data, error } = await supabase
  .from('your_table')
  .select('*')
```

## URL Configuration

The application uses a utility function in `src/utils/getURL.js` to handle site URLs consistently across development and production environments.

## Security Notes

- The public/anon key is safe to commit to version control
- Keep the service_role key secure and never expose it in the frontend code
- Use Row Level Security (RLS) policies in Supabase to secure your data
