import * as React from "react"
import classNames from "classnames"

const Video = ({
  src,
  width,
  height,
  preload,
  poster,
  loop,
  autoPlay,
  className,
}) => {
  const classes = classNames({
    "": true,
    [className]: className,
  })

  return (
    <video
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

Video.defaultProps = {
  width: "100%",
  height: "100%",
  preload: "auto",
  autoPlay: false,
  loop: false,
}

export default Video
