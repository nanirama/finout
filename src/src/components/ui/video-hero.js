import * as React from "react"
import { gsap } from "../../plugins/gsap"
import { ScrollTrigger } from "../../plugins/gsap/ScrollTrigger"
import classNames from "classnames"
import useMonted from "../../hooks/useMonted"

gsap.registerPlugin(ScrollTrigger)

const VideoHero = ({
  src,
  width,
  height,
  preload,
  poster,
  loop,
  autoPlay,
  className,
}) => {
  const mounted = useMonted()
  const videoRef = React.useRef(null)

  React.useEffect(() => {
    if (mounted.current) {
      ScrollTrigger.create({
        trigger: videoRef.current,
        start: "top top",
        end: "bottom 50%",
        onEnterBack: () => {
          if (videoRef.current.ended) {
            videoRef.current.play()
          }
        },
      })
    }
  }, [mounted])

  const classes = classNames({
    "": true,
    [className]: className,
  })

  return (
    <video
      ref={videoRef}
      width={width}
      height={height}
      preload={preload}
      className={classes}
      poster={poster}
      autoPlay={autoPlay}
      loop={loop}
      playsInline
      muted>
      <source src={`${src}#t=0.1`} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  )
}

VideoHero.defaultProps = {
  width: "100%",
  height: "100%",
  preload: "auto",
  autoPlay: false,
  loop: false,
}

export default VideoHero
