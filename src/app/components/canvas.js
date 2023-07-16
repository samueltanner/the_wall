"use client"
import { useEffect, useRef, useState } from "react"

export const Canvas = ({ children }) => {
  const [absolutePointsList, setAbsolutePointsList] = useState([])
  const [scrollChange, setScrollChange] = useState(0)
  const canvasRef = useRef(null)

  const createPoint = (event) => {
    const rect = canvasRef.current.getBoundingClientRect()
    const absolutePoint = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    }

    setAbsolutePointsList([...absolutePointsList, absolutePoint])
  }

  const handleScroll = () => {
    setScrollChange(Math.random())
  }

  useEffect(() => {
    const handleResize = () => {
      setScrollChange(Math.random())
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const convertAbsolutePointToRelative = (absolutePoint) => {
    const { x, y } = absolutePoint
    const rect = canvasRef.current.getBoundingClientRect()
    const currentScrollPos = {
      x: rect.left - window.scrollX,
      y: rect.top - window.scrollY,
    }

    const relativePoint = {
      x: x + currentScrollPos.x,
      y: y + currentScrollPos.y,
    }

    return relativePoint
  }

  return (
    <div
      className="h-screen w-screen bg-white overflow-scroll"
      onClick={(e) => createPoint(e)}
      style={{ cursor: "crosshair" }}
      onScroll={() => handleScroll()}
    >
      <div className="h-[2000px] w-[2000px]" ref={canvasRef}>
        {absolutePointsList.map((abPoint, index) => {
          const relPoint = convertAbsolutePointToRelative(abPoint)
          return (
            <div
              key={index}
              className="absolute h-2 w-2 rounded-full bg-red-500"
              style={{
                top: relPoint.y,
                left: relPoint.x,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
