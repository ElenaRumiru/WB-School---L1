// Задача на классы и наследование: 
// создайте базовый класс Shape (фигура), который имеет методы для расчета площади и периметра. 
// Затем создайте подклассы, представляющие различные фигуры, такие как прямоугольник, круг и треугольник. 
// Реализуйте методы расчета площади и периметра для каждой фигуры.


class Shape {
    constructor() {
      if (new.target === Shape) {
        throw new Error("Класс Shape не может быть создан напрямую.");
      }
    }  
    calculateS() {
      throw new Error("Этот метод должен быть реализован в подклассах.");
    }  
    calculateP() {
      throw new Error("Этот метод должен быть реализован в подклассах.");
    }
  }
  
  // Добавляем рассчет для подкласса прямоугольник
  // Для начала создаем конструктор, принимающий параметром две стороны
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  // Добавляем расчет площади в зависимости от указанного размера прямоугольника
  // Умножаем сторону на сторону
    calculateS() {
      return this.width * this.height;
    }
  // Добавляем расчет периметра в зависимости от указанного размера прямоугольника
  // Умноженная на два сумма двух сторон
    calculateP() {
      return 2 * (this.width + this.height);
    }
  }
  // Создаем конструктор круга, принимающий в себя значение радиуса
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  // Добавляем расчет площади в зависимости от указанного радиуса S = π · r2
    calculateS() {
      return Math.PI * this.radius ** 2;
    }
  // Добавляем расчет периметра в зависимости от указанного радиуса  C = 2 · π · r
    calculateP() {
      return 2 * Math.PI * this.radius;
    }
  }
  // Создаем конструктор треугольника, принимающий в себя значение трех сторон
  class Triangle extends Shape {
    constructor(sideA, sideB, sideC) {
      super();
      this.sideA = sideA;
      this.sideB = sideB;
      this.sideC = sideC;
    }
  
    calculateS() {
      // Добавляем расчет площади в зависимости от указанного радиуса
      // использовала формулу Герона S = √(p * (p — a) * (p — b) * (p — c))
      const s = (this.sideA + this.sideB + this.sideC) / 2;
      return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }
  // Добавляем расчет периметра - сумму указаных сторон 
    calculateP() {
      return this.sideA + this.sideB + this.sideC;
    }
  }
  
  // Примеры использования:  
  const rectangle = new Rectangle(5, 10);
  console.log("Rectangle S:", rectangle.calculateS());
  console.log("Rectangle P:", rectangle.calculateP());
  
  const circle = new Circle(7);
  console.log("Circle S:", circle.calculateS());
  console.log("Circle P:", circle.calculateP());
  
  const triangle = new Triangle(3, 4, 5);
  console.log("Triangle S:", triangle.calculateS());
  console.log("Triangle P:", triangle.calculateP());