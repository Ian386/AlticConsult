import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { WhatWeDo } from "./what-we-do";

describe("WhatWeDo", () => {
  it("renders four pillar tabs, the first selected, showing its services", () => {
    render(<WhatWeDo />);
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(4);
    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel")).toHaveTextContent("KRA audit representation");
  });

  it("selects a pillar on click and links the panel to it", async () => {
    const user = userEvent.setup();
    render(<WhatWeDo />);
    const advisory = screen.getByRole("tab", { name: /Business Advisory/i });
    await user.click(advisory);
    expect(advisory).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel")).toHaveAttribute("aria-labelledby", advisory.id);
  });
});
