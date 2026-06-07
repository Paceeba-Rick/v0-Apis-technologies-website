# Database Setup Guide for Nadir Technologies

## Overview
This guide explains how to set up the Supabase database tables for the Nadir Technologies website, including meetings scheduling and contact messages functionality.

## Prerequisites
- Supabase account and project created
- Environment variables configured in `.env.local`

## Setup Instructions

### 1. Create Database Tables

Run the SQL commands from `database.sql` in your Supabase SQL editor:

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Create a new query
4. Copy and paste the contents of `database.sql`
5. Execute the query

This will create two tables:
- **meetings**: Stores scheduled meeting requests
- **contact_messages**: Stores contact form submissions

### 2. Table Schemas

#### Meetings Table
```
- id (UUID): Primary key
- name (VARCHAR): Visitor's name
- email (VARCHAR): Visitor's email
- phone (VARCHAR): Optional phone number
- company (VARCHAR): Optional company name
- meeting_date (TIMESTAMP): Requested meeting date
- meeting_time (VARCHAR): Requested meeting time
- topic (VARCHAR): Meeting topic/subject
- description (TEXT): Additional details
- status (VARCHAR): Meeting status (default: 'scheduled')
- created_at (TIMESTAMP): Creation timestamp
- updated_at (TIMESTAMP): Last update timestamp
```

#### Contact Messages Table
```
- id (UUID): Primary key
- name (VARCHAR): Sender's name
- email (VARCHAR): Sender's email
- subject (VARCHAR): Message subject
- message (TEXT): Message body
- status (VARCHAR): Message status (default: 'new')
- created_at (TIMESTAMP): Creation timestamp
- updated_at (TIMESTAMP): Last update timestamp
```

## API Endpoints

### Schedule a Meeting
**POST** `/api/meetings`

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "company": "Acme Corp",
  "meeting_date": "2026-06-15",
  "meeting_time": "14:30",
  "topic": "Product Demo",
  "description": "Want to discuss partnership opportunities"
}
```

Response:
```json
{
  "success": true,
  "message": "Meeting scheduled successfully",
  "data": { /* meeting object */ }
}
```

### Get Meetings
**GET** `/api/meetings?status=scheduled`

Optional query parameters:
- `status`: Filter by status (scheduled, confirmed, completed, cancelled)

### Submit Contact Message
**POST** `/api/contact`

Request body:
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Inquiry",
  "message": "I'm interested in your services"
}
```

Response:
```json
{
  "success": true,
  "message": "Message sent successfully",
  "data": { /* message object */ }
}
```

### Get Contact Messages
**GET** `/api/contact?status=new`

Optional query parameters:
- `status`: Filter by status (new, read, archived)

## Features

### 1. Schedule a Meeting
- Users can click the "Schedule a Meeting" button on the portfolio section
- A modal dialog opens with a form
- Required fields: name, email, meeting date, meeting time, topic
- Optional fields: phone, company, description
- Submitted meetings are saved to the database
- Success toast notification appears when meeting is scheduled

### 2. Contact Form
- Users can submit contact messages through the contact section
- Form validates required fields
- Messages are automatically saved to the database
- Submission feedback displayed with toast notifications

### 3. Admin Dashboard (Future)
- API endpoints allow fetching all meetings and messages
- Filter by status for organization
- Export data for analysis

## Environment Variables Required

Make sure these are set in your `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## Testing

### Test Meeting Scheduling
1. Navigate to the website
2. Scroll to "Massive Market Size & Growth Potential" section
3. Click "Schedule a Meeting" button
4. Fill in the form with test data
5. Click "Schedule Meeting"
6. Verify success message appears
7. Check Supabase database to confirm record was created

### Test Contact Form
1. Scroll to "Get in Touch" section
2. Fill in the contact form
3. Click "Send Message"
4. Verify success message appears
5. Check Supabase database to confirm record was created

## Monitoring

You can monitor submissions in Supabase:

1. Go to your Supabase project dashboard
2. Navigate to the Table Editor
3. Select `meetings` or `contact_messages` table
4. View all submissions with timestamps
5. Mark meetings as confirmed/completed by updating status
6. Mark messages as read/archived by updating status

## Troubleshooting

### "Failed to schedule meeting" error
- Check that Supabase credentials are correct in environment variables
- Verify the database tables were created successfully
- Check browser console for detailed error messages

### Messages not appearing in database
- Verify SUPABASE_SERVICE_ROLE_KEY is set correctly
- Check API response in network tab of browser dev tools
- Ensure database tables have proper permissions

## Future Enhancements

- Email notifications when meetings are scheduled
- Admin dashboard for managing meetings and messages
- Calendar integration for meeting scheduling
- Automated reminder emails
- Meeting confirmation and status updates
