import ImageViewer from "./class/ImageViewer";

(() => {
    const iv = new ImageViewer("img", {
        easing: "cubic-bezier(0.6, 0.28, 0.735, 0.045)",
        overlayColor: "rgba(255,155,1,.95d)",
        scale: 1.1,
    });
    // console.log(iv.current);
})();
