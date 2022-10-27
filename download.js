export function downloadFile(fileurl, filename) {
  //创建隐藏的可下载链接
  const a = document.createElement("a");
  a.download = filename;
  a.style.display = "none";
  if (filename) {
    a.href = fileurl + `?exportName=${filename}`;
  } else {
    a.href = fileurl;
  }
  //
  document.body.appendChild(a);
  // 触发点击
  a.click();
  // 然后移除
  document.body.removeChild(a);
}

//   多文件下载
export function loadFilesWin(urls) {
  var urlsArray = urls.split(","); //被逗号分隔的多个文件的地址
  for (var i = 0; i < urlsArray.length; i++) {
    var aDom = document.createElement("a"); //创建标签
    var evt = document.createEvent("mouseevents"); //创建事件
    evt.initMouseEvent("click", false, false); //初始化事件，绑定点击事件，不冒泡，不阻止浏览器默认行为
    aDom.download = `file${i + 1}.${urlsArray[i].split(".")[1]}`;
    aDom.href = urlsArray[i]; //对地址进行编码
    aDom.click();
    aDom.dispatchEvent(evt); //触发事件
  }
}
