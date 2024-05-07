function convertNumbers(inputType) {

    // 入力値を取得
    var inputValue = document.getElementById(inputType + "Input").value.trim();
    // 全角数字を半角数字に変換
    inputValue = inputValue.replace(/[０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });
    if (inputValue === "") {
        return;
    }
    
    // アルファベットを大文字にするかどうかのチェックボックスの状態を取得
    var isUpperCase = document.getElementById("uppercaseCheckbox").checked;

    // 入力値が不正な場合、空白に設定して終了
    var decimalValue;
    switch (inputType) {
        case 'binary':
            if (!/^[01]+$/.test(inputValue)) {
                return;
            }
            decimalValue = parseInt(inputValue, 2);
            break;
        case 'octal':
            if (!/^[0-7]+$/.test(inputValue)) {
                return;
            }
            decimalValue = parseInt(inputValue, 8);
            break;
        case 'decimal':
            if (!/^\d+$/.test(inputValue)) {
                return;
            }
            decimalValue = parseInt(inputValue, 10);
            break;
        case 'hexadecimal':
            if (!/^[0-9A-Fa-f]+$/.test(inputValue)) {
                return;
            }
            decimalValue = parseInt(inputValue, 16);
            break;
        default:
            break;
    }

    // 10進数を他の進数に変換
    var binaryPaddingBase = 4;
    var octalPaddingBase = 3;
    var decimalPaddingBase = 1;
    var hexadecimalPaddingBase = 2;
    var binaryPadding = binaryPadding;
    var octalPadding = octalPadding;
    var decimalPadding = decimalPadding;
    var hexadecimalPadding = hexadecimalPadding;
    var binaryValueOutput = decimalValue.toString(2).padStart(binaryPadding, '0');
    var octalValueOutput = decimalValue.toString(8).padStart(octalPadding, '0');
    var decimalValueOutput = decimalValue.toString(10).padStart(decimalPadding, '0');
    var hexadecimalValueOutput = decimalValue.toString(16).padStart(hexadecimalPadding, '0');

    // 16進数のアルファベットを大文字にするかどうかを適用
    if (isUpperCase) {
        hexadecimalValueOutput = hexadecimalValueOutput.toUpperCase();
    }

    // 入力欄に表示
    document.getElementById("binaryInput").value = binaryValueOutput;
    document.getElementById("octalInput").value = octalValueOutput;
    document.getElementById("decimalInput").value = decimalValueOutput;
    document.getElementById("hexadecimalInput").value = hexadecimalValueOutput;
}
