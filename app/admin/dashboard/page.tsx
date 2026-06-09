'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LogOut, MessageSquare, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

interface Meeting {
  id: string
  name: string
  email: string
  company?: string
  meeting_date: string
  meeting_time: string
  topic: string
  status: string
  created_at: string
}

interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  status: string
  created_at: string
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'meetings' | 'messages'>('meetings')
  const [meetings, setMeetings] = useState<Meeting[]>([])
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
      return
    }

    // Fetch data
    fetchData()
  }, [router])

  const fetchData = async () => {
    try {
      setLoading(true)
      const [meetingsRes, messagesRes] = await Promise.all([
        fetch('/api/meetings'),
        fetch('/api/contact'),
      ])

      if (meetingsRes.ok) {
        const meetingsData = await meetingsRes.json()
        setMeetings(meetingsData)
      }

      if (messagesRes.ok) {
        const messagesData = await messagesRes.json()
        setMessages(messagesData)
      }
    } catch (err) {
      console.error('Error fetching data:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    router.push('/admin/login')
  }

  const filteredMeetings = meetings.filter((meeting) => {
    const matchesSearch = meeting.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      meeting.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === 'all' || meeting.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const filteredMessages = messages.filter((msg) => {
    const matchesSearch = msg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === 'all' || msg.status === filterStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-card border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nadir_logo-removebg-preview-epBDYMgwcqPEWq4sYip5TwoHg7U7Se.png"
                alt="Nadir"
                width={40}
                height={40}
                className="w-8 h-8"
              />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
          </div>
          <Button
            variant="outline"
            className="gap-2"
            onClick={handleLogout}
          >
            <LogOut size={18} />
            Logout
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border/50">
          <button
            onClick={() => setActiveTab('meetings')}
            className={`px-4 py-3 font-medium border-b-2 transition-colors ${
              activeTab === 'meetings'
                ? 'border-primary text-primary'
                : 'border-transparent text-foreground/70 hover:text-foreground'
            }`}
          >
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              Meetings ({meetings.length})
            </div>
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`px-4 py-3 font-medium border-b-2 transition-colors ${
              activeTab === 'messages'
                ? 'border-primary text-primary'
                : 'border-transparent text-foreground/70 hover:text-foreground'
            }`}
          >
            <div className="flex items-center gap-2">
              <MessageSquare size={18} />
              Messages ({messages.length})
            </div>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Input
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 bg-card border border-border/50 rounded-lg text-foreground focus:outline-none focus:border-primary"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="read">Read</option>
            <option value="unread">Unread</option>
          </select>
        </div>

        {/* Content */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-foreground/70">Loading...</p>
          </div>
        ) : activeTab === 'meetings' ? (
          <MeetingsTable meetings={filteredMeetings} />
        ) : (
          <MessagesTable messages={filteredMessages} />
        )}
      </div>
    </div>
  )
}

function MeetingsTable({ meetings }: { meetings: Meeting[] }) {
  if (meetings.length === 0) {
    return (
      <div className="text-center py-12 bg-card border border-border/50 rounded-lg">
        <Calendar size={32} className="mx-auto text-foreground/40 mb-3" />
        <p className="text-foreground/70">No meetings found</p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto bg-card border border-border/50 rounded-lg">
      <table className="w-full">
        <thead className="border-b border-border/50 bg-background/50">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Email</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Company</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Date & Time</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Topic</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((meeting) => (
            <tr key={meeting.id} className="border-b border-border/30 hover:bg-background/50 transition-colors">
              <td className="px-6 py-4 text-sm text-foreground">{meeting.name}</td>
              <td className="px-6 py-4 text-sm text-foreground/70">{meeting.email}</td>
              <td className="px-6 py-4 text-sm text-foreground/70">{meeting.company || '-'}</td>
              <td className="px-6 py-4 text-sm text-foreground/70">
                {new Date(meeting.meeting_date).toLocaleDateString()} {meeting.meeting_time}
              </td>
              <td className="px-6 py-4 text-sm text-foreground">{meeting.topic}</td>
              <td className="px-6 py-4 text-sm">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  meeting.status === 'confirmed'
                    ? 'bg-green-500/20 text-green-500'
                    : 'bg-yellow-500/20 text-yellow-500'
                }`}>
                  {meeting.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function MessagesTable({ messages }: { messages: ContactMessage[] }) {
  if (messages.length === 0) {
    return (
      <div className="text-center py-12 bg-card border border-border/50 rounded-lg">
        <MessageSquare size={32} className="mx-auto text-foreground/40 mb-3" />
        <p className="text-foreground/70">No messages found</p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto bg-card border border-border/50 rounded-lg">
      <table className="w-full">
        <thead className="border-b border-border/50 bg-background/50">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Email</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Subject</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Message</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Date</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg) => (
            <tr key={msg.id} className="border-b border-border/30 hover:bg-background/50 transition-colors">
              <td className="px-6 py-4 text-sm text-foreground">{msg.name}</td>
              <td className="px-6 py-4 text-sm text-foreground/70">{msg.email}</td>
              <td className="px-6 py-4 text-sm text-foreground">{msg.subject}</td>
              <td className="px-6 py-4 text-sm text-foreground/70 max-w-xs truncate">{msg.message}</td>
              <td className="px-6 py-4 text-sm">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  msg.status === 'read'
                    ? 'bg-blue-500/20 text-blue-500'
                    : 'bg-yellow-500/20 text-yellow-500'
                }`}>
                  {msg.status}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-foreground/70">
                {new Date(msg.created_at).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
