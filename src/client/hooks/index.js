import { useState } from "react";

import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

export const useDevice = () => {
  const [device, setDevice] = useState({});

  const updateSize = () => {
    const tab = window.innerWidth > 833 && window.innerWidth < 1280;
    const mobile = window.innerWidth < 834;
    const desktop = window.deviceWidth >= 1280;

    setDevice({
      name: mobile ? "mobile" : tab ? "tab" : desktop ? "desktop" : "",
      tab,
      mobile,
      desktop,
    });
  };

  useIsomorphicLayoutEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return device;
};
