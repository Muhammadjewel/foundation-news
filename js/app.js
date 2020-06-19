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

var API_KEY = '94d05747d7344d7391264e6dacae98ad';

$(document).ready(function () {
  // Load top-headlines from server
  $.ajax('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + API_KEY, {
    method: 'GET',
    success: function (response) {
      // Har bir maqola uchun
      $.each(response.articles, function (index, article) {
        // Uning shablonidan nusxa yaratyapmiz
        var articleMarkup = $(topArticleHTML);

        // Nusxasini mos ma'lumot bilan to'ldiryapmiz
        articleMarkup.attr('href', article.url);
        articleMarkup.find('.top-article__heading').text(article.title);
        articleMarkup.find('.top-article__date').text(article.publishedAt);

        // Sahifaga qo'shamiz
        $('.top-headlines__list').append(articleMarkup);
      });
    },
    error: function (errorType, errorMessage, request) {
      console.log(errorType, errorMessage);
    }
  });

  // Search for articles on form submit
  $('.search-form').on('submit', function (evt) {
    evt.preventDefault();

    // Prepare query parameters for AJAX
    var requestData = {};
    requestData.apiKey = API_KEY;
    requestData.language = 'en';
    requestData.from = $(this).find('.search-start-date').val();
    requestData.to = $(this).find('.search-end-date').val();

    // Search in title or in whole article
    var searchInTitleOnly = $(this).find('.search-in-title-checkbox').is(':checked');
    if (searchInTitleOnly) {
      requestData.qInTitle = $(this).find('.search-query-input').val();
    } else {
      requestData.q = $(this).find('.search-query-input').val();
    }


    // Get articles via AJAX
    $.ajax('https://newsapi.org/v2/everything', {
      method: 'GET',
      data: requestData,
      success: function (response) {
        console.log(response);
      },
      error: function (errorType, errorMessage, request) {
        console.log(errorType, errorMessage);
      }
    });
  });

});
