// Функція для перевірки умов і відкриття нової сторінки
function checkAndOpenNewPageOnce() {
  if (
    window.location.href ===
      "https://www.raterhub.com/evaluation/rater/task/index" ||
    window.location.href === "https://www.raterhub.com/evaluation/rater/task"
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

// Викликати функцію checkAndOpenNewPageOnce() при завантаженні сторінки
window.onload = function () {
  checkAndOpenNewPageOnce();

  // Встановити періодичний виклик функції перезавантаження сторінки
  setInterval(function () {
    // Змінити URL-адресу сторінки, щоб змусити перезавантаження

    window.location.href = window.location.href;
  }, 9000);
};
