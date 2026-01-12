function __initLayoutNavigation() {
    const navLinks = document.querySelectorAll("[data-nav-link]");
    let currentPath = window.location.pathname.replace(/\/$/, "") || "/";

    // 프로그램 상세(/program2 등)는 상위 메뉴(/program)를 활성화
    if (currentPath.startsWith("/program2")) {
        currentPath = "/program";
    }

    navLinks.forEach((link) => {
        const href = link.getAttribute("href").replace(/\/$/, "") || "/";
        if (href === currentPath) {
            link.classList.add("active");
        }
    });

    const toggleButton = document.querySelector("[data-mobile-toggle]");
    const navigation = document.querySelector(".navigation");

    if (toggleButton && navigation && !toggleButton.dataset.bound) {
        toggleButton.addEventListener("click", () => {
            navigation.classList.toggle("open");
            toggleButton.setAttribute(
                "aria-expanded",
                navigation.classList.contains("open").toString()
            );
        });

        navigation.addEventListener("click", (event) => {
            if (event.target.matches("[data-nav-link]")) {
                navigation.classList.remove("open");
                toggleButton.setAttribute("aria-expanded", "false");
            }
        });

        toggleButton.dataset.bound = "true";
    }
}

window.__initLayoutNavigation = __initLayoutNavigation;

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", __initLayoutNavigation);
} else {
    __initLayoutNavigation();
}
