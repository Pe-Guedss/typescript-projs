function createpElement(text) {
    var pEl = document.createElement('p');
    pEl.textContent = text;
    return pEl;
}
function createUlElement(num) {
    var ulElement = document.createElement('ul');
    ulElement.className = `child-elements${num}`;
    return ulElement;
}
function createLiElement(text) {
    var liElement = document.createElement('li');
    liElement.textContent = text;
    return liElement;
}
document.getElementById('txtfile').onchange = function () {
    var file = document.querySelector('input').files[0];
    var reader = new FileReader();
    reader.onload = function () {
        var lines = this.result.split('\n');
        for (var line = 0; line < lines.length; line++) {
            var fields = lines[line].split(";");
            if (fields.length - 1 != 20 && line != lines.length - 1) {
                // console.log(lines[line]);
                // console.log("Erro ao abrir o arquivo!\nNão há campos o suficiente.\n\n");
                alert(`Erro ao abrir o arquivo!

Não há campos o suficiente. Linha: ${line + 1}.`);
                break;
            }
        }
        let hierarchy = document.querySelector('.hierarchy');
        var num = 0;
        for (var line = 0; line < lines.length; line++) {
            fields = lines[line].split(";");
            if (fields[19].replace(" ", "") == 'P') {
                hierarchy.appendChild(createpElement(lines[line]));
                var ulElement = document.createElement('ul');
                ulElement.className = `child-elements`;
                hierarchy.appendChild(ulElement);
            }
            else if (fields[19].replace(" ", "") == 'M') {
                num++;
                hierarchy.lastElementChild.appendChild(createLiElement(lines[line]));
                hierarchy.lastElementChild.appendChild(createUlElement(num));
            }
            else if (fields[19].replace(" ", "") == 'Q') {
                hierarchy.lastElementChild.appendChild(createpElement(lines[line]));
            }
            else {
                hierarchy.lastElementChild.lastElementChild.appendChild(createLiElement(lines[line]));
            }
        }
    };
    reader.readAsText(file);
};
