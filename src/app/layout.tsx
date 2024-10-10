import type { Metadata } from "next";
import "./globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { mantine_theme_halcyon } from "@/styles/themes/mantine/halcyon";

export const metadata: Metadata = {
  title: "J2Live",
  description: "Jinja2 / Ansible Live Parser",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body>
        <MantineProvider
          theme={mantine_theme_halcyon}
          defaultColorScheme="dark"
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
