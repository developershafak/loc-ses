
function setData() {
    const key = prompt('Enter a key:');
    const value = prompt('Enter a value:');
    localStorage.setItem(key, value);
}

function clearData() {
    localStorage.clear();
}

function removeData() {
    const keyToRemove = prompt('Enter the key to remove:');
    localStorage.removeItem(keyToRemove);
}




