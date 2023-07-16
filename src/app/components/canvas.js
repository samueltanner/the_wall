"use client"
import { useEffect, useRef, useState } from "react"

export const Canvas = ({ children }) => {
  const [absolutePointsList, setAbsolutePointsList] = useState([])
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const canvasRef = useRef(null)

  const convertAbsolutePointToRelative = (absolutePoint) => {
    const { x, y } = absolutePoint
    const rect = canvasRef.current.getBoundingClientRect()
    const currentScrollPos = { x: rect.left, y: rect.top }
    const relativePoint = {
      x: x + currentScrollPos.x,
      y: y + currentScrollPos.y,
    }
    return relativePoint
  }

  const createPoint = (event) => {
    const rect = canvasRef.current.getBoundingClientRect()
    const currentScrollPos = { x: rect.left, y: rect.top }
    const distanceYScrolled = prevScrollPos.y - currentScrollPos.y || 0
    const distanceXScrolled = prevScrollPos.x - currentScrollPos.x || 0

    const absolutePoint = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    }

    setAbsolutePointsList([...absolutePointsList, absolutePoint])
  }

  const handleScroll = () => {
    const rect = canvasRef.current.getBoundingClientRect()
    const currentScrollPos = { x: rect.left, y: rect.top }
    setPrevScrollPos(currentScrollPos)
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
                top: relPoint.y - window.scrollY,
                left: relPoint.x - window.scrollX,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
