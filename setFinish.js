function doWork() {
  setTimeout(sendFinished, 10000);
}

function sendFinished() {
  console.log("start send");
  const Http = new XMLHttpRequest();
  const url='http://127.0.0.1:5000/setFinished';
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
  }
}
