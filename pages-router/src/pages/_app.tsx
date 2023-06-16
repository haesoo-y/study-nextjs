import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>
        <Link href="/todos">todos</Link>
        <div> </div>
        <Link href="/">home</Link>
      </div>
      <Component {...pageProps} />
    </>
  );
}
