import * as React from "react"
import { Helmet } from "react-helmet"
import BeatLoader from "react-spinners/BeatLoader"

const WidgetHubspotForm = () => {
  React.useEffect(() => {
    initHubspotForm()
  })

  const initHubspotForm = () => {
    if ("hbspt" in window) {
      window.hbspt.forms.create({
        region: "na1",
        portalId: "8840961",
        formId: "462b3cb5-9da6-4cd0-a15e-c58657795d5f",
        target: "#contactForm",
      })
    } else {
      setTimeout(initHubspotForm, 500)
    }
  }

  return (
    <div className="relative">
      <Helmet>
        <script
          charset="utf-8"
          type="text/javascript"
          src="//js.hsforms.net/forms/v2-legacy.js"></script>
        <script
          charset="utf-8"
          type="text/javascript"
          src="//js.hsforms.net/forms/v2.js"></script>
      </Helmet>

      <div className="absolute flex justify-center items-center w-full">
        <BeatLoader color="#49a57f" loading={true} size={15} />
      </div>

      <div id="contactForm" className="relative z-10 bg-white"></div>
    </div>
  )
}

export default WidgetHubspotForm
