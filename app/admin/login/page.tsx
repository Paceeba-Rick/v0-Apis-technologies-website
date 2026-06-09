'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Invalid password')
        setLoading(false)
        return
      }

      // Store auth token in localStorage
      localStorage.setItem('adminToken', data.token)
      router.push('/admin/dashboard')
    } catch (err) {
      setError('An error occurred. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-foreground/10 shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nadir_logo-removebg-preview-epBDYMgwcqPEWq4sYip5TwoHg7U7Se.png"
                alt="Nadir Technologies"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground">Nadir Admin</h1>
          <p className="text-foreground/70 mt-2">Enter your admin password to access the dashboard</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-card border border-border/50 rounded-2xl p-8">
          <div>
            <label className="text-sm font-medium text-foreground">Admin Password</label>
            <Input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2"
              disabled={loading}
            />
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-500 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <p className="text-center text-foreground/60 text-xs mt-6">
          Nadir Technologies Admin Dashboard
        </p>
      </div>
    </div>
  )
}
