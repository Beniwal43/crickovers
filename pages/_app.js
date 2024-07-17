import "@/styles/globals.css";
import "@/styles/animate.css";
import "@/styles/bootstrap.css";
import "@/styles/custom.css";
import "@/styles/flaticon_visa_and_immigration.css";
import "@/styles/font-awesome-pro.css";
import "@/styles/magnific-popup.css";
import "@/styles/spacing.css";
import "@/styles/swiper-bundle.css";
import "@/styles/main.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Header/>
      <Component {...pageProps} />;
      <Footer />
      <Script
          src="/assets/js/vendor/jquery.js"
          strategy="lazyOnload"
          onLoad={() => console.log(`Script loaded correctly.`)}
        />
        <Script
          src="/assets/js/bootstrap-bundle.js"
          strategy="lazyOnload"
          onLoad={() => console.log(`Script loaded correctly.`)}
        />
        <Script
          src="/assets/js/swiper-bundle.js"
          strategy="lazyOnload"
          onLoad={() => console.log(`Script loaded correctly.`)}
        />
        <Script
          src="/assets/js/jquery-appear.js"
          strategy="lazyOnload"
          onLoad={() => console.log(`Script loaded correctly.`)}
        />
        <Script
          src="/assets/js/jquery-knob.js"
          strategy="lazyOnload"
          onLoad={() => console.log(`Script loaded correctly.`)}
        />
        <Script
          src="/assets/js/magnific-popup.js"
          strategy="lazyOnload"
          onLoad={() => console.log(`Script loaded correctly.`)}
        />
        <Script
          src="/assets/js/nice-select.js"
          strategy="lazyOnload"
          onLoad={() => console.log(`Script loaded correctly.`)}
        />
        <Script
          src="/assets/js/purecounter.js"
          strategy="lazyOnload"
          onLoad={() => console.log(`Script loaded correctly.`)}
        />
        <Script
          src="/assets/js/wow.js"
          strategy="lazyOnload"
          onLoad={() => console.log(`Script loaded correctly.`)}
        />
        <Script
          src="/assets/js/range-slider.js"
          strategy="lazyOnload"
          onLoad={() => console.log(`Script loaded correctly.`)}
        />
        <Script
          src="/assets/js/imagesloaded-pkgd.js"
          strategy="lazyOnload"
          onLoad={() => console.log(`Script loaded correctly.`)}
        />
        <Script
          src="/assets/js/ajax-form.js"
          strategy="lazyOnload"
          onLoad={() => console.log(`Script loaded correctly.`)}
        />
        <Script
          src="/assets/js/email-decode.min.js"
          strategy="lazyOnload"
          onLoad={() => console.log(`Script loaded correctly.`)}
        />
        <Script
          src="/assets/js/jquery.validate.min.js"
          strategy="lazyOnload"
          onLoad={() => console.log(`Script loaded correctly.`)}
        />
        <Script
          src="/assets/js/custom.js"
          strategy="lazyOnload"
          onLoad={() => console.log(`Script loaded correctly.`)}
        />
        <Script
          src="/assets/js/main.js"
          strategy="lazyOnload"
          onLoad={() => console.log(`Script loaded correctly.`)}
        />
    </React.Fragment>
  );
}
