//! INHERITANCE (MİRAS ALMA)
//* Nasıl gerçek hayatta babamızdan kalan mirası kendi malımız gibi kullanıyorsak yazılımda da bu şekildedir.
//* Bazı classlar bazı classlardan miras alıyorlar ve miras aldıkları class içindeki metotları veya özellikleri kendi içinde tanımlanmış gibi kullanırız.
//* 10 tane sınıf var ve bu 10 sınıfın 5-6 tane özelliği ortak düşünelim. Ben 10 sınıfa bu ortakları tekrar tekrar yazarak hem kod tekrar yaparım hem de yönetmeyi zorlaştırıırım. Bundan dolayı 1 yerde olsun herkes oradan alsın.
//* Bir sınıfı miras aldığımda, miras almış olduğumuz sınıftan bir nesne türettiğimizde üst sınıf alt sınıfı yakalayabiliyor (js desteklemiyor) bu sayede daha generic kodlar yazabiliriz.

//! NOT: "super" anahtar kelimesi üst sınıfı temsil eder.
//! super --> miras aldığım sınıf içindekini kullanmak istersem
//! this --> bu sınıf içindeki

class Person{
    firstName = "Taha";

    work(){
        console.log("Person write: ", this.firstName);
    }
}

class Student extends Person{
    work(){
        console.log("Student write", this.firstName);
        super.work();
    }
}

const student1 = new Student();
student1.work();