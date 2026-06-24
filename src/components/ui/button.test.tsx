import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("renders its children", () => {
    render(<Button>Book a Consultation</Button>);
    expect(
      screen.getByRole("button", { name: "Book a Consultation" }),
    ).toBeInTheDocument();
  });

  it("applies the secondary variant classes", () => {
    render(<Button variant="secondary">Go</Button>);
    expect(screen.getByRole("button", { name: "Go" })).toHaveClass("bg-primary");
  });

  it("can be disabled", () => {
    render(<Button disabled>Nope</Button>);
    expect(screen.getByRole("button", { name: "Nope" })).toBeDisabled();
  });
});
