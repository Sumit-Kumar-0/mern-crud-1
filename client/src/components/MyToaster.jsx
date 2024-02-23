import "./style/MyToaster.css";

export function MyToaster(text, className = "success", duration = 3000) {
  const toastElement = document.createElement("div");
  toastElement.classList.add("my-toaster");
  toastElement.classList.add(className);
  const para = document.createElement("p");
  para.innerText = text;
  const inner = document.createElement("div");
  inner.classList.add("bottom-line");
  toastElement.appendChild(para);
  toastElement.appendChild(inner);
  document.body.appendChild(toastElement);

  setTimeout(() => {
    toastElement.classList.add(className);
    setTimeout(() => {
      toastElement.remove();
    }, 2000);
  }, duration);
}
