export const animationCreate = () => {
  if (typeof window !== "undefined") {
    import("wowjs").then((module) => {
      const WOW = module.default;
      new WOW.WOW({live: false}).init()
    });
  }
};

import { useEffect } from "react";

export const useWowAnimation = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("wowjs").then((module) => {
        const WOW = module.default;
        setTimeout(() => {
          new WOW({ live: false }).init();
        }, 100); // Adjust delay if necessary
      });
    }
  }, []);
};
