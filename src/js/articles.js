const articlesList = [
  {
    title: "1Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum earum illo quo repellat, molestiae quas nisi consectetur doloribus eligendi corrupti obcaecati impedit illum officia in aut magni. Sit, facilis omnis.",
  },
  {
    title: "2Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum earum illo quo repellat, molestiae quas nisi consectetur doloribus eligendi corrupti obcaecati impedit illum officia in aut magni. Sit, facilis omnis.",
  },
  {
    title: "3Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum earum illo quo repellat, molestiae quas nisi consectetur doloribus eligendi corrupti obcaecati impedit illum officia in aut magni. Sit, facilis omnis.",
  },
  {
    title: "4Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum earum illo quo repellat, molestiae quas nisi consectetur doloribus eligendi corrupti obcaecati impedit illum officia in aut magni. Sit, facilis omnis.",
  },
  {
    title: "5Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum earum illo quo repellat, molestiae quas nisi consectetur doloribus eligendi corrupti obcaecati impedit illum officia in aut magni. Sit, facilis omnis.",
  },
  {
    title: "6Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum earum illo quo repellat, molestiae quas nisi consectetur doloribus eligendi corrupti obcaecati impedit illum officia in aut magni. Sit, facilis omnis.",
  },
  {
    title: "7Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum earum illo quo repellat, molestiae quas nisi consectetur doloribus eligendi corrupti obcaecati impedit illum officia in aut magni. Sit, facilis omnis.",
  },
  {
    title: "8Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum earum illo quo repellat, molestiae quas nisi consectetur doloribus eligendi corrupti obcaecati impedit illum officia in aut magni. Sit, facilis omnis.",
  },
];

function setArticles() {
  const articlesUl = document.getElementById("articlesUl");
  

  articlesList.map((article) => {
    const card = setArticleContainer(article);
    articlesUl.appendChild(card);
  });
}

function setArticleContainer(article){
    const articleLi = document.createElement("li");
    const articleContainer = document.createElement("div");
    const articleImg = document.createElement("img");
    const articleTitle = document.createElement("h4");
    const articleDesc = document.createElement("p");

    articleImg.setAttribute("class", "card__image");
    articleImg.setAttribute("src", "https://via.placeholder.com/150x150")
    
    articleTitle.setAttribute("class" , "card__title");
    articleTitle.appendChild(document.createTextNode(`${article.title}`));
    
    articleDesc.setAttribute("class" , "card__desc");
    articleDesc.appendChild(document.createTextNode(`${article.desc}`));

    articleContainer.setAttribute("id", "cardContainer");
    articleContainer.setAttribute("class", "card__container");

    articleContainer.appendChild(articleImg);
    articleContainer.appendChild(articleTitle);
    articleContainer.appendChild(articleDesc);

    articleLi.setAttribute("id", article.title + Math.random());
    articleLi.appendChild(articleContainer);
    
    return articleLi;
}