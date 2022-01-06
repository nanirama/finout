import * as React from "react"
import classNames from "classnames"

const PostProgress = ({ title }) => {
  const [progress, setProgress] = React.useState(0)
  const [showProgress, setShowProgress] = React.useState(false)

  React.useEffect(() => {
    const maxHeight = () => document.body.clientHeight - window.innerHeight
    const windowY = () => window.scrollY
    const handleProgress = () => {
      if (windowY() > 110) {
        setShowProgress(true)
      } else {
        setShowProgress(false)
      }

      setProgress((windowY() / maxHeight()) * 100)
    }

    window.addEventListener("scroll", handleProgress, { passive: true })
  }, [])

  const progressClass = classNames({
    "absolute z-[49] w-full px-4 pt-3 pb-3.5 opacity-0 bg-green-light shadow-xl overflow-hidden transform -translate-y-12 transition-all duration-300 in-expo md:pt-4 md:pb-4.5 xl:px-8": true,
    "!opacity-100 !translate-y-0": showProgress,
  })

  return (
    <div className={progressClass}>
      <span className="font-bold leading-none text-sm md:text-xl">{title}</span>

      <span
        className="absolute left-0 bottom-0 h-0.5 bg-coral"
        style={{ width: `${progress}%` }}></span>
    </div>
  )
}

export default PostProgress
