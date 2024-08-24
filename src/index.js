const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    //split input on ten chukns
    return expr.match(/.{10}/g)
               .map(arendaja=>{
                if(arendaja==='**********'){
                    return ' '; //if input 10* it is a space
                }else{
                    const decode = arendaja.match(/.{2}/g) //find certain pairs
                    .map(spaceships=>{
                        if(spaceships==='10') return '.'; //if input = 10 this is dot
                        if(spaceships==='11') return '-'; //if input = 11 this is dash
                        return ''; //zero or empty string
                    })
                    .join('')//join back string
                    return MORSE_TABLE[decode] || ' ';
                }
               })
               .join('')
}

module.exports = {
    decode
}