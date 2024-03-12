// Функція для перевірки умов і відкриття нової сторінки
function checkAndOpenNewPageOnce() {
  if (
    window.location.href ===
    "https://www.raterhub.com/evaluation/rater/task/index"
  ) {
    // Отримати елемент з класом "ewok-rater-task-header"
    const taskHeader = document.querySelector(".ewok-rater-task-header");

    if (
      taskHeader &&
      taskHeader.textContent !==
        "No tasks are currently available.  Please try again later."
    ) {
      // Відкрити нову сторінку
      window.open("https://play.tavr.media/radioroks/", "_blank");
    }
  }
}

window.onload = function () {
  if (
    window.location.href ===
    "https://www.raterhub.com/evaluation/rater/task/index"
  ) {
    checkAndOpenNewPageOnce();

    // Перезавантажити сторінку кожні 9 секунд
    setInterval(function () {
      window.location.reload();
    }, 9000);
  }
};
