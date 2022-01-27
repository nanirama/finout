

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"
import * as POSITIONS from "../shared/positions"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import AOS from 'aos';
// Components
import * as Grid from "./ui/grid"
import Button from "./ui/button"
import VideoHero from "./ui/video-hero"
// Assets
import video from "../images/hero.mp4"
import videoThumbnail from "../images/hero-thumbnail.png"
import videoMobile from "../images/hero-mobile.mp4"
import videoMobileThumbnail from "../images/hero-mobile-thumbnail.png"
import SlideDice from "../svg/slide-dice.svg"
const options = {
renderNode: {
[BLOCKS.HEADING_1]: (node, children) => {
return (
<h1 className="text-white pr-12 lg:pr-20 xl:text-6xl">{children}</h1>
)
},
[BLOCKS.PARAGRAPH]: (node, children) => {
return 
<p className="text-white text-lg lg:text-xl">{children}</p>
},
},
}
const HeroIndex = () => {
React.useEffect(() => {
AOS.init({
duration: 1000,
delay: 50,
once: true
});
AOS.refresh();
}, [])
const breakpoints = useBreakpoint()
const { data } = useStaticQuery(
  graphql`
  query {
    data: contentfulPageHome {
      heroContent {
        raw
      }
      heroButton {
        title
        url
      }
    }
  }
`
)
const content = data?.heroContent || ""
const btn = data?.heroButton || ""
return (
<section className="relative py-16 overflow-hidden bg-green lg:pt-32 lg:pb-32">
   <Grid.Container className="relative z-10">
      <Grid.Row alignY={POSITIONS.center}>
         <Grid.Col size="w-full lg:w-1/2">
            <Grid.Inner className="text-center lg:text-left">
               {/* <SlideDice className="w-auto h-24 mx-auto lg:ml-0 lg:mb-6 lg:h-32" /> */}
               <div className="pb-[95%] lg:hidden"></div>
               {/* {content && renderRichText(content, options)} */}
               <div className="w-full"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                  >
                  <svg width="24" height="1" viewBox="0 0 24 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <line x1="0.5" y1="0.5" x2="23.5" y2="0.5" stroke="white" stroke-linecap="round"/>
                  </svg>
                  <p className="text-white py-3 text-sm mb-3">Self Service, no code platfrom</p>
                  <h2 className="mb-8 text-5xl text-white">
                     One
                     <span class="relative">
                        Mega Bill
                        <div className="absolute right-0 -mt-4 -z-1">
                           <svg width="207" height="18" viewBox="0 0 207 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.14453 12.2227C60.5127 4.98442 131.428 3.72554 200.654 12.2227" stroke="#F87979" stroke-width="11" stroke-linecap="round"/>
                           </svg>
                        </div>
                     </span>
                     <br/>for all your cloud costs.
                  </h2>
                  <div className="lg:max-w-md">
                     <p className="text-current text-base mb-10">Our FinOps cost management platform combines your AWS, K8s & Snowflake into one mega bill, enabling unparalleled view of your cloud spend with no heavy lifting.</p>
                     <form action="#" className="newsform mb-4 mt-1">
                        <div className="flex justify-between bg-white shadow-inner rounded-full pl-3 pr-1 py-1">
                           <input type="email" placeholder="Your email" className="w-full px-2 py-4 mr-2 text-lg font-normal text-current border-0 focus:outline-none" required/>
                           <button className="bg-coral text-white font-bold text-lg px-5 py-3 rounded-full">See It In Action</button>
                        </div>
                     </form>
                  </div>
               </div>
               {/* <div className="mt-8 space-y-4 md:space-y-0 md:space-x-4">
                  <Button title={btn?.title} to={btn?.url} color="coral" />
               </div> */}
            </Grid.Inner>
         </Grid.Col>
         <Grid.Col size="w-full hidden lg:w-1/2 lg:block">
            <Grid.Inner className="order-last">
               <div className="mt-8 lg:-mr-12 lg:mt-0">
                  <div className="relative pb-[64%]"></div>
               </div>
            </Grid.Inner>
         </Grid.Col>
      </Grid.Row>
   </Grid.Container>
   <div className="absolute bottom-0 left-0 right-0 z-50 max-w-3xl mx-auto text-center">
      <svg className="mx-auto"  width="468" height="2" viewBox="0 0 468 2" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M0 1H468" stroke="white"/>
      </svg>
      <p className="p-4 text-center text-white">Integrates with </p>
      <div className="flex flex-row mx-auto justify-center mb-6 items-center">
         <svg className="mx-3" width="34" height="20" viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.58199 7.26363C9.58199 7.67519 9.62722 8.0089 9.70638 8.25361C9.79684 8.49833 9.90992 8.76529 10.0682 9.0545C10.1248 9.14349 10.1474 9.23248 10.1474 9.31034C10.1474 9.42158 10.0795 9.53281 9.93254 9.64405L9.22013 10.1112C9.11836 10.178 9.01659 10.2113 8.92612 10.2113C8.81304 10.2113 8.69996 10.1557 8.58688 10.0556C8.42857 9.88876 8.29287 9.71079 8.17979 9.53281C8.06671 9.34371 7.95363 9.13237 7.82924 8.87653C6.94721 9.89989 5.83902 10.4116 4.50466 10.4116C3.55479 10.4116 2.79714 10.1446 2.24305 9.61068C1.68895 9.07675 1.40625 8.36485 1.40625 7.47497C1.40625 6.52948 1.74549 5.76196 2.43529 5.18354C3.12508 4.60512 4.04103 4.31591 5.20576 4.31591C5.59024 4.31591 5.98602 4.34928 6.40442 4.40489C6.82282 4.46051 7.25253 4.5495 7.70485 4.64961V3.8376C7.70485 2.99221 7.52392 2.40267 7.17337 2.05784C6.81151 1.71301 6.20088 1.54616 5.33015 1.54616C4.93437 1.54616 4.52728 1.59066 4.10888 1.69077C3.69048 1.79088 3.28339 1.91324 2.88761 2.06897C2.70668 2.14683 2.57098 2.19132 2.49183 2.21357C2.41267 2.23582 2.35613 2.24694 2.3109 2.24694C2.15258 2.24694 2.07343 2.13571 2.07343 1.90211V1.35706C2.07343 1.17909 2.09604 1.04561 2.15258 0.967742C2.20912 0.889877 2.3109 0.812013 2.46921 0.734149C2.86499 0.533926 3.33993 0.367074 3.89403 0.233593C4.44812 0.0889877 5.03614 0.0222469 5.65809 0.0222469C7.00375 0.0222469 7.98755 0.322581 8.6208 0.923248C9.24275 1.52392 9.55937 2.43604 9.55937 3.65962V7.26363H9.58199ZM4.99091 8.95439C5.36408 8.95439 5.74855 8.88765 6.15564 8.75417C6.56273 8.62069 6.92459 8.37597 7.22991 8.04227C7.41084 7.83092 7.54654 7.59733 7.61439 7.33037C7.68223 7.0634 7.72747 6.74082 7.72747 6.36262V5.89544C7.39953 5.81757 7.04898 5.75083 6.68712 5.70634C6.32526 5.66185 5.97471 5.6396 5.62416 5.6396C4.86652 5.6396 4.31243 5.7842 3.93926 6.08454C3.56609 6.38487 3.38516 6.80756 3.38516 7.36374C3.38516 7.88654 3.52086 8.27586 3.80356 8.54282C4.07496 8.82091 4.47074 8.95439 4.99091 8.95439ZM14.0713 10.1557C13.8678 10.1557 13.7321 10.1224 13.6416 10.0445C13.5511 9.97775 13.472 9.82202 13.4041 9.61068L10.7467 1.01224C10.6789 0.789766 10.6449 0.645161 10.6449 0.567297C10.6449 0.389321 10.7354 0.28921 10.9163 0.28921H12.0245C12.2394 0.28921 12.3864 0.322581 12.4656 0.400445C12.556 0.467186 12.6239 0.622914 12.6917 0.83426L14.5915 8.198L16.3555 0.83426C16.4121 0.611791 16.4799 0.467186 16.5704 0.400445C16.6608 0.333704 16.8192 0.28921 17.0227 0.28921H17.9274C18.1422 0.28921 18.2892 0.322581 18.3797 0.400445C18.4701 0.467186 18.5493 0.622914 18.5945 0.83426L20.3812 8.28698L22.3375 0.83426C22.4054 0.611791 22.4845 0.467186 22.5637 0.400445C22.6541 0.333704 22.8011 0.28921 23.0047 0.28921H24.0563C24.2373 0.28921 24.339 0.378198 24.339 0.567297C24.339 0.622914 24.3277 0.678532 24.3164 0.745272C24.3051 0.812013 24.2825 0.901001 24.2373 1.02336L21.512 9.6218C21.4442 9.84427 21.365 9.98888 21.2745 10.0556C21.1841 10.1224 21.0371 10.1669 20.8448 10.1669H19.8723C19.6575 10.1669 19.5105 10.1335 19.42 10.0556C19.3296 9.97775 19.2504 9.83315 19.2052 9.61068L17.4524 2.43604L15.711 9.59955C15.6544 9.82202 15.5866 9.96663 15.4961 10.0445C15.4057 10.1224 15.2473 10.1557 15.0438 10.1557H14.0713ZM28.6022 10.4561C28.0142 10.4561 27.4261 10.3893 26.8607 10.2558C26.2953 10.1224 25.8543 9.97775 25.5603 9.8109C25.3794 9.71079 25.255 9.59955 25.2098 9.49944C25.1645 9.39933 25.1419 9.2881 25.1419 9.18799V8.62069C25.1419 8.3871 25.2324 8.27586 25.402 8.27586C25.4698 8.27586 25.5377 8.28698 25.6055 8.30923C25.6734 8.33148 25.7752 8.37597 25.8882 8.42047C26.2727 8.58732 26.6911 8.7208 27.1321 8.80979C27.5845 8.89878 28.0255 8.94327 28.4778 8.94327C29.1902 8.94327 29.7443 8.82091 30.1288 8.57619C30.5132 8.33148 30.7168 7.97553 30.7168 7.51946C30.7168 7.20801 30.615 6.95217 30.4115 6.74082C30.2079 6.52948 29.8235 6.34038 29.2694 6.1624L27.6297 5.66185C26.8042 5.40601 26.1936 5.02781 25.8204 4.52725C25.4472 4.03782 25.255 3.49277 25.255 2.91435C25.255 2.44716 25.3568 2.03559 25.5603 1.67964C25.7639 1.32369 26.0352 1.01224 26.3745 0.767519C26.7137 0.51168 27.0982 0.322581 27.5505 0.189099C28.0029 0.0556173 28.4778 0 28.9753 0C29.2241 0 29.4842 0.0111235 29.733 0.0444939C29.9931 0.0778643 30.2305 0.122358 30.468 0.166852C30.6942 0.222469 30.909 0.278087 31.1126 0.344828C31.3161 0.411568 31.4744 0.478309 31.5875 0.54505C31.7458 0.634038 31.8589 0.723026 31.9268 0.823137C31.9946 0.912124 32.0285 1.03448 32.0285 1.19021V1.71301C32.0285 1.94661 31.9381 2.06897 31.7684 2.06897C31.678 2.06897 31.531 2.02447 31.3387 1.93548C30.6942 1.64627 29.9705 1.50167 29.1676 1.50167C28.523 1.50167 28.0142 1.60178 27.6636 1.81313C27.3131 2.02447 27.1321 2.34705 27.1321 2.80311C27.1321 3.11457 27.2452 3.38153 27.4714 3.59288C27.6975 3.80423 28.1159 4.01557 28.7153 4.20467L30.321 4.70523C31.1352 4.96107 31.7232 5.31702 32.0738 5.77308C32.4243 6.22914 32.5939 6.75195 32.5939 7.33037C32.5939 7.80868 32.4922 8.24249 32.2999 8.62069C32.0964 8.99889 31.825 9.33259 31.4744 9.59955C31.1239 9.87764 30.7055 10.0779 30.2192 10.2225C29.7104 10.3782 29.1789 10.4561 28.6022 10.4561Z" fill="white"/>
            <path d="M30.739 15.8623C27.0186 18.5653 21.6134 20.0002 16.9657 20.0002C10.4523 20.0002 4.58339 17.6309 0.150626 13.6932C-0.199925 13.3817 0.116701 12.959 0.5351 13.2038C5.32973 15.9401 11.2439 17.5975 17.3615 17.5975C21.489 17.5975 26.0235 16.7521 30.1962 15.0169C30.8181 14.7388 31.3496 15.4173 30.739 15.8623ZM32.2882 14.127C31.8132 13.5263 29.1445 13.8378 27.9346 13.9824C27.5727 14.0269 27.5162 13.7154 27.8441 13.4818C29.97 12.0136 33.4642 12.4362 33.8713 12.9257C34.2784 13.4262 33.7582 16.8634 31.768 18.5097C31.4627 18.7655 31.1687 18.632 31.3044 18.2983C31.7567 17.1971 32.7631 14.7166 32.2882 14.127Z" fill="white"/>
         </svg>
         <svg className="mx-3" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.689 7.32221C10.689 7.77934 10.5368 8.13556 10.2343 8.44032C9.78067 8.89846 9.02357 9.00038 8.51884 8.64517L3.47247 5.6955C3.44681 5.6955 3.43404 5.68276 3.42134 5.67008C3.40876 5.65753 3.39624 5.64504 3.37133 5.64504C2.6653 5.23736 2.464 4.32309 2.91766 3.61065C3.32125 2.89821 4.22958 2.69537 4.93561 3.1525L7.76173 4.83068V1.47433C7.76173 0.660976 8.41769 0 9.22486 0C10.032 0 10.689 0.660976 10.689 1.47433V7.32221ZM7.30707 10.6786C7.8118 10.9329 8.06417 11.4415 8.06417 12.0005C8.06417 12.5596 7.8118 13.0682 7.35714 13.3225L2.31078 16.2711H2.20963C1.45353 16.6788 0.595277 16.4245 0.191688 15.6616C-0.211901 14.8987 0.091542 14.0339 0.797572 13.6272L3.67377 11.9501L0.797572 10.2719C0.771908 10.2719 0.75914 10.2591 0.746435 10.2465C0.733855 10.2339 0.721337 10.2214 0.696424 10.2214C-0.00960559 9.81374 -0.211901 8.89947 0.242763 8.18703C0.647353 7.47458 1.55468 7.27175 2.26171 7.72888L7.30707 10.6786ZM10.689 22.5257V16.6273C10.7391 16.4235 10.6379 16.1692 10.5378 16.0188C10.1342 15.2559 9.17479 15.0016 8.46876 15.4083L3.4224 18.357C3.39674 18.357 3.38397 18.3697 3.37126 18.3824C3.35868 18.3949 3.34617 18.4074 3.32125 18.4074C2.61522 18.8151 2.41293 19.7304 2.86759 20.4418C3.27118 21.1533 4.17951 21.3561 4.88554 20.899L7.76273 19.2208V22.5257C7.76273 23.339 8.41869 24 9.22587 24C10.033 24 10.689 23.339 10.689 22.5257ZM13.3128 22.5257V16.7797C13.2618 16.5254 13.3629 16.1692 13.463 15.9159C13.8676 15.2045 14.776 14.9502 15.482 15.3569L20.5284 18.3055C20.554 18.3055 20.5668 18.3183 20.5795 18.3309C20.5921 18.3435 20.6046 18.356 20.6295 18.356C21.3365 18.7637 21.5388 19.6779 21.0842 20.3904C20.6796 21.1018 19.7712 21.3046 19.0652 20.8475L16.2391 19.2208V22.5257C16.2391 23.339 15.5831 24 14.776 24C13.9688 24 13.3128 23.339 13.3128 22.5257ZM16.6938 10.6786C16.189 10.9329 15.9367 11.4415 15.9367 12.0005C15.8866 12.5596 16.189 13.0682 16.6427 13.273L21.689 16.2217C21.7147 16.2217 21.7275 16.2344 21.7402 16.2471C21.7528 16.2596 21.7653 16.2721 21.7902 16.2721C22.5473 16.6798 23.4056 16.3741 23.8091 15.6626C24.2127 14.8997 23.9093 14.0349 23.2033 13.6282L20.3271 11.9501L23.2033 10.2719C23.2289 10.2719 23.2417 10.2591 23.2544 10.2465C23.267 10.2339 23.2795 10.2214 23.3044 10.2214C24.0114 9.81374 24.2127 8.89947 23.7591 8.18703C23.3545 7.47458 22.4461 7.27175 21.7401 7.72888L16.6938 10.6786ZM13.3128 1.47433V7.22028C13.2618 7.52504 13.3629 7.8308 13.463 8.08611C13.8676 8.79755 14.776 9.05185 15.482 8.64517L20.5284 5.6955C20.554 5.6955 20.5668 5.68276 20.5795 5.67008C20.5921 5.65753 20.6046 5.64504 20.6295 5.64504C21.3365 5.23736 21.5388 4.32309 21.0842 3.61065C20.6796 2.89821 19.7712 2.69537 19.0652 3.1525L16.2391 4.77921V1.47433C16.2391 0.660976 15.5831 0 14.776 0C13.9688 0 13.3128 0.660976 13.3128 1.47433ZM12.2523 9.20321C12.4035 9.20321 12.5046 9.25367 12.6058 9.35559L14.5737 11.39C14.6738 11.4909 14.7249 11.5928 14.7249 11.7452V12.2538C14.7249 12.3557 14.6738 12.5081 14.6237 12.61L12.6058 14.6444C12.5046 14.7463 12.4035 14.7968 12.2523 14.7968H11.7475C11.5953 14.7968 11.4952 14.7463 11.394 14.6444L9.37508 12.61C9.27394 12.5081 9.22386 12.4062 9.22386 12.2538V11.7452C9.22386 11.5938 9.27394 11.4919 9.37508 11.39L11.394 9.35559C11.4952 9.25468 11.5963 9.20321 11.7475 9.20321H12.2523ZM12.1838 11.0723C12.1337 11.0208 12.0325 10.9704 11.9314 10.9704C11.8302 10.9704 11.7291 11.0208 11.679 11.0723L11.0731 11.6818C11.0231 11.7323 10.972 11.8342 10.972 11.9361C10.972 12.038 11.0221 12.14 11.0731 12.1904L11.679 12.8009C11.7291 12.8514 11.8302 12.9029 11.9314 12.9029C12.0325 12.9029 12.1327 12.8514 12.1838 12.8009L12.7896 12.1904C12.8397 12.14 12.8908 12.038 12.8908 11.9361C12.8908 11.8342 12.8397 11.7323 12.7896 11.6818L12.1838 11.0723Z" fill="white"/>
         </svg>
         <svg className="mx-3" width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5511 1C13.1401 1.02825 12.8287 1.37252 12.8501 1.77434V1.97107C12.8693 2.19395 12.9036 2.41474 12.9485 2.63344C13.0142 3.05224 13.0378 3.4763 13.0192 3.8996C12.9785 4.03877 12.8972 4.16434 12.7859 4.26061L12.7698 4.55569C12.3364 4.59127 11.9062 4.65615 11.4824 4.75032C9.69945 5.14377 8.07597 6.04787 6.82278 7.35065L6.56594 7.17276C6.42467 7.21461 6.27271 7.19892 6.14321 7.1309C5.79585 6.87951 5.47434 6.59564 5.18326 6.28331C5.03704 6.11248 4.88089 5.95002 4.71558 5.79673L4.5572 5.67326C4.41593 5.56234 4.24256 5.49851 4.0617 5.49013C3.95377 5.48454 3.84602 5.50399 3.74725 5.54692C3.64848 5.58984 3.5615 5.655 3.49343 5.73709C3.25157 6.0688 3.33076 6.52817 3.66894 6.76571L3.81663 6.88081C4.00673 7.00448 4.20397 7.11733 4.40737 7.2188C4.78622 7.42494 5.14366 7.66666 5.47542 7.95128C5.56028 8.06961 5.60959 8.2088 5.61775 8.35311L5.85105 8.56239C4.59144 10.4103 4.07454 12.6486 4.39774 14.8471L4.09809 14.9308C4.01996 15.0522 3.91615 15.1558 3.79201 15.2322C3.37394 15.3413 2.94598 15.4104 2.51421 15.4383C2.28506 15.4429 2.05637 15.4603 1.82929 15.4906L1.63986 15.5325H1.61846C1.48701 15.5503 1.3632 15.6035 1.26081 15.6861C1.15843 15.7686 1.08149 15.8774 1.03855 16.0001C0.995622 16.1229 0.988385 16.255 1.01765 16.3815C1.04691 16.5081 1.11152 16.6242 1.2043 16.717C1.29794 16.8094 1.41599 16.8744 1.54526 16.9049C1.67452 16.9354 1.80992 16.9301 1.93631 16.8897H1.95022L2.14285 16.8688C2.3601 16.806 2.57414 16.7285 2.78282 16.6407C3.18414 16.4837 3.60045 16.3634 4.02638 16.2849C4.17407 16.2932 4.31533 16.3424 4.43519 16.4261L4.75625 16.3738C5.45187 18.4844 6.91375 20.2727 8.86577 21.3997L8.73521 21.6665C8.79514 21.789 8.81761 21.925 8.79942 22.06C8.62284 22.4597 8.40666 22.8427 8.1541 23.2027C8.01555 23.3812 7.88762 23.5675 7.77097 23.7604L7.68 23.9488C7.614 24.0607 7.58093 24.1883 7.58443 24.3175C7.58793 24.4466 7.62787 24.5724 7.69984 24.6807C7.77181 24.7891 7.87301 24.8759 7.99226 24.9316C8.11152 24.9873 8.24419 25.0096 8.37563 24.9962C8.50737 24.9817 8.63243 24.9318 8.7369 24.852C8.84137 24.7722 8.92118 24.6656 8.96744 24.5442L9.05627 24.3663C9.1376 24.157 9.20609 23.9435 9.26174 23.728C9.45117 23.2707 9.5539 22.7799 9.81289 22.4765C9.89753 22.3987 10.0042 22.3476 10.119 22.33L10.2795 22.0443C12.3955 22.8396 14.7369 22.8451 16.8569 22.06L16.9992 22.3268C17.1447 22.3478 17.2753 22.4262 17.3631 22.5413C17.5643 22.916 17.7269 23.3084 17.8511 23.7133C17.9077 23.9302 17.977 24.1436 18.0587 24.3527L18.1475 24.5306C18.1942 24.6516 18.2743 24.7576 18.3788 24.8369C18.4833 24.9162 18.6082 24.9657 18.7397 24.9799C18.8712 24.994 19.0041 24.9724 19.1238 24.9173C19.2435 24.8622 19.3452 24.7758 19.4178 24.6676C19.4897 24.5588 19.5293 24.4327 19.5324 24.3032C19.5354 24.1738 19.5017 24.046 19.4349 23.9341L19.3418 23.7458C19.2252 23.5535 19.0973 23.368 18.9587 23.1901C18.7126 22.8427 18.5007 22.4723 18.3166 22.0841C18.2994 22.0131 18.297 21.9395 18.3095 21.8676C18.322 21.7957 18.3492 21.7269 18.3894 21.6655C18.3437 21.5742 18.304 21.4802 18.2706 21.384C20.2183 20.2487 21.6738 18.4541 22.3619 16.3403L22.6658 16.3927C22.775 16.2953 22.9184 16.2441 23.065 16.2482C23.4899 16.3278 23.9062 16.4575 24.3086 16.604C24.5173 16.6982 24.7313 16.7777 24.9486 16.8447C24.9999 16.8583 25.0748 16.8698 25.1326 16.8834H25.1465C25.2729 16.9233 25.408 16.9281 25.537 16.8973C25.6659 16.8666 25.7836 16.8014 25.8769 16.7091C25.9702 16.6167 26.0355 16.5009 26.0654 16.3745C26.0954 16.248 26.0889 16.116 26.0466 15.9929C26.0033 15.87 25.926 15.7613 25.8232 15.6789C25.7204 15.5964 25.5961 15.5436 25.4644 15.5262L25.2568 15.4781C25.0297 15.4478 24.801 15.4303 24.5719 15.4258C24.1395 15.3986 23.7114 15.3295 23.294 15.2196C23.1656 15.1495 23.0586 15.0449 22.9858 14.9183L22.6969 14.8346C23.005 12.6371 22.4771 10.4055 21.2136 8.56343L21.4662 8.33532C21.4555 8.19196 21.5036 8.04965 21.5989 7.93977C21.9274 7.66352 22.2838 7.41971 22.6584 7.21147C22.8617 7.10997 23.059 6.99712 23.2491 6.87348L23.4053 6.75001C23.5204 6.68019 23.6129 6.57995 23.6721 6.46089C23.7313 6.34183 23.7548 6.20881 23.7399 6.07722C23.725 5.94564 23.6723 5.82086 23.5879 5.71734C23.5035 5.61381 23.3909 5.53576 23.263 5.49223C23.1352 5.44874 22.9975 5.44149 22.8657 5.4713C22.7339 5.50111 22.6134 5.56677 22.5182 5.6607L22.3598 5.78417C22.1945 5.9375 22.0384 6.09996 21.8921 6.27075C21.6096 6.58677 21.2971 6.87453 20.9578 7.13195C20.8209 7.18645 20.6712 7.20239 20.5255 7.17799L20.2547 7.36634C18.6922 5.76534 16.5872 4.77125 14.3312 4.57243C14.3312 4.46779 14.3173 4.31083 14.3152 4.26165C14.1942 4.18003 14.1097 4.05551 14.0819 3.91424C14.067 3.49166 14.0943 3.06866 14.1632 2.65123C14.2092 2.43149 14.2413 2.21174 14.2617 1.98886V1.77957C14.2831 1.37775 13.9727 1.03349 13.5607 1.00523L13.5511 1ZM12.6585 6.40574L12.4445 10.0608H12.4284C12.4177 10.2869 12.2818 10.4794 12.0731 10.5882C11.8644 10.6971 11.6172 10.6646 11.431 10.5317L8.36492 8.40752C9.34083 7.47028 10.5651 6.81827 11.8998 6.52503C12.1502 6.47271 12.4027 6.43295 12.6564 6.40574H12.6585ZM14.4436 6.40574C16.0542 6.60142 17.5536 7.30879 18.7136 8.41903L15.6765 10.5296C15.4892 10.6761 15.2323 10.7054 15.0151 10.605C14.7978 10.5045 14.6587 10.291 14.6555 10.0567L14.4436 6.40574ZM7.25193 9.7825L10.0558 12.229V12.2447C10.2303 12.3933 10.3062 12.6245 10.2549 12.8453C10.2035 13.0661 10.0301 13.2409 9.80861 13.3005V13.311L6.21064 14.3229C6.0326 12.7379 6.39827 11.1411 7.25193 9.7825ZM19.8298 9.7825C20.6817 11.1376 21.0584 12.7271 20.9022 14.3103L17.2989 13.2953V13.2817C17.0741 13.222 16.9029 13.0473 16.8526 12.8265C16.8023 12.6057 16.8772 12.3765 17.0516 12.2259L19.8341 9.79087L19.8298 9.7825ZM12.9764 12.4194H14.1236L14.8246 13.2901L14.5699 14.3783L13.5393 14.8628L12.5066 14.3783L12.2636 13.2901L12.9764 12.4194ZM16.6514 15.3891C16.6995 15.3839 16.7584 15.3839 16.7959 15.3891L20.5062 16.0013C19.9711 17.5081 18.9148 18.7952 17.5364 19.6564L16.1024 16.2619C16.063 16.1708 16.0465 16.0718 16.0543 15.9732C16.0622 15.8746 16.0942 15.7793 16.1476 15.6953C16.2009 15.6113 16.2742 15.5411 16.3611 15.4905C16.4481 15.44 16.5461 15.4106 16.6471 15.4048L16.6514 15.3891ZM10.4197 15.4048C10.6294 15.408 10.8231 15.5137 10.9377 15.6853C11.0522 15.8569 11.0704 16.0724 10.988 16.2608V16.2744L9.56246 19.6417C8.19798 18.7868 7.16203 17.5154 6.61089 16.0243L10.2891 15.4143C10.3298 15.4101 10.3715 15.4101 10.4133 15.4143L10.4197 15.4048ZM13.5275 16.8698C13.6444 16.8662 13.7601 16.8944 13.8616 16.9513C13.963 17.0083 14.0463 17.0916 14.1022 17.1921H14.1161L15.929 20.391L15.2045 20.6003C13.871 20.8985 12.4787 20.8284 11.1827 20.3973L13.0021 17.1984C13.1123 17.01 13.3156 16.8949 13.5371 16.8897L13.5275 16.8698Z" fill="white" stroke="white" stroke-width="0.11"/>
         </svg>
         <svg className="mx-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5646 12.6439L22.1737 20.1814L11.392 22.0575L10.4638 14.52L12.0041 14.3115C12.2547 14.4157 12.4342 14.4502 12.7207 14.52C13.1863 14.6242 13.7239 14.763 14.5112 14.3464C14.6903 14.2421 15.0844 13.9294 15.2278 13.7213L21.5646 12.6439ZM4.90746 21.6064C4.72841 21.3289 4.40589 21.0157 3.90431 20.6336C3.18772 20.0779 3.4387 19.1051 3.86835 18.5149C4.40975 17.5076 7.23551 16.1876 7.09242 14.5549C7.02088 13.9642 6.94934 13.2 6.37583 12.6442C6.33987 12.8527 6.37583 13.0612 6.37583 13.0612C6.37583 13.0612 6.12524 12.7838 6.01773 12.3664C5.91022 12.2276 5.80272 12.1579 5.69521 11.9494C5.62366 12.1924 5.62366 12.4357 5.62366 12.4357C5.62366 12.4357 5.44461 11.9842 5.40865 11.637C5.30114 11.8106 5.26556 12.1234 5.26556 12.1234C5.26556 12.1234 5.01497 11.4285 5.08651 11.0471C4.979 10.7344 4.6209 10.0744 4.72841 8.61563C5.33749 9.03263 6.69874 8.92837 7.2359 8.16412C7.41495 7.92112 7.52207 7.22662 7.16435 5.87137C6.91376 5.00287 6.30468 3.71775 6.05447 3.23137L6.0185 3.26625C6.16159 3.64875 6.41296 4.482 6.52008 4.899C6.80625 6.11475 6.91453 6.53175 6.77067 7.0875C6.66316 7.57387 6.37622 7.88625 5.62444 8.23388C4.90785 8.58113 3.90509 7.70888 3.86873 7.67812C3.15214 7.12238 2.61499 6.21562 2.54345 5.80237C2.47191 5.316 2.82962 5.03813 3.00906 4.656C2.75846 4.72537 2.46765 4.8645 2.46765 4.8645C2.46765 4.8645 2.79018 4.51725 3.21982 4.23938C3.38315 4.14699 3.53882 4.04242 3.68543 3.92662H3.22446C3.22446 3.92662 3.65449 3.68362 4.1201 3.54412H3.47583L5.19518 2.81475C5.73659 2.60625 6.23391 2.676 6.52047 3.05775C6.91492 3.58275 7.3086 3.8565 8.13231 4.065C8.63388 3.8565 8.81293 3.71775 9.45759 3.54C10.0307 2.91487 10.4963 2.84512 10.4963 2.84512C10.4963 2.84512 10.1738 3.12262 10.1382 3.43575C10.4607 3.19275 10.8188 2.98425 10.8188 2.98425C10.8188 2.98425 10.6758 3.15787 10.5683 3.40125L10.6042 3.43612C10.9987 3.22762 11.4279 3.05362 11.4279 3.05362C11.4279 3.05362 11.2848 3.19237 11.1418 3.40087C11.4279 3.40087 12.0014 3.40087 12.2168 3.43575C13.5421 3.47062 13.8287 2.08087 14.3303 1.87275C14.9749 1.66425 15.2615 1.5255 16.3362 2.56762C17.2674 3.47062 17.9836 5.034 17.6259 5.38125C17.3397 5.65875 16.7302 5.277 16.0496 4.47825C15.6915 4.06125 15.4405 3.54075 15.2974 2.91525C15.2259 2.39025 14.8318 2.08162 14.8318 2.08162C14.8318 2.08162 15.0824 2.60663 15.0824 3.05437C15.0824 3.29737 15.1184 4.20075 15.5124 4.72162C15.4765 4.791 15.4409 5.10413 15.4049 5.13863C14.9393 4.58288 13.8967 4.20112 13.7575 4.06238C14.3306 4.51388 15.6203 5.52487 16.1219 6.49387C16.5875 7.43137 16.301 8.26538 16.552 8.47388C16.6235 8.54325 17.5551 9.65512 17.7341 10.2454C18.0567 11.2526 17.7701 12.2947 17.3397 12.9199L16.1935 13.0935C16.0437 13.0683 15.8988 13.0214 15.7634 12.9544C15.835 12.8156 16.014 12.468 16.014 12.3986L15.9425 12.2944C15.5844 12.7807 14.9757 13.2671 14.4737 13.545C13.8291 13.8922 13.0765 13.8578 12.5788 13.6838C11.1816 13.2668 9.8563 12.3637 9.57013 12.1207C9.57013 12.1207 9.57013 12.2944 9.60609 12.3637C10.1862 12.9557 10.8353 13.4803 11.5405 13.9267L9.89304 14.1004L10.6812 20.0055C10.3231 20.0404 10.2867 20.0749 9.89304 20.1442C9.57052 18.9979 8.92624 18.2685 8.20927 17.817C7.60018 17.4345 6.74051 17.3306 5.9168 17.5042L5.88083 17.5736C6.45395 17.5042 7.13457 17.6085 7.8152 18.0251C8.49582 18.4417 9.03336 19.5187 9.24799 20.1439C9.49859 20.9775 9.67802 21.8464 8.9974 22.7839C8.49582 23.4439 7.06303 23.8264 5.9168 23.0269C6.23932 23.5132 6.63339 23.8954 7.2065 23.9644C8.03022 24.0686 8.81835 23.9295 9.39147 23.4086C9.85707 22.9571 10.1081 21.9844 10.0361 20.9422L10.7883 20.838L11.0389 22.6755L23.2488 21.2625L22.1737 11.8144L21.5646 11.9186L20.3468 0L0 2.29275L2.50748 21.9532L4.90746 21.6064Z" fill="white"/>
            <path d="M14.5873 11.2726C15.1287 11.6551 15.5905 11.8978 16.0561 11.8633C16.3423 11.8284 16.6292 11.3769 16.8083 10.9603C16.9513 10.6828 16.9513 10.3696 16.7367 10.2654C16.6292 10.2305 16.1953 10.2305 15.877 10.2654C15.268 10.3348 14.6589 10.5429 14.5158 10.6479C14.3008 10.7866 14.4083 11.1343 14.5873 11.273V11.2726ZM14.7304 7.20801V7.24288L14.7664 7.31226C14.9095 7.58976 15.0525 7.86801 15.3395 8.00713C15.411 8.00713 15.4826 7.97226 15.5545 7.97226C15.8051 7.97226 15.949 8.00713 16.0561 8.04163V7.83313C16.0201 7.48588 16.1276 6.86038 15.4114 6.51313C15.1253 6.37438 14.7668 6.44376 14.6233 6.58251H14.6948C14.8739 6.65188 14.7664 6.72126 14.7308 6.79101C14.6948 6.92976 14.6593 6.96463 14.7308 7.20801" fill="white"/>
            <path d="M11.5072 7.2789C11.6863 7.14015 10.6835 6.93165 9.89538 7.41765C9.32226 7.80015 9.32226 8.5989 9.85942 9.0504C9.91329 9.07636 9.96179 9.1117 10.0025 9.15465C10.1456 9.08528 10.3606 9.0159 10.5439 8.94615C10.902 8.8419 11.1886 8.77253 11.4395 8.73765C11.5471 8.5989 11.6901 8.3904 11.6546 8.00828C11.6186 7.48328 11.189 7.59128 11.5115 7.2789H11.5072ZM17.3502 15.7164L15.6308 18.4914L13.6249 17.9008L11.8692 20.5059L11.9407 21.3395L21.541 19.637L20.9679 13.8358L19.3917 17.0315L17.3502 15.7164Z" fill="white"/>
         </svg>
         <svg className="mx-3" width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12.7114C1.45809 13.0021 2.8146 13.2728 4.22681 13.5543C4.17275 13.4451 4.14818 13.3666 4.10066 13.3036C2.96205 11.7978 2.76545 10.1536 3.311 8.41252C3.49449 7.82498 3.73205 7.25282 3.9352 6.66989C4.13015 6.11311 4.37262 5.56094 4.48239 4.98878C4.59215 4.42277 4.56266 3.83369 4.59871 3.16156C4.77073 3.26461 5.02794 3.3369 5.12952 3.49532C5.43096 3.97212 5.73077 4.46584 5.91918 4.98878C6.0912 5.46558 6.11577 5.99006 6.20588 6.49301C6.22062 6.57453 6.24356 6.65605 6.27797 6.80985C6.72031 6.15617 6.93328 5.49788 7.0578 4.82267C7.18394 4.14592 7.2462 3.45687 7.30026 2.76935C7.3658 1.94187 7.61318 1.1836 8.19478 0.554534C8.4012 0.331515 8.70265 0.18386 8.95986 0.00390625C9.04669 0.114647 9.07946 0.142332 9.07454 0.154637C8.70101 1.02672 8.99263 1.83574 9.36452 2.62477C10.1329 4.25051 10.6522 5.93162 10.6637 7.71577C10.8357 6.74372 10.9701 5.7655 11.1879 4.80267C11.4026 3.85369 11.7286 2.93392 12.5182 2.24179C12.5182 2.81088 12.4806 3.32921 12.5264 3.84138C12.6215 4.88727 13.1801 5.7732 13.6962 6.6745C14.6448 8.32946 14.92 10.0767 14.3384 11.8947C14.1959 12.3392 13.9141 12.7468 13.6913 13.1682C13.6274 13.2882 13.5405 13.3989 13.439 13.5543C14.9708 13.2713 16.4403 12.999 17.9099 12.7268C17.9394 12.7606 17.9705 12.7945 18 12.8268C17.9001 13.0929 17.8444 13.3851 17.6904 13.622C17.1743 14.4141 16.6435 15.1985 16.0684 15.9537C15.939 16.1228 15.613 16.2444 15.3754 16.2444C11.129 16.2613 6.88414 16.2597 2.63766 16.2474C2.42141 16.2474 2.13634 16.1551 2.002 16.0106C1.22053 15.1662 0.555384 14.2495 0.139255 13.1928C0.0950214 13.079 0.0704469 12.9575 0 12.7114Z" fill="white"/>
            <path d="M8.95569 19.7382C6.84556 19.7382 4.73707 19.7305 2.62858 19.7459C2.23539 19.749 2.09286 19.6305 2.11088 19.2645C2.13545 18.78 2.13217 18.2924 2.11088 17.8079C2.09449 17.448 2.22556 17.3173 2.6253 17.3204C4.65352 17.3357 6.6801 17.3281 8.70831 17.3281C10.9266 17.3281 13.1448 17.3373 15.3631 17.3204C15.7776 17.3173 15.9201 17.4419 15.8972 17.8264C15.8677 18.3109 15.871 18.7984 15.8955 19.2829C15.9136 19.6336 15.7825 19.7474 15.4057 19.7459C13.2562 19.7321 11.1051 19.7382 8.95569 19.7382Z" fill="white"/>
            <path d="M8.8946 23.9998C7.41194 23.9337 6.02102 23.4492 5.17566 22.0464C4.99872 21.7542 4.925 21.4035 4.83326 21.0728C4.76445 20.8237 4.88568 20.6914 5.1773 20.6914C7.73141 20.6945 10.2855 20.6945 12.8413 20.6929C13.2263 20.6929 13.205 20.9221 13.1591 21.1636C12.9691 22.1449 12.3678 22.8524 11.4815 23.363C10.7328 23.7983 9.90707 23.9798 8.8946 23.9998Z" fill="white"/>
         </svg>
      </div>
   </div>
   {breakpoints.lg && (
   <VideoHero
      src={videoMobile}
      poster={videoMobileThumbnail}
      className="hero-video absolute object-contain z-0 !w-full bottom-0 left-0 right-0 !h-[calc(100%+64px)] !-top-16 lg:hidden"
      autoPlay
      />
   )}
   {!breakpoints.lg && (
   <VideoHero
      src={video}
      poster={videoThumbnail}
      className="hero-video hidden absolute object-contain z-0 !w-full !h-full -top-8 -right-14 lg:block"
      autoPlay
      />
   )}
</section>
)
}
export default HeroIndex