function getAllArticles () {
  fetch('/items').then(function (response) {
    return response.json().then(function(json) {
      var articles = document.getElementById('articles')
        json.forEach(function (item) {
          var newArticle = document.createElement('article')
          var link = document.createElement('a')
          var newTitle = document.createTextNode(item['title'])
          link.setAttribute('href', item['url'])
          link.appendChild(newTitle)
          newArticle.appendChild(link)
          articles.appendChild(newArticle)
        })
    })
  })
}
getAllArticles()
