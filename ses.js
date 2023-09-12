
//sessional
function setData() {
    const key = prompt('Enter a key:');
    const value = prompt('Enter a value:');
    sessionStorage.setItem(key, value);
}

function clearData() {
    sessionStorage.clear();
}

function removeData() {
    const keyToRemove = prompt('Enter the key to remove:');
    sessionStorage.removeItem(keyToRemove);
}