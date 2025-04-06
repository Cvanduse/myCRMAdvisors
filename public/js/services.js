(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", () => {
    const e = document.querySelector(".service-list ul"), t = document.querySelectorAll(".service-list-item"), i = document.querySelectorAll(".service-detail-content");
    if (e && t.length && i.length) {
      let s2 = function(s3) {
        document.querySelector(".service-list-item.active")?.classList.remove("active"), document.querySelector(".service-detail-content.active")?.classList.add("d-none"), document.querySelector(".service-detail-content.active")?.classList.remove("active");
        const c = document.querySelector(`.service-list-item[data-service-id="${s3}"]`), n = document.getElementById(s3);
        c && n && (c.classList.add("active"), n.classList.remove("d-none"), n.classList.add("active"));
      };
      var s = s2;
      t.forEach((t2) => {
        t2.addEventListener("mouseover", function() {
          e.classList.add("list-active");
          const t3 = this.getAttribute("data-service-id");
          s2(t3);
        }), t2.addEventListener("touchstart", function(t3) {
          t3.preventDefault(), e.classList.add("list-active");
          const i2 = this.getAttribute("data-service-id");
          s2(i2);
        });
      }), e.addEventListener("mouseleave", function() {
        e.classList.remove("list-active");
      });
    }
  });
})();
