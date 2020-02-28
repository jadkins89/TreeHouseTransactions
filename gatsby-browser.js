import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './src/components/css/layout.css';
import './src/components/css/general.css';
import './src/components/css/header.css';
import './src/components/css/footer.css';
import './src/components/css/home.css';
import './src/components/css/contactform.css';
import './src/components/css/about.css';
import './src/components/css/reviewitems.css';
import './src/components/css/services.css';
import './src/utils/fonts.css';

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
  
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
}
