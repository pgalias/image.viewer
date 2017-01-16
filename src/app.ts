import ImageViewer from "./class/ImageViewer";

window.addEventListener("load", function load() {
   window.removeEventListener("load", load, false);

   const iv = new ImageViewer("img", {scale: 1.1});
});
