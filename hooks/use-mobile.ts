import * as React from "react";

export function useMobile() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isMobile;
}
