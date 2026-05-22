import { describe, expect, it } from "vitest";
import { STRINGS } from "./strings";

describe("STRINGS", () => {
  it("keeps bootstrap safety copy explicit", () => {
    expect(STRINGS.readiness.noScanning).toContain("No filesystem scanning");
    expect(STRINGS.readiness.noCleanup).toContain("No cleanup");
    expect(STRINGS.readiness.localFirst).toContain("No telemetry");
  });
});
