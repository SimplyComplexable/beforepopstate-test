import '../styles/globals.css'
import {useRouter} from "next/router";
import React from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const setIsOpen = React.useCallback(() => {
    alert('hello');
  }, [])
  const onMount = React.useCallback(async() => {
    router.push('/', '/asdf', { shallow: true });
  }, [setIsOpen, router.route])

  React.useEffect(() => {
    router.beforePopState(() => {
      setIsOpen(true);
      return true;
    });
  },[setIsOpen, router])
  React.useEffect(onMount, [onMount]);
  return <Component {...pageProps} />
}

export default MyApp
