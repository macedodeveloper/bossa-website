"use client";

import { ListingGrid, SiteShell, allWork } from "../idc";

export default function WorkPage() {
  return (
    <SiteShell>
      <ListingGrid items={allWork} />
    </SiteShell>
  );
}
