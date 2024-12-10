export function Integrations() {
  return (
    <div className="container mx-auto px-4 py-8 -mt-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-base-content mb-4">Our Integrations</h2>
        <p className="text-lg text-base-content max-w-2xl mx-auto">
          Seamlessly connect with the tools you already use to supercharge your workflow.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-6 max-w-2xl mx-auto">
        {/* Next.js Logo */}
        <div className="mask mask-circle w-32 h-32 bg-base-200 flex items-center justify-center p-4">
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit={2}>
          <g transform="translate(.722 .64) scale(6.375)">
            <circle cx="40" cy="40" r="40"/>
            <path d="M66.448 70.009L30.73 24H24v31.987h5.384v-25.15l32.838 42.427a40.116 40.116 0 004.226-3.255z" fill="url(#prefix___Linear1)" fillRule="nonzero"/>
            <path fill="url(#prefix___Linear2)" d="M51.111 24h5.333v32h-5.333z"/>
          </g>
          <defs>
            <linearGradient id="prefix___Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="rotate(51.103 -29.93 76.555) scale(25.1269)">
              <stop offset="0" stopColor="#fff"/>
              <stop offset="1" stopColor="#fff" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="prefix___Linear2" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90.218 14.934 38.787) scale(23.50017)">
              <stop offset="0" stopColor="#fff"/>
              <stop offset="1" stopColor="#fff" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
        </div>

        {/* Auth.js Logo */}
        <div className="mask mask-circle w-32 h-32 bg-base-200 flex items-center justify-center p-4">
          <svg width={210} height={232} viewBox="0 0 210 232" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M208.687 31.859L30.0947 167.73C8.16388 127.966 0.567559 79.9975 0 51.2275V33.6181C0 31.0567 2.7788 29.5628 4.16851 29.1356C33.5617 20.2778 93.2465 2.30524 96.8378 1.28069C100.429 0.256138 103.464 0 104.534 0H104.631C105.7 0 108.735 0.256138 112.327 1.28069C115.918 2.30524 175.603 20.2778 204.996 29.1356C206.03 29.4533 207.832 30.3613 208.687 31.859Z" fill="url(#paint0_linear_128_61)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M30.0938 167.952L208.686 32.0815C208.981 32.5983 209.164 33.1842 209.164 33.8406V51.45C208.202 100.223 187.038 204.172 110.081 229.786C109.013 230.213 106.49 231.067 104.951 231.067H104.212C102.673 231.067 100.15 230.213 99.0814 229.786C67.5193 219.281 45.3415 195.6 30.0938 167.952Z" fill="url(#paint1_linear_128_61)"/>
            <path d="M111.74 1.28325C108.147 0.25665 105.11 0 104.04 0L103.719 231.305H104.361C105.901 231.305 108.425 230.45 109.494 230.022C186.489 204.357 207.663 100.2 208.625 51.3299V33.6853C208.625 31.1188 205.845 29.6216 204.454 29.1939C175.047 20.3181 115.333 2.30985 111.74 1.28325Z" fill="url(#paint2_linear_128_61)" fillOpacity={0.21}/>
            <ellipse cx={104.905} cy={114.209} rx={47.801} ry={47.4802} fill="#E3E2FA"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M96.2435 124.475C92.6077 124.796 83.4111 123.192 78.9197 119.342C74.0971 115.208 71.541 109.718 71.541 101.697C71.541 91.7469 80.5239 81.1654 93.0355 81.4861C104.919 81.7907 112.934 88.4894 114.53 99.1307C115.363 104.684 114.514 107.353 113.854 109.426C113.752 109.749 113.654 110.057 113.568 110.359C113.247 111.429 112.798 113.76 113.568 114.53C114.337 115.3 126.079 126.614 131.854 132.174C132.388 132.816 133.458 134.42 133.458 135.703V141.799C133.458 142.761 133.201 143.082 132.175 143.082H119.342C118.594 142.975 117.096 142.248 117.096 140.195C117.096 138.006 116.863 137.684 116.396 137.039C116.316 136.928 116.228 136.807 116.134 136.666C115.492 135.703 114.209 135.703 112.926 135.703C111.643 135.703 110.68 135.382 110.039 134.741C109.397 134.099 109.397 133.137 109.718 131.854C110.039 130.57 109.718 129.287 109.076 128.966C108.974 128.915 108.856 128.848 108.723 128.772C108.019 128.372 106.896 127.734 105.547 128.004C103.943 128.325 101.697 128.004 100.414 126.721C99.131 125.437 97.5267 124.401 96.2435 124.475ZM87.5814 100.094C90.2391 100.094 92.3936 97.9393 92.3936 95.2816C92.3936 92.6239 90.2391 90.4694 87.5814 90.4694C84.9237 90.4694 82.7692 92.6239 82.7692 95.2816C82.7692 97.9393 84.9237 100.094 87.5814 100.094Z" fill="url(#paint3_linear_128_61)"/>
            <defs>
            <linearGradient id="paint0_linear_128_61" x1={19.5695} y1={96.5644} x2={97.5269} y2={15.0782} gradientUnits="userSpaceOnUse">
              <stop offset={0} stopColor="#45FFC8"/>
              <stop offset={1} stopColor="#1DBBF1"/>
            </linearGradient>
            <linearGradient id="paint1_linear_128_61" x1={73.7856} y1={143.724} x2={170.671} y2={190.884} gradientUnits="userSpaceOnUse">
              <stop offset={0} stopColor="#D14AE8"/>
              <stop offset={0.552228} stopColor="#B628E3"/>
              <stop offset={1} stopColor="#8315FD"/>
            </linearGradient>
            <linearGradient id="paint2_linear_128_61" x1={155.914} y1={21.8152} x2={155.914} y2={182.542} gradientUnits="userSpaceOnUse">
              <stop offset={0} stopColor="#20ABF5"/>
              <stop offset={0.398093} stopColor="#2A8CC3"/>
              <stop offset={1} stopColor="#A104DC"/>
            </linearGradient>
            <linearGradient id="paint3_linear_128_61" x1={90.1481} y1={99.4517} x2={129.287} y2={138.912} gradientUnits="userSpaceOnUse">
              <stop offset={0} stopColor="#FE5B01"/>
              <stop offset={1} stopColor="#FFB200"/>
            </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Prisma Logo */}
        <div className="mask mask-circle w-32 h-32 bg-base-200 flex items-center justify-center p-4">
            <svg width="159" height="194" viewBox="0 0 159 194" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.39749 123.139C0.476293 126.272 0.506027 130.226 2.47414 133.331L38.0964 189.524C40.4083 193.171 44.8647 194.834 49.0006 193.593L151.798 162.754C157.408 161.071 160.23 154.813 157.778 149.494L91.6953 6.14463C88.4726 -0.846183 78.7573 -1.42002 74.734 5.14279L2.39749 123.139ZM89.9395 38.9158C88.535 35.6658 83.7788 36.1664 83.0817 39.6375L57.64 166.316C57.1035 168.987 59.6044 171.268 62.215 170.489L133.24 149.287C135.313 148.669 136.381 146.379 135.522 144.393L89.9395 38.9158Z" fill="#4C51BF"/>
            </svg>
        </div>

        {/* Stripe Logo */}
        <div className="mask mask-circle w-32 h-32 bg-base-200 flex items-center justify-center p-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="stripe-s">
            <path fill="#646FDE" d="M11.106 18.592c-2.215 0-5.077-.914-7.324-2.133v6.022A18.597 18.597 0 0 0 11.102 24c5.564 0 9.398-2.39 9.398-7.198 0-7.976-10.229-6.547-10.229-9.556l-.001-.001c0-1.045.873-1.448 2.271-1.448 2.036 0 4.621.623 6.658 1.72V1.223C16.981.337 14.766 0 12.547 0 7.118 0 3.5 2.83 3.5 7.564c0 7.401 10.173 6.201 10.173 9.392 0 1.238-1.074 1.636-2.567 1.636z"></path>
        </svg>
        </div>
      </div>
    </div>
  )
}