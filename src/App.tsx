import { useMemo, useState } from "react";
import { AppShell } from "./features/shell/AppShell";
import { STRINGS, type ScreenId } from "./app/strings";

export function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenId>("dashboard");

  const activeScreenContent = useMemo(
    () => STRINGS.screens.find((screen) => screen.id === activeScreen),
    [activeScreen],
  );

  return (
    <AppShell
      activeScreen={activeScreen}
      activeScreenContent={activeScreenContent ?? STRINGS.screens[0]}
      onScreenChange={setActiveScreen}
    />
  );
}
