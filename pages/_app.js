import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import Head from "next/head";
import "../styles/index.css";
export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "5cl4qetx9z");`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/4abc598255676670b7524b68c/4af7df9e645a7b613206abef1.js");`,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
