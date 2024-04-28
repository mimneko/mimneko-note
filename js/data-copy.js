/* https://codinghaku.com/js-copy-clipboard/ */

/*
 * クリックすると
 * <p data-copy>ここをコピー</p>
 * <p data-copy="ここをコピー">ここはコピーしない</p>
 */
document.querySelectorAll('[data-copy]').forEach(function(element) {
  element.addEventListener('click', function() {
    let textToCopy;
    if (this.hasAttribute('data-copy') && this.getAttribute('data-copy') !== "") {
      textToCopy = this.getAttribute('data-copy');
    } else {
      textToCopy = this.textContent;
    }

    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  });
});
