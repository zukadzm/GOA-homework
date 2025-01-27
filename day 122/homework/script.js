class Book1{
    constructor(bookname, autor, year){
        this.bookname = bookname;
        this.autor = autor;
        this.year = year;
    }
    get Books(){
        return `${this.bookname} Made ${this.year} autur ${this.autor}`
    }
}

class Horor extends Book1 {
    constructor(bookname, autor, year, page){
        super(bookname,autor,year)
        this.page = page;
    }
    get Books(){
        return `${this.bookname} Made ${this.year} autur ${this.autor}`
    }
    get HororBook(){
        return `${this.bookname} is horror autur ${this.autor}`
    }
}

class Fantazy extends Horor {
    constructor(bookname, autor, year, page, ){
        super(bookname,autor,year)
        this.page = page;
    }
    get Books(){
        return `${this.bookname} Made ${this.year} autur ${this.autor}`
    }

    get FantazyBook(){
        return `${this.bookname} is fantazy autor ${this.autor}`
    }
}