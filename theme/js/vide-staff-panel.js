/* ============================================================
   VIDE OIT Help Desk — Staff Panel enhancements
   1) Collapsible mobile sidebar with backdrop + Escape-to-close
   2) Dark mode toggle (persisted, useful for overnight NOC shifts)

   Written defensively: every selector is optional-chained so this
   never throws if a given osTicket build's markup differs slightly.
   ============================================================ */
(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    var sidebar = document.querySelector("#sidebar, .sidebar");
    var topbar = document.querySelector("#staff-header, #header, .staff-header");

    // --- 1) Mobile sidebar toggle + backdrop ---
    if (sidebar && topbar) {
      var backdrop = document.createElement("div");
      backdrop.className = "vide-sidebar-backdrop";
      document.body.appendChild(backdrop);

      var toggleBtn = document.createElement("button");
      toggleBtn.className = "vide-sidebar-toggle";
      toggleBtn.setAttribute("aria-label", "Toggle department menu");
      toggleBtn.innerHTML = "&#9776;";
      topbar.insertBefore(toggleBtn, topbar.firstChild);

      function closeSidebar() {
        sidebar.classList.remove("vide-sidebar-open");
        backdrop.classList.remove("vide-sidebar-open");
      }
      function openSidebar() {
        sidebar.classList.add("vide-sidebar-open");
        backdrop.classList.add("vide-sidebar-open");
      }

      toggleBtn.addEventListener("click", function () {
        sidebar.classList.contains("vide-sidebar-open") ? closeSidebar() : openSidebar();
      });
      backdrop.addEventListener("click", closeSidebar);
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeSidebar();
      });
      // Close sidebar automatically after tapping a nav link (mobile UX expectation)
      sidebar.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", closeSidebar);
      });
    }

    // --- 2) Dark mode toggle ---
    var savedTheme = localStorage.getItem("vide-theme");
    if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);

    if (topbar && !document.querySelector(".vide-theme-toggle")) {
      var themeBtn = document.createElement("button");
      themeBtn.className = "vide-theme-toggle";
      themeBtn.setAttribute("aria-label", "Toggle dark mode");
      themeBtn.textContent = savedTheme === "dark" ? "☀" : "🌙";
      topbar.appendChild(themeBtn);

      themeBtn.addEventListener("click", function () {
        var isDark = document.documentElement.getAttribute("data-theme") === "dark";
        var next = isDark ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("vide-theme", next);
        themeBtn.textContent = next === "dark" ? "☀" : "🌙";
      });
    }
  });
})();
