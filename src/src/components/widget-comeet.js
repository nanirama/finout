import * as React from "react"
import { Helmet } from "react-helmet"
import useMonted from "../hooks/useMonted"

const WidgetComeet = () => {
  const mounted = useMonted()

  const initComeet = React.useCallback(() => {
    if (mounted.current) {
      if ("COMEET" in window) {
        // eslint-disable-next-line
        COMEET.init({
          token: "7062A24E0C3F363F362A24312A38303F363F36",
          "company-uid": "07.006",
          "company-name": "finout",
        })
      } else {
        setTimeout(initComeet, 500)
      }
    }
  }, [mounted])

  React.useEffect(() => {
    initComeet()
  }, [initComeet])

  return (
    <React.Fragment>
      <Helmet>
        <script
          charset="utf-8"
          id="comeet-jsapi"
          type="text/javascript"
          src="//www.comeet.co/careers-api/api.js"></script>
      </Helmet>
      <script type="comeet-careers"></script>
    </React.Fragment>
  )
}

export default WidgetComeet
