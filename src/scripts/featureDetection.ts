function detectBlendMode() {
  if (document && "CSS" in window && "supports" in window.CSS) {
    const support = window.CSS.supports("mix-blend-mode", "multiply");
    // tslint:disable-next-line
    document
      .querySelector("html")
      .classList.add(support ? "mix-blend-mode" : "no-mix-blend-mode");
  }
}

export function detectFeatures() {
  detectBlendMode();
}
