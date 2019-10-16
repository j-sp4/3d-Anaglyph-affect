export function addStyle(left: HTMLElement, right: HTMLElement) {
  if (left.parentElement && right.parentElement) {
    left.parentElement.classList.add("style-on");
    right.parentElement.classList.add("style-on");
  }
}

export function removeStyle(left: HTMLElement, right: HTMLElement) {
  if (left.parentElement && right.parentElement) {
    left.parentElement.classList.remove("style-on");
    right.parentElement.classList.remove("style-on");
  }
}
