let es = ('Hello World translated in Spanish is: Hola Mundo')
let de = ('Hello World translated in German is: Hallo Welt')
let en = ('Hello World translated in English is: Hello World')
let fr = ('Hello World translated in French is: Bonjour le monde')

let language = prompt ('Please enter a language code ("es", "de", "fr" or "en")')
if (language == 'es') {
    document.write (es)
} else if (language == 'de') {
    document.write (de)
} else if (language == 'fr') {
    document.write (fr)
} else {
    document.write (en)
}