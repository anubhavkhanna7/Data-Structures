var canConstruct = function(ransomNote, magazine) {
    if (magazine.length < ransomNote.length) return false;
    let map = new Map();
    magazine.split('').forEach(letter => {
        if (map.has(letter)) {
            map.set(letter, map.get(letter)+1);
        } else {
            map.set(letter, 1);
        }
    });
    ransomNote = ransomNote.split('');
    for (let i = 0; i< ransomNote.length; i++) {
        if(map.has(ransomNote[i])) {
            if(map.get(ransomNote[i]) === 0) {
                return false;
            } else { map.set(ransomNote[i], map.get(ransomNote[i])-1); }
        } else { return false; }
    }
    return true;
};


var canConstruct = function(ransomNote, magazine) {
    if (magazine.length < ransomNote.length) return false;
    magazine = magazine.split('');

    for (let i = 0; i< ransomNote.length; i++) {
        const index = magazine.indexOf(ransomNote[i]);
        if (index > -1) { 
            magazine.splice(index, 1);
        } else {
            return false;
        }
    }
    return true;
};