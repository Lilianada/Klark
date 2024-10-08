'use client'
import { CalendarDateRangeIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

export default function Timer() {
  const [isClockedIn, setIsClockedIn] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0) // Elapsed time in seconds
  const [currentTime, setCurrentTime] = useState(new Date()) // Live clock
  const [clockInTime, setClockInTime] = useState(null) // Time when clocked in
  const [clockOutTime, setClockOutTime] = useState(null) // Time when clocked out
  const workHours = 8 * 3600; // Total work hours (in seconds)

  // Function to format time without seconds and with AM/PM (HH:MM AM/PM)
  const formatTimeWithAmPm = (date) => {
    const hours = date.getHours()
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const ampm = hours >= 12 ? 'PM' : 'AM'
    const formattedHours = hours % 12 || 12 // Convert 24-hour format to 12-hour
    return `${String(formattedHours).padStart(2, '0')}:${minutes} ${ampm}`
  }

  // Function to format time (HH:MM:SS)
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  // Function to format the date (e.g., "Today, Monday 7 Oct, 2024")
  const formatCurrentDate = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const day = daysOfWeek[currentTime.getDay()]
    const date = currentTime.getDate()
    const month = months[currentTime.getMonth()]
    const year = currentTime.getFullYear()

    return `Today, ${day} ${date} ${month}, ${year}`
  }

  // Function to display current time in HH:MM format
  const formatCurrentTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const ampm = hours >= 12 ? 'pm' : 'am'
    const formattedHours = hours % 12 || 12 // Convert 24-hour format to 12-hour
    return `${String(formattedHours).padStart(2, '0')}:${minutes} ${ampm}`
  }

  // Handle clocking in
  const handleClockIn = () => {
    if (!isClockedIn) {
      const now = new Date()
      setClockInTime(formatTimeWithAmPm(now))
      setIsClockedIn(true)
      setElapsedTime(0) // Reset the elapsed time
      setClockOutTime(null) // Reset clock out time
    }
  }

  // Handle clocking out
  const handleClockOut = () => {
    if (isClockedIn) {
      const now = new Date()
      setClockOutTime(formatTimeWithAmPm(now))
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

  return (
    <div>
      <div className="text-sm/6 sm:text-xs/6">
        <span className="text-zinc-500">
          <CalendarDateRangeIcon className="h-4 w-4 inline-block -mt-1" />
          {formatCurrentDate()} - {formatCurrentTime(currentTime)}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="mt-4 rounded-lg border border-zinc-600 py-2 px-3">
          <p className="text-sm/6 text-zinc-500 sm:text-xs/6">Clocked in at</p>
          <p className="text-base/8 font-semibold text-zinc-300">{clockInTime ? clockInTime : '-'}</p>
        </div>

        <div className="mt-4 rounded-lg border border-zinc-600 py-2 px-3">
          <p className="text-sm/6 text-zinc-500 sm:text-xs/6">Clocked out at</p>
          <p className="text-base/8 font-semibold text-zinc-300">{clockOutTime ? clockOutTime : '-'}</p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm/6 text-zinc-400 sm:text-xs/6">Time elapsed</p>
        <div className="text-3xl/8 font-semibold sm:text-xl/8">{formatTime(elapsedTime)}</div>
      </div>

      <div className="mt-6 grid grid-cols-2 items-center justify-center gap-6">
        <button
          onClick={handleClockIn}
          disabled={isClockedIn}
          className="rounded-lg border border-zinc-500 px-4 py-2 text-sm text-lime-400 sm:py-3"
        >
          Clock In
        </button>
        <button
          onClick={handleClockOut}
          disabled={!isClockedIn || elapsedTime < workHours}
          className="rounded-lg border border-zinc-500 text-pink-400 px-4 py-2 text-sm sm:py-3"
        >
          Clock Out
        </button>
      </div>
    </div>
  )
}
