    class a{
        parent: string = "From Parent";
    }
    interface b{
        fromInterface: number;
    }
    class c implements b extends a     {
        fromInterface = 20;
        para = () => {
            console.log(this.parent);
        }
    }
    new c().para();
