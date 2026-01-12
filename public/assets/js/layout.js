async function loadPartial(selector, url) {
    const target = document.querySelector(selector);
    if (!target) return;

    try {
        const res = await fetch(url);
        if (!res.ok) return;
        const html = await res.text();
        target.innerHTML = html;
        if (window.__initLayoutNavigation) {
            window.__initLayoutNavigation();
        }
    } catch (e) {
        // ignore load errors in static layout
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadPartial("[data-include-header]", "/partials/header.html");
    loadPartial("[data-include-footer]", "/partials/footer.html");
});


