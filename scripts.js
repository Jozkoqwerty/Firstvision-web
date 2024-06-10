document.addEventListener("DOMContentLoaded", function() {
    fetch('https://www.hikvision.com/en/news/rss-feed/') // Príklad RSS feed URL
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            const items = data.querySelectorAll("item");
            let html = "";
            items.forEach(el => {
                let title = el.querySelector("title").textContent;
                let link = el.querySelector("link").textContent;
                let description = el.querySelector("description").textContent;
                html += `
                    <div class="news-item">
                        <h3><a href="${link}" target="_blank">${title}</a></h3>
                        <p>${description}</p>
                    </div>
                `;
            });
            document.getElementById("news-feed").innerHTML = html;
        });
});
