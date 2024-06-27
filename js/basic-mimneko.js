document.addEventListener("DOMContentLoaded", function() {
  // すべてのdatetime属性を持つ要素の中身をdatetime属性の値に変更する
  var elements = document.querySelectorAll('[datetime]');
  elements.forEach(function(element) {
    var datetimeValue = element.getAttribute('datetime');
    element.textContent = datetimeValue;
  });
  
  // すべての<h2>および<h3>要素を取得
  var headings = document.querySelectorAll("h2, h3");
  if (headings.length > 0) {
    // <div id="toc">要素を作成
    var tocDiv = document.createElement("div");
    tocDiv.id = "toc";
    
    var tocTitle = document.createElement("p");
    tocTitle.id = "toc-title";
    tocTitle.textContent = "目次";
    tocDiv.appendChild(tocTitle);
    
    var tocList = document.createElement("ol");
    tocList.id = "toc-content";
    tocDiv.appendChild(tocList);

    var currentH2ListItem = null;
    var currentH3List = null;

    // 各見出しに対してリスト項目を作成
    headings.forEach(function(heading, index) {
      var listItem = document.createElement("li");
      var link = document.createElement("a");
      
      // 既存のIDを使用、なければ新しいIDを作成
      var id = heading.id || "heading-" + index;
      heading.id = id; // 見出しにIDを設定
      link.href = "#" + id;
      link.textContent = heading.textContent;

      if (heading.tagName.toLowerCase() === "h2") {
        listItem.appendChild(link);
        tocList.appendChild(listItem);
        currentH2ListItem = listItem;
        currentH3List = document.createElement("ol");
        currentH2ListItem.appendChild(currentH3List);
      } else if (heading.tagName.toLowerCase() === "h3" && currentH3List) {
        var subListItem = document.createElement("li");
        subListItem.appendChild(link);
        currentH3List.appendChild(subListItem);
      }
    });

    // 最初の<h2>または<h3>要素の直前に目次を挿入
    var firstHeading = headings[0];
    firstHeading.parentNode.insertBefore(tocDiv, firstHeading);
  }
});

// title要素のテキストを 最初のh1要素のテキスト | サイト名 に設定
const siteName = "サイト名";
const h1Elements = document.querySelectorAll('h1');
if (h1Elements.length > 0) {
  const h1Text = h1Elements[0].innerText;
  const titleElement = document.querySelector('title');
  titleElement.innerText = `${h1Text} | ${siteName}`;
}

// header.htmlを挿し込む
fetch('https://mimneko.github.io/mimneko-note/js/header.html')
  .then(response => response.text())
  .then(data => {document.body.insertAdjacentHTML('afterbegin', data);})
  .catch(error => console.error('Error loading header:', error));

// footer.htmlを挿し込む
fetch('https://mimneko.github.io/mimneko-note/js/footer.html')
  .then(response => response.text())
  .then(data => {document.body.insertAdjacentHTML('beforeend', data);})
  .catch(error => console.error('Error loading footer:', error));
