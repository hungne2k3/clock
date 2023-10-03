setInterval(() => {
  let hh = document.getElementById("hh");
  let mm = document.getElementById("mm");
  let ss = document.getElementById("ss");
  let setDot = document.querySelector(".set-dot");
  let minDot = document.querySelector(".min-dot");
  let hrDot = document.querySelector(".hr-dot");
  let hr = document.getElementById("hr");
  let mn = document.getElementById("mn");
  let sc = document.getElementById("sc");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  // 12h
  hh.style.strokeDashoffset = 510 - (510 * h) / 12;
  // 60phut
  mm.style.strokeDashoffset = 630 - (630 * m) / 60;
  // 60s
  ss.style.strokeDashoffset = 760 - (760 * s) / 60;

  // 360 / 60 seconds = 6
  setDot.style.transform = `rotateZ(${s * 6}deg)`;

  // 360 / 60 minutes = 6
  minDot.style.transform = `rotateZ(${m * 6}deg)`;

  //360 / 12hr = 30
  hrDot.style.transform = `rotateZ(${h * 30}deg)`;

  sc.style.transform = `rotateZ(${s * 6}deg)`;
  mn.style.transform = `rotateZ(${m * 6}deg)`;
  hr.style.transform = `rotateZ(${h * 30}deg)`;
});
