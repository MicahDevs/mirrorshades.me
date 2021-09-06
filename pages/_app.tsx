import 'tailwindcss/tailwind.css'
import Head from 'next/head'
function Robes({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            background: #000000e0;
            color: white;
            overflow-x: hidden;
          }
        `}
      </style>
      <Head>
        <title>mirrorshades.me</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@@jack" />
        <meta property="og:url" content="https://mirrorshades.me" />
        <meta property="og:title" content="mirrorshades.me" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta
          property="og:description"
          content="See the floor price of Mirrorshades from the Gear (for Punks) project."
        />
        <meta property="og:image" content="../og.png" />
      </Head>
<iframe src="https://ethtalk.app/embed?url=https://ethtalk.app/" id="ethtalk" width="100%" frameBorder="0"></iframe>

<script>window.addEventListener("message",function(t){"string"==typeof t.data&&-1!=t.data.indexOf("height:")&&(document.getElementById("ethtalk").style.height=t.data.split(":")[1]+"px")});</script>
    </>
  )
}

export default Robes
