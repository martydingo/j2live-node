"use client";

import { AppShell, Center, TypographyStylesProvider } from "@mantine/core";

export default function NavFooter(){
    return (
        <AppShell.Footer>
        <TypographyStylesProvider>
          <Center style={{ paddingBottom: "1em" }}>J2Live v0.1</Center>
        </TypographyStylesProvider>
      </AppShell.Footer>
    )
}