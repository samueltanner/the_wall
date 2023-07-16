"use client"
import { useEffect, useRef, useState } from "react"

export const Canvas = ({ children }) => {
  const [pointsList, setPointsList] = useState([])
  const canvasRef = useRef(null)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  function getCursorCanvasPosition(canvas, event) {
    const x = event.clientX
    const y = event.clientY
    setPointsList([...pointsList, { x, y }])
  }

  const handleScroll = () => {
    const rect = canvasRef.current.getBoundingClientRect()
    const currentScrollPos = { x: rect.left, y: rect.top }
    const distanceYScrolled = prevScrollPos.y - currentScrollPos.y
    const distanceXScrolled = prevScrollPos.x - currentScrollPos.x

    const updatedPointsList = pointsList.map((point) => ({
      x: point.x - distanceXScrolled,
      y: point.y - distanceYScrolled,
    }))

    setPointsList(updatedPointsList)
    setPrevScrollPos(currentScrollPos)
  }

  return (
    <div
      className="h-screen w-screen bg-white overflow-scroll"
      onClick={(e) => getCursorCanvasPosition(canvasRef.current, e)}
      style={{ cursor: "crosshair" }}
      onScroll={() => handleScroll()}
    >
      <div className="text-black h-[2000px] w-[2000px]" ref={canvasRef}>
        {pointsList.map((point, index) => (
          <div
            key={index}
            className="absolute h-2 w-2 rounded-full bg-red-500"
            style={{
              top: point.y - window.scrollY,
              left: point.x - window.scrollX,
            }}
          />
        ))}
      </div>
    </div>
  )
}
