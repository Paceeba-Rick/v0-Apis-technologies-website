# Database Setup Guide for Nadir Technologies

## Quick Setup Instructions

Follow these steps to create the database tables needed for meetings and contact messages:

### Step 1: Access Supabase SQL Editor
1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Click on **"SQL Editor"** in the left sidebar
4. Click **"New Query"** button

### Step 2: Create Tables

Copy and paste the following SQL into the SQL editor:

```sql
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

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_meetings_email ON meetings(email);
CREATE INDEX IF NOT EXISTS idx_meetings_status ON meetings(status);
CREATE INDEX IF NOT EXISTS idx_meetings_date ON meetings(meeting_date);
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages(email);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);
```

### Step 3: Execute the Query
1. Click the **"Run"** button or press `Ctrl+Enter` (`Cmd+Enter` on Mac)
2. You should see a success message
3. The tables are now created!

### Step 4: Verify Tables
1. Click on **"Table Editor"** in the left sidebar
2. You should see both `meetings` and `contact_messages` tables listed

## Table Descriptions

### Meetings Table
Stores scheduled meeting requests from the portfolio section.

**Columns:**
- `id` - UUID primary key
- `name` - Visitor's name
- `email` - Visitor's email address
- `phone` - Contact phone number (optional)
- `company` - Company name (optional)
- `meeting_date` - Date of requested meeting
- `meeting_time` - Preferred time for meeting
- `topic` - Meeting topic
- `description` - Additional details about the meeting
- `status` - Meeting status (scheduled, confirmed, completed, cancelled)
- `created_at` - When the request was created
- `updated_at` - Last update timestamp

### Contact Messages Table
Stores messages submitted through the contact form.

**Columns:**
- `id` - UUID primary key
- `name` - Sender's name
- `email` - Sender's email address
- `subject` - Message subject
- `message` - Message content
- `status` - Message status (new, read, archived)
- `created_at` - When the message was sent
- `updated_at` - Last update timestamp

## Testing the Setup

### Test Meeting Submission
1. Go to your website
2. Scroll to "Massive Market Size & Growth Potential" section
3. Click "Schedule a Meeting"
4. Fill out the form and submit
5. Check Supabase Table Editor → meetings table
6. Your meeting should appear there!

### Test Contact Message Submission
1. Go to your website
2. Scroll to the Contact section at the bottom
3. Fill out and submit the contact form
4. Check Supabase Table Editor → contact_messages table
5. Your message should appear there!

## API Integration

The following API endpoints are already configured:

- `POST /api/meetings` - Submit a new meeting request
- `POST /api/contact` - Submit a contact message
- `GET /api/meetings` - Retrieve meetings
- `GET /api/contact` - Retrieve contact messages

## Troubleshooting

### Tables not appearing?
1. Refresh the Supabase dashboard
2. Check that you're in the correct project
3. Verify the SQL executed without errors (check the "Run" button response)

### API errors when submitting forms?
1. Ensure the environment variables are set correctly
2. Check browser console for error messages
3. Verify tables exist in Supabase dashboard

### Need more help?
- Check the DATABASE_SETUP.md file for more technical details
- Refer to Supabase documentation: https://supabase.com/docs
