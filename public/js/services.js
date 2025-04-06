(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", function() {
    const serviceList = document.querySelector(".service-list ul");
    const serviceListItems = document.querySelectorAll(".service-list-item");
    const serviceDetailContents = document.querySelectorAll(".service-detail-content");
    if (!serviceList || !serviceListItems.length || !serviceDetailContents.length) {
      return;
    }
    function activateService(serviceId) {
      document.querySelector(".service-list-item.active")?.classList.remove("active");
      document.querySelector(".service-detail-content.active")?.classList.add("d-none");
      document.querySelector(".service-detail-content.active")?.classList.remove("active");
      const listItem = document.querySelector(`.service-list-item[data-service-id="${serviceId}"]`);
      const detailContent = document.getElementById(serviceId);
      if (listItem && detailContent) {
        listItem.classList.add("active");
        detailContent.classList.remove("d-none");
        detailContent.classList.add("active");
      }
    }
    serviceListItems.forEach((item) => {
      item.addEventListener("mouseover", function() {
        serviceList.classList.add("list-active");
        const serviceId = this.getAttribute("data-service-id");
        activateService(serviceId);
      });
      item.addEventListener("touchstart", function(event) {
        event.preventDefault();
        serviceList.classList.add("list-active");
        const serviceId = this.getAttribute("data-service-id");
        activateService(serviceId);
      });
    });
    serviceList.addEventListener("mouseleave", function() {
      serviceList.classList.remove("list-active");
    });
  });
})();
