import * as React from "react"
import { Helmet } from "react-helmet"

const WidgetHubspotMeeting = () => {
  return (
    <div>
      <Helmet>
        <script
          type="text/javascript"
          src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></script>
      </Helmet>

      <div
        className="meetings-iframe-container"
        data-src="https://meetings.hubspot.com/roiravhon/finout-walkthrough?embed=true"></div>
    </div>
  )
}

export default WidgetHubspotMeeting
