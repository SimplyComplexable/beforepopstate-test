import '../styles/globals.css'
import {useRouter} from "next/router";
import React from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const setIsOpen = () => {
    alert('hello');
  }
  React.useEffect(() => {
    router.push('/', '/asdf', { shallow: true });
    router.beforePopState(() => {
        setIsOpen(true);
      return true;
    });

  }, [setIsOpen, router.route]);
  return <Component {...pageProps} />
}

export default MyApp
