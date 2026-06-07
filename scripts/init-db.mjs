import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

const SQL = `
-- Create meetings table
CREATE TABLE IF NOT EXISTS meetings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  company VARCHAR(255),
  meeting_date TIMESTAMP NOT NULL,
  meeting_time VARCHAR(10) NOT NULL,
  topic VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(50) DEFAULT 'scheduled',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_meetings_email ON meetings(email);
CREATE INDEX IF NOT EXISTS idx_meetings_status ON meetings(status);
CREATE INDEX IF NOT EXISTS idx_meetings_date ON meetings(meeting_date);
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages(email);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);
`

async function initializeDatabase() {
  try {
    console.log('Initializing database tables...')
    
    // Execute SQL using Supabase admin API
    const { error } = await supabase.rpc('exec', {
      sql: SQL
    }).catch(async () => {
      // If rpc doesn't work, try using pg directly
      const { data, error } = await supabase
        .from('information_schema.tables')
        .select('*')
        .limit(1)
      
      if (!error) {
        console.log('Database connection successful')
        console.log('Please run the following SQL in your Supabase SQL editor:')
        console.log('\n' + SQL)
      }
      return { error }
    })

    if (error) {
      console.log('Note: Use Supabase Dashboard to run the SQL migration')
      console.log('Open your Supabase project and go to SQL Editor, then paste the following:')
      console.log('\n' + SQL)
      console.log('\nAlternatively, run this script after setting up direct database access.')
      return
    }

    console.log('✓ Database tables created successfully!')
  } catch (error) {
    console.error('Database initialization error:', error)
    console.log('\nManual Setup Instructions:')
    console.log('1. Go to your Supabase Dashboard')
    console.log('2. Click on "SQL Editor"')
    console.log('3. Click "New Query"')
    console.log('4. Paste the SQL from database.sql file')
    console.log('5. Click "Run"')
  }
}

initializeDatabase()
