$(document).foundation();

var articleHTML = `
  <article class="article callout media-object stack-for-small">
    <div class="media-object-section">
      <img class="article__img" src="https://placehold.it/200x200" alt="" width="200" height="200">
    </div>
    <div class="media-object-section">
      <h4 class="h5"><a class="article__link" href="#" target="_blank"></a></h4>
      <p>
        <img class="icon" src="img/user-solid.svg" alt="user icon" width="15" height="15">
        <b class="article__author"></b> 
        <img class="icon" src="img/clock-regular.svg" alt="clock icon" width="15" height="15">
        <span class="article__date"></span>
      </p>
      <p class="article__description"></p>
    </div>
  </article>`;

var topArticleHTML = `
  <a class="top-headlines__article top-article callout" href="#" target="_blank">
    <h3 class="top-article__heading h5"></h3>
    <div>
      <img class="icon" src="img/clock-regular.svg" alt="Clock icon" width="15">
      <span class="top-article__date"></span>
    </div>
  </a>`;
