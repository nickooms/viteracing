     interface a
       {
           name: string;
       }
    interface b
       {
           age: number;
       }
     interface c extends a,b
     {
          cash: number;
     }
    class ab implements a,b
     {
         cash = 2000;
         name = "Barry";
         age = 20;
         public a = () => console.log(this.cash +" was the amount "+this.name+" had when he was "+ this.age);
