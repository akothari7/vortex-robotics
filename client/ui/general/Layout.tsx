import React, { ReactNode } from "react";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
interface LayoutProps {
  children?: ReactNode;
  title?: string;
}

//create a react query client
const queryClient = new QueryClient();

//Main layout
const Layout = ({
  children,
  title = "Vortex Robotics | Home",
}: LayoutProps) => (
  <QueryClientProvider client={queryClient}>
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </div>
  </QueryClientProvider>
);

export default Layout;
