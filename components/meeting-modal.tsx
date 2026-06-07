'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { toast } from 'sonner'

interface MeetingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function MeetingModal({ open, onOpenChange }: MeetingModalProps) {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    meeting_date: '',
    meeting_time: '',
    topic: '',
    description: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/meetings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        toast.error(result.error || 'Failed to schedule meeting')
        return
      }

      toast.success('Meeting scheduled successfully! We will contact you soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        meeting_date: '',
        meeting_time: '',
        topic: '',
        description: '',
      })
      onOpenChange(false)
    } catch (error) {
      console.error('Error:', error)
      toast.error('Failed to schedule meeting. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader className="sticky top-0 bg-card z-10">
          <DialogTitle>Schedule a Meeting</DialogTitle>
          <DialogDescription>
            Let&apos;s discuss how we can work together. Fill in your details and choose a convenient time.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 px-1">
          <div>
            <label className="text-sm font-medium text-foreground">Name *</label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">Email *</label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className="mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">Phone</label>
            <Input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">Company</label>
            <Input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company"
              className="mt-1"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground">Date *</label>
              <Input
                name="meeting_date"
                type="date"
                value={formData.meeting_date}
                onChange={handleChange}
                required
                className="mt-1 w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">Time *</label>
              <Input
                name="meeting_time"
                type="time"
                value={formData.meeting_time}
                onChange={handleChange}
                required
                className="mt-1 w-full"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">Topic *</label>
            <Input
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="e.g., Product Demo, Partnership Discussion"
              required
              className="mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">Additional Details</label>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us more about your requirements..."
              className="mt-1"
              rows={3}
            />
          </div>

          <div className="sticky bottom-0 bg-card pt-4 mt-6 border-t border-border flex gap-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary/90"
              disabled={loading}
            >
              {loading ? 'Scheduling...' : 'Schedule Meeting'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
