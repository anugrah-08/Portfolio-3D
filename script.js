document.getElementById("scroll-down-btn").addEventListener("click", () => {
    // Scroll to footer
    document.getElementById("footer-main").scrollIntoView({ behavior: "smooth" });

    // After 2.5 seconds (adjust as needed), scroll back to hero
    setTimeout(() => {
      document.getElementById("hero-main").scrollIntoView({ behavior: "smooth" });
    }, 1000);
  });