# Admin Dashboard Setup Guide

## Overview

The Nadir Technologies admin dashboard allows you to view and manage all meeting requests and contact messages submitted through the website.

## Setup Instructions

### 1. Set Admin Password

The admin dashboard is protected by a simple password. You need to set the `ADMIN_PASSWORD` environment variable in your Vercel project.

**Steps:**
1. Go to your **Vercel Project Settings**
2. Navigate to **Environment Variables**
3. Add a new variable:
   - **Name:** `ADMIN_PASSWORD`
   - **Value:** Choose a strong password (e.g., a random 16+ character string)
4. Save and redeploy your project

### 2. Access the Admin Dashboard

Once the environment variable is set:

1. Navigate to `https://yourdomain.com/admin/login`
2. Enter the password you set in the `ADMIN_PASSWORD` environment variable
3. Click "Sign In"
4. You'll be redirected to the admin dashboard

## Features

### Dashboard Tabs

#### Meetings
View all scheduled meeting requests with the following information:
- **Name** - Visitor's name
- **Email** - Visitor's email address
- **Company** - Company name (if provided)
- **Date & Time** - Scheduled meeting date and time
- **Topic** - Topic of discussion
- **Status** - Meeting status (pending, confirmed)

#### Messages
View all contact form submissions with:
- **Name** - Sender's name
- **Email** - Sender's email address
- **Subject** - Message subject
- **Message** - Message content (truncated in table)
- **Status** - Message status (unread, read)
- **Date** - Submission date

### Search & Filter

- **Search:** Use the search box to filter by name or email
- **Status Filter:** Filter results by status (All, Pending, Confirmed, Read, Unread)

## Security Notes

- The admin password is stored as an environment variable and never exposed in your code
- The admin session is stored in browser localStorage using a simple token
- For production with multiple admins, consider upgrading to Supabase Auth with role-based access

## Database Tables

The dashboard connects to two database tables:

### `meetings` table
```sql
CREATE TABLE meetings (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  meeting_date DATE NOT NULL,
  meeting_time TIME NOT NULL,
  topic TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);
```

### `contact_messages` table
```sql
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'unread',
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Troubleshooting

### "Invalid password" error
- Double-check that the password matches exactly what you set in `ADMIN_PASSWORD`
- Ensure the environment variable is deployed (redeploy if recently changed)

### Dashboard shows "No meetings/messages"
- Check that your database tables were created correctly
- Verify that meeting/contact form submissions are actually saving to the database
- Check the browser console for any fetch errors

### Can't access `/admin/login`
- Make sure your project is deployed and running
- Try clearing your browser cache
- Check that no routes are conflicting with `/admin`

## Future Enhancements

Potential features to add:
- Export data to CSV/PDF
- Mark messages as read/archived
- Delete old entries
- Analytics and statistics
- Email notifications for new submissions
- Multi-user admin accounts with Supabase Auth
