document.querySelector("#copyNotice").innerHTML = `&copy; ${new Date().getFullYear()} Carl J. Bialorucki. Rexburg, Idaho.`;
document.getElementById("modifiedNotice").innerHTML = `Last Updated: ${new Date(document.lastModified).toLocaleString()}`;

const chapterInput = document.querySelector('#favchap');
const addButton = document.querySelector('button');
const bookList = document.querySelector('.list');

addButton.addEventListener('click', function() {
    
    if (chapterInput.value != ''){

        let item = document.createElement('li');
        let deleteButton = document.createElement('button');
        item.textContent = chapterInput.value;
        deleteButton.textContent = '❌';
        deleteButton.ariaLabel = 'Remove ' + item.textContent;
        item.appendChild(deleteButton);
        bookList.appendChild(item);
        deleteButton.addEventListener('click', function() {
            deleteButton.parentNode.remove();
            chapterInput.value = '';
            chapterInput.focus();
        });

        chapterInput.value = '';
        chapterInput.focus();

    }
    
});