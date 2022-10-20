// Senkron Çalışma
function funct1() {
    console.log("Fonksiyon 1");
    funct2();
}

function funct2(){
    console.log("Fonksiyon 2");
    funct3();
}

function funct3() {
    console.log("Fonksiyon 3");
}
funct1();



// Asenkron Çalışma
let x = 5;
console.log('1.Veri: ',x);

setTimeout(() => {
    x=x+5;
    console.log('2.Veri: ',x);
  }, 5500);
//Bir fonksiyonu başka bir fonksiyona arguman olarak koyduğumuzda CALLBACK(İçiçe foksiyon gibi)
  x=x+5;
console.log('3.Veri: ',x);
//Asenkron çalıştığı için 3.veri geliyor ve 2. veri daha sonra geliyor




const books=[
    {name: 'Kitap1', author: 'Yazar1'},
    {name: 'Kitap2', author: 'Yazar2'},
    {name: 'Kitap3', author: 'Yazar3'}
];


const listBook=()=>{
    books.map(book=>{
        console.log(book.name);
    })  
};

const addBook=(newBook,callback)=>{
    books.push(newBook);
    callback();
};

addBook({name: 'Kitap4', author: 'Yazar4'},listBook);
//Bir fonksiyonu başka bir fonksiyona arguman olarak koyduğumuz için callback olayı oluyor






