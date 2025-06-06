const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];


// Creo una funzione che somma due numeri.

function sum(a, b) {
    return a + b
}

console.log('La somma dei due numeri è :', sum(2, 3));

// Creo un array (longBooks) con i libri che hanno più di 300 pagine;

const longBooks = books.filter(book => {
    return book.pages > 300
})

console.log('Libri con più di 300 pagine :', longBooks);


// Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
const longBooksTitles = longBooks.map(longBook => {
    return longBook.title
})


console.log('Titoli libri con più di 300 pagine :', longBooksTitles);

// Stampa in console ogni titolo nella console.

books.forEach(book => {
    console.log(book.title);
});



