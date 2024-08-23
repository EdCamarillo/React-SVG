import React, { useEffect, useState } from 'react'
import './SvgRings.css'

interface SvgRingsLineProps {
  progress: number
  guid: string 
  isRotating: boolean 
}

const SvgRingsLine: React.FC<SvgRingsLineProps> = ({ progress }) => {
  const [isRotating, setIsRotating] = useState<boolean>(false)

  // Available only in secure context
  const guid = crypto.randomUUID()

  useEffect(() => {
    const innerCircles = document.querySelectorAll<SVGCircleElement>(`.inner-circle-${guid}`)
    innerCircles.forEach((circle, index) => {
      const startProgress = index * 25
      const endProgress = (index + 1) * 25

      let circleProgress = 0

      if (progress > startProgress) {
        circleProgress = Math.min((progress - startProgress) / (endProgress - startProgress), 1)
      }

      circle.style.opacity = `${circleProgress}`
    })

    // Trigger rotation when progress reaches 100%
    if (progress >= 100) {
      setIsRotating(true)
      setTimeout(() => {
        setIsRotating(false) // Reset rotation after animation
      }, 1000) // Match the duration of the rotate animation
    }
  }, [progress])

  return (
    <svg viewBox="0 0 200 180" width="200" height="180" className={isRotating ? 'rotate' : ''}>
      {/* Connecting lines */}
      <line x1="85" y1="50" x2="60" y2="75" stroke="#6e6e6e" strokeWidth="8" />
      <line x1="115" y1="50" x2="138" y2="75" stroke="#6e6e6e" strokeWidth="8" />
      <line x1="65" y1="100" x2="85" y2="125" stroke="#6e6e6e" strokeWidth="8" />
      <line x1="135" y1="100" x2="115" y2="125" stroke="#6e6e6e" strokeWidth="8" />

      {/* Top circle */}
      <g transform="translate(100, 40)">
        <circle className="ring" cx="0" cy="0" r="20" stroke="#6e6e6e" strokeWidth="8" fill="none" />
        <circle className={`inner-circle-${guid}`} cx="0" cy="0" r="15" fill="#6e6e6e" />
      </g>

      {/* Bottom-left circle */}
      <g transform="translate(50, 90)">
        <circle className="ring" cx="0" cy="0" r="20" stroke="#6e6e6e" strokeWidth="8" fill="none" />
        <circle className={`inner-circle-${guid}`} cx="0" cy="0" r="15" fill="#6e6e6e" />
      </g>

      {/* Bottom-right circle */}
      <g transform="translate(150, 90)">
        <circle className="ring" cx="0" cy="0" r="20" stroke="#6e6e6e" strokeWidth="8" fill="none" />
        <circle className={`inner-circle-${guid}`} cx="0" cy="0" r="15" fill="#6e6e6e" />
      </g>

      {/* Bottom circle */}
      <g transform="translate(100, 140)">
        <circle className="ring" cx="0" cy="0" r="20" stroke="#6e6e6e" strokeWidth="8" fill="none" />
        <circle className={`inner-circle-${guid}`} cx="0" cy="0" r="15" fill="#6e6e6e" />
      </g>
    </svg>
  )
}

export default SvgRingsLine
