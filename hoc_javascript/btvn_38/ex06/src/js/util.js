const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const root = $("#root");

export const successAlert = (message) => {
  const successAlertHtml = /*html*/ `<div class="alert alert-success" role="alert">${message}</div>`;
  const alertContainer = $("#alertContainer") || document.createElement("div");
  alertContainer.id = "alertContainer";
  alertContainer.innerHTML = successAlertHtml;
  document.body.appendChild(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, 4000);
};

export const dangerAlert = (message) => {
  const dangerAlertHtml = /*html*/ `<div class="alert alert-danger" role="alert">${message}</div>`;
  const alertContainer = $("#alertContainer") || document.createElement("div");
  alertContainer.id = "alertContainer";
  alertContainer.innerHTML = dangerAlertHtml;
  document.body.appendChild(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, 4000);
};
