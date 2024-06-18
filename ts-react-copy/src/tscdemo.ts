interface Person {
  name: string;
  age: number;
  gender?: string;
}

// type Cat = {
//   name: string;
//   age: number;
// };

// const bartolomiau: Person = {
//   name: "Bartolomiau",
//   age: 3,
// };

// const palta: Cat = {
//   name: "Palta",
//   age: 2,
// };

// console.log(bartolomiau);
// console.log(palta);

// interface Student extends Person {
//   studentId: number;
// }

// const student: Student = {
//   name: "Bartolomiau",
//   age: 3,
//   studentId: 123456,
// };

// console.log(student);

// interface Courses {
//   name: string;
//   duration: number;
//   id: number;
//   students: Array<Student>; //Student[];
// }

// const course: Courses = {
//   name: "TypeScript",
//   duration: 10,
//   id: 1,
//   students: [student],
// };

// console.log(course);

// class Car {
//   private speed: number;
//   public model: string;
//   readonly wheels: number = 4;

//   constructor(speed: number, model: string) {
//     this.speed = speed;
//     this.model = model;
//   }

//   public accelerate(): void {
//     this.speed += 10;
//   }

//   // public brake(): void {
//   //   this.speed -= 10;
//   // }

//   // public getSpeed(): number {
//   //   return this.speed;
//   // }

//   // public getModel(): string {
//   //   return this.model;
//   // }
// }

// const car = new Car(100, "Toyota");

// console.log(car);

// console.log(car.speed);
// car.speed = 200;
// car.model = "Honda";

// console.log(car.wheels);
// car.wheels = 3;

// car.accelerate();

// console.log(car);

function add(a: number, b: number = 2, c?: number): number | boolean {
  if (c) {
    return true;
  }

  return a + b;
}

add(1, 2);

add(2);

// function wrong(argument:any):any {
//   return argument;
// }

function logger<T, S>(message: T[], other: S): void {
  console.log(other);
  console.log(message);
}

logger<string, number>(["hello", "world"], 1);
// logger<number>(123);
