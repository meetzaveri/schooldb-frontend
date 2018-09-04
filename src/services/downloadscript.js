function base64toblob(base64) {
  var url = "";
  var base64str = base64;
  console.log("base64str", base64str.split(","));
  var arr = base64str.split(",");
  // decode base64 string, remove space for IE compatibility
  var binary = atob(arr[1]);
  var len = binary.length;
  var buffer = new ArrayBuffer(len);
  var view = new Uint8Array(buffer);
  for (var i = 0; i < len; i++) {
    view[i] = binary.charCodeAt(i);
  }
  console.log("view", view);
  // create the blob object with content-type "application/pdf"
  var blob1 = new Blob([view], { type: "application/pdf" });
  console.log("blob1", blob1);
  url = window.URL.createObjectURL(blob1);

  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  a.href = url;
  a.setAttribute("download", "marksheet.pdf");
  a.click();
  window.URL.revokeObjectURL(url);
}

module.exports = { base64toblob };
