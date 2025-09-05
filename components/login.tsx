"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface LoginProps {
  onLoginSuccess: () => void
}

export default function Login({ onLoginSuccess }: LoginProps) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === "sooy" && password === "i love cats") {
      onLoginSuccess()
    } else {
      setError("Invalid username or password")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-black/30 backdrop-blur-lg rounded-lg p-8 shadow-2xl">
        <h1 className="text-2xl font-bold text-center text-pink-400 mb-6">
          Login to our world❤️ 
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-pink-200 mb-2">
              Username
            </label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="bg-white/10 border-pink-300/50 text-white placeholder:text-pink-200/50 focus:border-pink-400"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-pink-200 mb-2">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="bg-white/10 border-pink-300/50 text-white placeholder:text-pink-200/50 focus:border-pink-400"
              required
            />
          </div>
          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}
