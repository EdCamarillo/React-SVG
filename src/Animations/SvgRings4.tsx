import React, { useEffect, useState } from 'react'
import './SvgRings.css'

interface SvgRings4Props {
  progress: number
}

const SvgRings4: React.FC<SvgRings4Props> = ({ progress }) => {
  const [isRotating, setIsRotating] = useState<boolean>(false)
  const [currentState, setCurrentState] = useState<number>(0)

  // Available only in secure context
  const guid = crypto.randomUUID()

  useEffect(() => {
    const innerCircles = document.querySelectorAll<SVGCircleElement>(`.inner-circle-${guid}`)
    innerCircles.forEach((circle, index) => {
      const startProgress = index * 33
      const endProgress = (index + 1) * 33

      let circleProgress = 0

      if (progress > startProgress) {
        circleProgress = Math.min((progress - startProgress) / (endProgress - startProgress), 1)
      }

      circle.style.opacity = `${circleProgress}`
    })

    if (progress >= 100) {
        setIsRotating(true);
        setTimeout(() => {
            setIsRotating(false);
        }, 1000);
    }
  }, [progress])

  useEffect(() => {
    if (progress < 100) {
      const nextState = (currentState + 1) % 6
      let timeoutDuration = 1000 // 1 second default duration

      if (currentState % 2 === 0) {
        // For rotation states (1, 3, 5)
        setIsRotating(true)
      } else {
        // For pulsate states (2, 4, 6)
        setIsRotating(false)
        timeoutDuration = 500 // Pulsate duration (half-second)
      }

      const timeout = setTimeout(() => {
        setCurrentState(nextState)
      }, timeoutDuration)

      return () => clearTimeout(timeout)
    } else {
      // Progress reached 100%, trigger the final rotation
      setIsRotating(true)
      const timeout = setTimeout(() => {
        setIsRotating(false)
      }, 1000) // Match the duration of the final rotate animation

      return () => clearTimeout(timeout)
    }
  }, [currentState])

  return (
    <svg viewBox="0 0 200 200" width="200" height="200" className={isRotating ? `rotate-${currentState}` : ''}>
      {/* Top circle */}
      <g transform="translate(100, 40)">
        <circle className={isRotating ? '' : 'pulsate'} cx="0" cy="0" r="30" stroke="#6e6e6e" strokeWidth="8" fill="none" />
        <circle className={`inner-circle-${guid}`} cx="0" cy="0" r="25" fill="#6e6e6e" />
      </g>

      {/* Bottom-left circle */}
      <g transform="translate(50, 130)">
        <circle className={isRotating ? '' : 'pulsate'} cx="0" cy="0" r="30" stroke="#6e6e6e" strokeWidth="8" fill="none" />
        <circle className={`inner-circle-${guid}`} cx="0" cy="0" r="25" fill="#6e6e6e" />
      </g>

      {/* Bottom-right circle */}
      <g transform="translate(150, 130)">
        <circle className={isRotating ? '' : 'pulsate'} cx="0" cy="0" r="30" stroke="#6e6e6e" strokeWidth="8" fill="none" />
        <circle className={`inner-circle-${guid}`} cx="0" cy="0" r="25" fill="#6e6e6e" />
      </g>
    </svg>
  )
}

export default SvgRings4
