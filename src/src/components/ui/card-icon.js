import * as React from "react"

const CardIcon = ({ icon, title }) => {
  return (
    <React.Fragment>
      <div className="px-3">
        <div className="inline-block p-2 mb-4 w-full bg-white rounded-xl shadow-xl md:p-4">
          <div className="aspect-w-1 aspect-h-1">
            <img src={icon} alt={title} className="p-4 img-fill" />
          </div>
        </div>

        {title && (
          <p className="font-medium text-xs text-center md:text-sm">{title}</p>
        )}
      </div>
    </React.Fragment>
  )
}

export default CardIcon
