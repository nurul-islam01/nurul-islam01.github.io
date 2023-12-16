import FontFaceObserver from "fontfaceobserver";

export default function loadFonts() {
  if (typeof window === "undefined") global.window = {};
  const preloadFonts = [
    { fontName: "varendra", data: { weight: 400 } },
    { fontName: "varendra", data: { weight: 700 } },
  ];
  const loadFontFamilies = preloadFonts.map(({ fontName, data }) => new FontFaceObserver(fontName, data).load());
  Promise.all(loadFontFamilies)
    .then(() => {
      document.body.style.opacity = 1;
      document.body.classList.add("fonts-loaded");
    })
    .catch((err) => {
      console.warn(`Some critical font are not available: ${err} `);
    });
}
/* eslint-enable */
