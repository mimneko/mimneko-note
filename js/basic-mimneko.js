document.addEventListener("DOMContentLoaded", function() {
  // すべての要素を取得する
  var elements = document.querySelectorAll('[datetime]');

  // 各要素の中身をdatetime属性の値に変更する
  elements.forEach(function(element) {
    var datetimeValue = element.getAttribute('datetime');
    element.textContent = datetimeValue;
  });

  // 目次を自動生成したい
});

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
