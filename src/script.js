// eslint-disable-next-line no-console
console.log("%cyt-not-interested-bulk loaded", "color: hotpink; font-weight: bold");

/**
 * @param {string} xpathExpression - The XPath expression to search for.
 * @returns {Node | null} - The Node found or null if not found.
 */
function xpathFind(xpathExpression) {
  return document
    .evaluate(xpathExpression, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
    .singleNodeValue;
}

document.addEventListener("keydown", ({ key }) => {
  const activeTag = document.activeElement?.tagName;
  if (activeTag === "INPUT" || activeTag === "TEXTAREA" || key !== "F1") {
    return;
  }
  /** @type {NodeListOf<HTMLButtonElement>} */
  const optionButtons = document.querySelectorAll(".dropdown-trigger > button");
  for (let i = 0; i < optionButtons.length; i++) {
    setTimeout(() => {
      const button = optionButtons[i];
      button.click();
      setTimeout(() => {
        const notInterestedButton = xpathFind("//yt-formatted-string[text()='Not interested']");
        if (notInterestedButton instanceof HTMLElement) {
          notInterestedButton.click();
        }
      }, 5);
    }, i * 30);
  }
});
