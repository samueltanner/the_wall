"use client"
import { useEffect, useRef, useState } from "react"
import { ColorPicker } from "./colorPicker"

export const Canvas = ({ children }) => {
  const [absolutePointsList, setAbsolutePointsList] = useState([])
  const [currentColor, setCurrentColor] = useState("#000000")
  const [scrollChange, setScrollChange] = useState(0)
  const canvasRef = useRef(null)

  const createPoint = (event) => {
    const rect = canvasRef.current.getBoundingClientRect()
    const absolutePoint = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      color: currentColor,
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
      x: x + currentScrollPos.x - 5,
      y: y + currentScrollPos.y - 5,
      color: absolutePoint.color,
    }

    return relativePoint
  }

  const handleColorPickerClick = (e, color) => {
    if (!e) var e = window.event
    e.cancelBubble = true
    if (e.stopPropagation) e.stopPropagation()
    setCurrentColor(color)
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
              className="absolute h-2 w-2 rounded-full"
              style={{
                top: relPoint.y,
                left: relPoint.x,
                backgroundColor: abPoint.color,
              }}
            />
          )
        })}
      </div>
      <span>
        <ColorPicker
          // onClick={setCurrentColor}
          onClickCapture={handleColorPickerClick}
        />
      </span>
    </div>
  )
}
