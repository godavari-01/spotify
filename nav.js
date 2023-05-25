let ol1 = document.querySelector("#ol1");
console.log(ol1);
console.log(ol1.children);
console.log(ol1.children[0]);
ol1.children[0].onclick = function () {
  window.open("https://www.spotify.com/in-en/premium/");
};
ol1.children[1].onclick = function () {
  window.open("https://support.spotify.com/in-en/");
};
ol1.children[2].onclick = function () {
  window.open("https://www.spotify.com/in-en/download/windows/");
};
ol1.children[4].onclick = function () {
  window.open(
    "https://www.spotify.com/in-en/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2F%3F"
  );
};
ol1.children[5].onclick = function () {
  window.open(
    "https://accounts.spotify.com/en/login?continue=https%3A%2F%2Fopen.spotify.com%2F%3F"
  );
};
