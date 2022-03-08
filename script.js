$(function () {
  // 1 HOMEWORK
  let timr;

  const timy = function () {
    const timer = () => {
      let cont = document.querySelector(".counter");
      if (cont.textContent >= 5) {
        clearInterval(timer);
        $(".diviz").fadeToggle("fast");
        time = 0;
      }

      cont.textContent = time++;
    };

    let time = 0;
    timer();
    let timr = setInterval(timer, 1000);
    return timr;
  };

  timy();

  // 2 HOMEWORK

  $(".in").change(function (e) {
    let objec = {
      mode: "dark",
    };
    if ($(this).prop("checked")) {
      localStorage.setItem("mode", JSON.stringify(objec));
      $("body").css("background-color", "black");
      $(".diviz").css("background-color", "white");
    } else {
      localStorage.setItem("mode", "light");
      $("body").css("background-color", "#ccc");
    }
  });
});
