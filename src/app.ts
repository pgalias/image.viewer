import ImageViewer from "./class/ImageViewer";

window.addEventListener("load", function load() {
   window.removeEventListener("load", load, false);

   const iv = new ImageViewer("img", {scale: 1.1, easing: "cubic-bezier(0.6, -0.28, 0.735, 0.045);"});
});
