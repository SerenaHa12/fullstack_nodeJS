const newsContainer = document.getElementById("news-container");
const loading = document.getElementById("loading");
let page = 1;
let loadingData = false;

async function fetchNews() {
  if (loadingData) return;

  loadingData = true;
  loading.style.display = "block";

  try {
    const response = await fetch(
      `https://q9z2qj-3000.csb.app/news?page=${page}`
    );
    const news = await response.json();

    if (news.length > 0) {
      news.forEach((item) => {
        const newsItem = document.createElement("div");
        newsItem.className = "news-item";
        newsItem.innerHTML = `
                    <img src="${item.photo}" alt="${item.title}">
                    <h2>${item.title}</h2>
                    <p>${item.tag}</p>
                `;
        newsContainer.appendChild(newsItem);
      });

      page++;
    }
  } catch (error) {
    console.error("Error fetching news:", error);
  } finally {
    loadingData = false;
    loading.style.display = "none";
  }
}

function handleScroll() {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 100) {
    fetchNews();
  }
}

// Initial fetch
fetchNews();
window.addEventListener("scroll", handleScroll);
