"use client"

export const ColorPicker = ({ onClickCapture: onClick }) => {
  return (
    <div className="flex w-full items-center justify-center cursor-default">
      <div className="flex absolute bottom-0 w-40 h-10 bg-gray-100 mb-4 rounded-full items-center justify-center drop-shadow-md gap-1">
        <span
          className="h-4 w-4 bg-black rounded-full border-2 border-gray-300 cursor-pointer"
          onClick={(e) => onClick(e, "#000000")}
        />
        <span
          className="h-4 w-4 bg-blue-500 rounded-full border-2 border-gray-300 cursor-pointer"
          onClick={(e) => onClick(e, "#3b82f6")}
        />
        <span
          className="h-4 w-4 bg-green-500 rounded-full border-2 border-gray-300 cursor-pointer"
          onClick={(e) => onClick(e, "#22c55e")}
        />
        <span
          className="h-4 w-4 bg-red-500 rounded-full border-2 border-gray-300 cursor-pointer"
          onClick={(e) => onClick(e, "#ef4444")}
        />
        <span
          className="h-4 w-4 bg-yellow-500 rounded-full border-2 border-gray-300 cursor-pointer"
          onClick={(e) => onClick(e, "#eab308")}
        />
      </div>
    </div>
  )
}
