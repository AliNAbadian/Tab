const tabs = document.querySelectorAll("[data-tab-target]");

//console.log(tabs[1].innerHTML);

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    target.classList.add("active");
  });
});
