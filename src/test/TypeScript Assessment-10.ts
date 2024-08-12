	interface a{
	    var1: string;
	}
	interface b{
	    var2: string;
	}
	function fun1(para1: a){
	    console.log("Inside fun1");
	}
	function fun2(para2: b){
	    console.log("Inside fun2");
	}
	var obj = { var1: "for a", var2: "for b" };
	fun1(obj);
	fun2(obj);
