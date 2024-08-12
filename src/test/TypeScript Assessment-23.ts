class Friends &lt;T>{
	characterList:Array&lt;T>;
addCharacter(newCharacterList:Array&lt;T>):void{
	this.characterList=newCharacterList;
    console.log(characterList);
}

}
let show=new Friends&lt;string>();
let characterList:Array&lt;string>=["Chandler","Monica","Joe","Rachel","Ross"];
show.addCharacter(characterList);

let show2=new Friends&lt;number>();
let seasons:Array&lt;number>=[1,2,3,4,5,6,7,8,9,10];
show2.addCharacter(seasons);
