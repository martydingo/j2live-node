"use client";

import { AppShell, Flex, Title } from "@mantine/core";
import { Icon } from "@iconify/react";

export default function NavHeader() {
  return (
    <AppShell.Header>
      <Flex
        align="start"
        gap="xs"
        style={{ marginLeft: "1em", marginTop: "1em" }}
      >
        <Icon fontSize="2.1em" icon="file-icons:jinja" />
        <Title>J2Live</Title>
      </Flex>
    </AppShell.Header>
  );
}
