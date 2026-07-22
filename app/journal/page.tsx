"use client";

import { ListingGrid, SiteShell, allThinking } from "../idc";

export default function ThinkingPage() {
  return (
    <SiteShell>
      <ListingGrid items={allThinking} />
    </SiteShell>
  );
}
