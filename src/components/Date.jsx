import React, { useEffect, useState } from 'react'
import './Date.scss'

const MacDateTime = () => {
  const [now, setNow] = useState(new window.Date())

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNow(new window.Date())
    }, 1000)

    return () => {
      window.clearInterval(interval)
    }
  }, [])

  const timeString = now.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
  })

  const dateString = now.toLocaleDateString([], {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })

  return (
    <div className="date-time">
      <span className="time">{timeString}</span>
      <span className="date">{dateString}</span>
    </div>
  )
}

export default MacDateTime
