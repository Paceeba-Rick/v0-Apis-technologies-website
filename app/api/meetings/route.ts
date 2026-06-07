import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { name, email, phone, company, meeting_date, meeting_time, topic, description } = body

    // Validate required fields
    if (!name || !email || !meeting_date || !meeting_time || !topic) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Insert meeting into database
    const { data, error } = await supabase
      .from('meetings')
      .insert([
        {
          name,
          email,
          phone: phone || null,
          company: company || null,
          meeting_date,
          meeting_time,
          topic,
          description: description || null,
          status: 'scheduled',
        },
      ])
      .select()

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to schedule meeting' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Meeting scheduled successfully',
        data,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET endpoint to fetch all meetings (admin)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')

    let query = supabase.from('meetings').select('*')

    if (status) {
      query = query.eq('status', status)
    }

    const { data, error } = await query.order('meeting_date', { ascending: true })

    if (error) {
      return NextResponse.json(
        { error: 'Failed to fetch meetings' },
        { status: 500 }
      )
    }

    return NextResponse.json({ data })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
