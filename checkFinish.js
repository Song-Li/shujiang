var interval = null;
function startCheck() {
  interval = setInterval(checkFinished, 500);
}

function checkFinished() {
  console.log("checking");
  const Http = new XMLHttpRequest();
  const url='http://127.0.0.1:5000/checkFinished';
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    res = Http.responseText;
    console.log(res);
    if(res === 'True') {
      clearInterval(interval);
      whenFinishedDo();
    }
  }
}

function whenFinishedDo(){
  document.getElementById('show').innerHTML = "Finished";
}
