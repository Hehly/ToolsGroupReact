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
  