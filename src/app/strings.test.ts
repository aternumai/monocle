import { describe, expect, it } from "vitest";
import { STRINGS, type ScreenId } from "./strings";

describe("STRINGS", () => {
  it("defines every MVP shell screen", () => {
    const screenIds = STRINGS.screens.map((screen) => screen.id);
    const expectedScreens: ScreenId[] = [
      "dashboard",
      "scan",
      "largeFiles",
      "duplicates",
      "cacheAnalyzer",
      "settings",
    ];

    expect(screenIds).toEqual(expectedScreens);
  });

  it("keeps safety copy explicit", () => {
    expect(STRINGS.safety.title).toContain("No automatic cleanup");
    expect(STRINGS.safety.copy).toContain("does not scan files");
    expect(STRINGS.safety.copy).toContain("explicit review and confirmation");
  });

  it("keeps scan action unavailable until command contracts exist", () => {
    const scanScreen = STRINGS.screens.find((screen) => screen.id === "scan");

    expect(scanScreen?.primaryAction?.label).toBe("Scan unavailable");
    expect(scanScreen?.primaryAction?.disabled).toBe(true);
  });
});
