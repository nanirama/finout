import * as React from "react"

// Assets
import chrome from "../images/browsers/chrome.jpeg"
import edge from "../images/browsers/edge.jpeg"
import firefox from "../images/browsers/firefox.jpeg"
import safari from "../images/browsers/safari.jpeg"

const BrowserSupport = () => {
  const storage = window.sessionStorage
  const [show, setshow] = React.useState(true)

  const closeBanner = () => {
    setshow(false)
    storage.setItem("hideIeSupportBanner", false)
  }

  if (storage.getItem("hideIeSupportBanner") || !show) {
    return null
  }

  return (
    <div className="fixed w-full top-0 left-0 z-999 bg-white text-center px-12 py-12 shadow-xl">
      <div className="max-w-4xl mx-auto">
        <h2>Update your browser</h2>
        <p>
          Our website has detected that you are using an outdated browser that
          will prevent you from fully experience our website. We strongly
          recommend installing any of the following browsers to improve your
          browsing experience.
        </p>

        <div className="mt-8">
          <a
            href="https://www.google.com/chrome/?hl=en"
            className="inline-block m-2 p-4 rounded-xl shadow text-center">
            <img src={chrome} alt="Google Chrome" width="138" height="138" />
            Google Chrome
          </a>

          <a
            href="https://www.microsoft.com/edge"
            className="inline-block m-2 p-4 rounded-xl shadow text-center">
            <img src={edge} alt="Edge" width="138" height="138" />
            Edge
          </a>

          <a
            href="https://www.mozilla.com/firefox/"
            className="inline-block m-2 p-4 rounded-xl shadow text-center">
            <img src={firefox} alt="Firefox" width="138" height="138" />
            Firefox
          </a>

          <a
            href="https://www.apple.com/safari/"
            className="inline-block m-2 p-4 rounded-xl shadow text-center">
            <img src={safari} alt="Safari" width="138" height="138" />
            Safari
          </a>
        </div>

        <button className="mt-12 font-bold text-gray" onClick={closeBanner}>
          ✕ Close
        </button>
      </div>
    </div>
  )
}

export default BrowserSupport
