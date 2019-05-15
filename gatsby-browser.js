import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import './src/components/css/layout.css';
import './src/components/css/header.css';
import './src/components/css/home.css';

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}
