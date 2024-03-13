// Функція для перевірки умов і відкриття нової сторінки, а також перезавантаження сторінки кожні 9 секунд
function checkAndOpenNewPageOnce() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const currentTab = tabs[0];
    const currentUrl = currentTab.url;

    if (
      currentUrl === "https://www.raterhub.com/evaluation/rater/task/index" ||
      currentUrl === "https://www.raterhub.com/evaluation/rater/task"
    ) {
      // Отримати елемент з класом "ewok-rater-task-header"
      chrome.tabs.executeScript(currentTab.id, {
        code: `
                const taskHeader = document.querySelector(".ewok-rater-task-header");
                if (
                    taskHeader &&
                    taskHeader.textContent.trim() !== "No tasks are currently available.  Please try again later."
                ) {
                    // Відкрити нову сторінку
                    window.open("https://play.tavr.media/radioroks/", "_blank");

                    // Змінити URL-адресу сторінки, щоб змусити перезавантаження
                    window.location.href = window.location.href;
                }
            `,
      });
    }
  });
}

// Викликати функцію checkAndOpenNewPageOnce() та перезавантажувати сторінку кожні 9 секунд
function initializeExtension() {
  setInterval(checkAndOpenNewPageOnce, 9000);
}

// Викликати функцію для ініціалізації розширення
initializeExtension();
