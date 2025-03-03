//! THIS, SUPER VE SUPER() NEDİR ? 

//! this
//* ilgili class içindeki prop'u işaret eder

// class Person{
//     constructor(firstName){
//         this.firstName = firstName;
//     }

//     write(){
//         console.log(this.firstName);
//     }
// }

//! super
//*bir üst sınıfta bulunan metoları kullanmak için kullanırız bu anahtar kelimeyi.
//* neden metod içinde super.work() yazdıkda sadece super.work() yazmadık. Bunun nedeni ben bir method içinden üst sınıfta yer alan metodu tetikleyebilirim.
// class Person{
//     firstName = "Taha";

//     work(){
//         console.log("Person write: ", this.firstName);
//     }
// }

// class Student extends Person{
//     work(){
//         console.log("Student write", this.firstName);
//         super.work();
//     }
// }

// const student1 = new Student();
// student1.work();


//! super() metodu
//* üst sınıfta tanımladığımız propları biz eğer miras aldığımız sınıfta da tanımlarsak kod tekrarı olur bundan dolayı super metodu kullanarak üst sınıfdaki constr. besleriz.

class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    writeInfo(){
        console.log(this.firstName, this.lastName, this.salary);
    }
}

class Engineer{
    constructor(firstName,lastName,salary){
        /*
            burada tekrar biz şunu yaparsak kod tekrarı olur. 
            this.firstName = firstName;
            this.lastName = lastName;
            this.salary = salary

            zaten üst sınıfta tanımlamışız onu beslememiz gerek. Bunuda super metodu kullanarak yaparız
        */

        super(firstName,lastName,salary);

    }

    writeInfo(){
        super.writeInfo();
    }
}

const engineer1 = new Engineer("Taha","Adiyaman",25000);
engineer1.writeInfo();