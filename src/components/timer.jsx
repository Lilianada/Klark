'use client'
import { useEffect, useState } from 'react'

export default function Timer() {
  const [isClockedIn, setIsClockedIn] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0) // Elapsed time in seconds
  const [currentTime, setCurrentTime] = useState(new Date()) // Live clock

  // Function to format time (HH:MM:SS)
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  // Function to display current time in HH:MM:SS format
  const formatCurrentTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    return `${hours}:${minutes}:${seconds}`
  }

  // Handle clocking in
  const handleClockIn = () => {
    if (!isClockedIn) {
      setIsClockedIn(true)
    }
  }

  // Handle clocking out
  const handleClockOut = () => {
    if (isClockedIn) {
      setIsClockedIn(false)
    }
  }

  // Update the current time every second
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timerId) // Cleanup interval on unmount
  }, [])

  // Track elapsed time when clocked in
  useEffect(() => {
    let intervalId
    if (isClockedIn) {
      intervalId = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1)
      }, 1000)
    }
    return () => clearInterval(intervalId) // Cleanup interval when clocking out
  }, [isClockedIn])

  // Automatically clock out at 5:00 PM
  useEffect(() => {
    const clockOutTime = new Date()
    clockOutTime.setHours(17, 0, 0) // Set to 5:00 PM

    const now = new Date()
    const timeRemaining = clockOutTime - now

    if (timeRemaining > 0 && isClockedIn) {
      const timer = setTimeout(() => {
        handleClockOut()
      }, timeRemaining)

      return () => clearTimeout(timer)
    }
  }, [isClockedIn])

  return (
      <div>
      <div className="text-3xl/8 font-semibold sm:text-xl/8">{formatTime(elapsedTime)}</div>

        {/* <div className="mx-6 mt-4 rounded-lg border border-zinc-700 p-4">
          <p>Office Hours - 09:00am to 05:00pm</p>
          <p>Break Time - 12:30pm to 13:00pm</p>
          <p>Current Time - {formatCurrentTime(currentTime)}</p>
        </div> */}
      
      <div className="mt-4 flex items-center gap-6">
        <button onClick={handleClockIn} disabled={isClockedIn} className="rounded-lg border border-zinc-500 px-4 py-1 text-xs text-lime-400">
          Clock In
        </button>
        <button onClick={handleClockOut} disabled={!isClockedIn} className="rounded-lg border border-zinc-500 px-4 py-1 text-xs text-pink-400">
          Clock Out
        </button>
      </div>
      </div>
  )
}
