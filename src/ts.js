import fs from 'fs/promises';
import path from 'path';
// import child_process from 'child_process';
import { spawn } from 'node:child_process';

const questions = [
  {
    _id: '627dd54153bf64adf656452a',
    type: 'objective',
    totalSubmissions: 10718,
    correctSubmissions: 7988,
    tags: ['lex_auth_012792910568456192541', 'TypeScript Assessment'],
    title: 'TypeScript Assessment-25',
    topic: 'TypeScript Assessment-25',
    problemStatement:
      '<p style="font-family:Verdana;font-size:16px;">Consider&nbsp;you are using a tsconfig.json file. The ts files are stored in a folder named ts. tsconfig.json is stored outside the ts folder.&nbsp;<br />\nWhich compiler option is best suited to read the ts files from the folder while transpiling?</p>\n',
    questionType: 'SCQ',
    option1: 'rootDir',
    option2: 'outDir',
    option3: 'sourceDir',
    option4: 'None of the options',
    option5: '',
    option6: '',
    randomizeOption: false,
  },
  {
    _id: '627dd54153bf64adf656451a',
    type: 'objective',
    totalSubmissions: 10696,
    correctSubmissions: 8724,
    tags: ['lex_auth_012792910568456192541', 'TypeScript Assessment'],
    title: 'TypeScript Assessment-9',
    topic: 'TypeScript Assessment-9',
    problemStatement:
      '<p style="font-family:Verdana;font-size:16px;">What will be the output for the following code?</p>\n\n<pre>\n<code>function fun(contact:number,name?:string,defaultName:string="Usopp",...restName:string[])\n{\n\t    alert("defaultName has: "+defaultName);\n}\nfun(1234567891,undefined,"Luffy", "Zoro", "Nami", "Sanji");\n \n</code></pre>\n\n<p>&nbsp;</p>\n',
    questionType: 'SCQ',
    option1: 'defaultName has: Luffy',
    option2: 'undefined',
    option3: 'Zoro',
    option4: 'Usopp',
    option5: '',
    option6: '',
    randomizeOption: false,
  },
  {
    _id: '627dd54153bf64adf6564519',
    type: 'objective',
    totalSubmissions: 10636,
    correctSubmissions: 7667,
    tags: ['lex_auth_012792910568456192541', 'TypeScript Assessment'],
    title: 'TypeScript Assessment-8',
    topic: 'TypeScript Assessment-8',
    problemStatement:
      '<p style="font-family:Verdana;font-size:16px;">Choose an appropriate answer in order to execute the below code without any error:</p>\n\n<pre>\n<code>function fun(a){\n    alert("List: "+a);\n}\n\nfun("Sherlock", "Dr.Watson", "Inspector Lestrade");\nfun("Irene Adler");\nfun();\n</code></pre>\n\n<p>&nbsp;</p>\n',
    questionType: 'SCQ',
    option1: 'a should be a rest parameter of string[] type',
    option2: 'a should be an Array of strings',
    option3: 'a can be a rest parameter or an array of strings',
    option4: 'None of the options',
    option5: '',
    option6: '',
    randomizeOption: false,
  },
  {
    _id: '627dd54153bf64adf6564522',
    type: 'objective',
    totalSubmissions: 10799,
    correctSubmissions: 7982,
    tags: ['lex_auth_012792910568456192541', 'TypeScript Assessment'],
    title: 'TypeScript Assessment-17',
    topic: 'TypeScript Assessment-17',
    problemStatement:
      '<p style="font-family:Verdana;font-size:16px;">Predict the output for the below code:</p>\n\n<pre>\n<code class="language-javascript">let list:any = ["One", "Two", "Three", "Four"];\nlist.push(list.splice(-4, 2));\nalert(list);\n</code></pre>\n\n<p style="font-family:Verdana;font-size:16px;">&nbsp;</p>\n',
    questionType: 'SCQ',
    option1: 'Three, Four, One, Two',
    option2: 'Four, One, Two, Three',
    option3: 'One, Two, Three, Four',
    option4: 'Error : Array out of bounds',
    option5: '',
    option6: '',
    randomizeOption: false,
  },
  {
    _id: '627dd54153bf64adf6564513',
    type: 'objective',
    totalSubmissions: 10817,
    correctSubmissions: 7296,
    tags: ['lex_auth_012792910568456192541', 'TypeScript Assessment'],
    title: 'TypeScript Assessment-2',
    topic: 'TypeScript Assessment-2',
    problemStatement:
      '<p style="font-family:Verdana;font-size:16px;">What will be the output for the following?</p>\n\n<pre>\n<code class="language-javascript">enum cost { Blue = 5000, Green = Blue, Red = Blue+2500, White = Green , Black=2000 };\nconsole.log(cost[5000]);\n</code></pre>\n\n<p>&nbsp;</p>\n',
    questionType: 'SCQ',
    option1: 'Blue',
    option2: 'Green',
    option3: 'White',
    option4:
      'Compilation Error : You cannot reference members initialized in one enum declaration inside another enum declaration.',
    option5: '',
    option6: '',
    randomizeOption: false,
  },
  {
    _id: '627dd54153bf64adf6564520',
    type: 'objective',
    totalSubmissions: 10711,
    correctSubmissions: 8542,
    tags: ['lex_auth_012792910568456192541', 'TypeScript Assessment'],
    title: 'TypeScript Assessment-15',
    topic: 'TypeScript Assessment-15',
    problemStatement:
      '<p style="font-family:Verdana;font-size:16px;">&nbsp;Predict the output of the below code:</p>\n\n<pre>\n<code class="language-java">function changeNationality(data: string): string{\n\t    nationality += " "+data;\n\t    return nationality;\n}\nvar nationality = "Indian";\nvar nationality = changeNationality("Canadian");\nalert(nationality);\n</code></pre>\n\n<p>&nbsp;</p>\n',
    questionType: 'SCQ',
    option1: 'Indian',
    option2: 'Undefined Canadian',
    option3: 'Indian Canadian',
    option4: 'Error in line 2 since initialization of nationality is after the function',
    option5: '',
    option6: '',
    randomizeOption: false,
  },
  {
    _id: '627dd54153bf64adf656451d',
    type: 'objective',
    totalSubmissions: 10531,
    correctSubmissions: 6351,
    tags: ['lex_auth_012792910568456192541', 'TypeScript Assessment'],
    title: 'TypeScript Assessment-12',
    topic: 'TypeScript Assessment-12',
    problemStatement:
      '<p style="font-family:Verdana;font-size:16px;">Which line from the below code is erroneous in a type definition file?</p>\n\n<pre>\n<code class="language-javascript">1. declare class Author {\n\n2. declare function getBookspublished(): string;\n\n3. }\n\n4. declare function getAuthor():Author;\n</code></pre>\n\n<p>&nbsp;</p>\n',
    questionType: 'SCQ',
    option1: 'Line 1',
    option2: 'Line 2',
    option3: 'Line 4 ',
    option4: 'None of the lines',
    option5: '',
    option6: '',
    randomizeOption: false,
  },
  {
    _id: '627dd54153bf64adf6564512',
    type: 'objective',
    totalSubmissions: 11019,
    correctSubmissions: 6137,
    tags: ['lex_auth_012792910568456192541', 'TypeScript Assessment'],
    title: 'TypeScript Assessment-1',
    topic: 'TypeScript Assessment-1',
    problemStatement:
      '<p style="font-family:Verdana;font-size:16px;">Predict output for the below code:</p>\n\n<pre>\n<code class="language-javascript">const a: string[] =["Rajendra Prasad", "Sarvepalli Radhakrishnan"]; \nfunction fun() {\n      setTimeout(() =&gt; {\n        var a = ["Abdul Kalam", "Pratibha Patil", "Pranab Mukherjee"];\n    }, 10);\n}\nfun();\na.push("Ram Nath Kovind");\nalert(a);\n</code></pre>\n\n<p>&nbsp;</p>\n',
    questionType: 'SCQ',
    option1: 'error:a cannot be reinitialized since it is a constant',
    option2: 'Rajendra Prasad,Sarvepalli Radhakrishnan,Ram Nath Kovind',
    option3: 'Abdul Kalam,Pratibha Patil,Pranab Mukherjee,Ram Nath Kovind',
    option4:
      'Rajendra Prasad,Sarvepalli Radhakrishnan,Abdul Kalam,Pratibha Patil,Pranab Mukherjee,Ram Nath Kovind',
    option5: '',
    option6: '',
    randomizeOption: false,
  },
  {
    _id: '627dd54153bf64adf6564521',
    type: 'objective',
    totalSubmissions: 10759,
    correctSubmissions: 7076,
    tags: ['lex_auth_012792910568456192541', 'TypeScript Assessment'],
    title: 'TypeScript Assessment-16',
    topic: 'TypeScript Assessment-16',
    problemStatement:
      '<p style="font-family:Verdana;font-size:16px;">What will be the output&nbsp;for&nbsp;the below code?</p>\n\n<pre>\n<code class="language-javascript">let ceoList: string[]=[];\nceoList["XYZ"] = "Tim";\nceoList["ABC"] = "Tom";\nceoList["TEST"] = "Joe"\nceoList["TEXT"]="John"\nalert("Length : " + ceoList.length);\nalert("Ceo of XYZ: " + ceoList["XYZ"]);\n</code></pre>\n\n<p>&nbsp;</p>\n',
    questionType: 'SCQ',
    option1: 'Length : 4 Ceo of XYZ: Tim',
    option2: 'Length : 0 Ceo of XYZ: Tim',
    option3: 'Length : 0 Ceo of XYZ: Undefined',
    option4: 'Length : 4 Ceo of XYZ: Undefined',
    option5: '',
    option6: '',
    randomizeOption: false,
  },
  {
    _id: '627dd54153bf64adf6564526',
    type: 'objective',
    totalSubmissions: 10521,
    correctSubmissions: 7703,
    tags: ['lex_auth_012792910568456192541', 'TypeScript Assessment'],
    title: 'TypeScript Assessment-21',
    topic: 'TypeScript Assessment-21',
    problemStatement:
      '<p style="font-family:Verdana;font-size:16px;">Predict the output for the below code:</p>\n\n<p style="font-family:Verdana;font-size:16px;">module.ts:</p>\n\n<pre>\n<code class="language-javascript">class Utility {\nsetId(name: string, id: number) : string {\n\treturn name+" "+id;\n}\n\t\n}\nexport const identity:string="EMPLOYEE";\nexport {Utility as mainUtility};\n</code></pre>\n\n<p style="font-family:Verdana;font-size:16px;">file.ts:</p>\n\n<pre>\n<code class="language-javascript">import * as mainutil from "./module";\n\nlet util =new mainutil.mainUtility();\nlet emp=util.setId("JA$",753886);\n\nconsole.log(`${emp} is an ${mainutil.identity}`);\n</code></pre>\n\n<p>&nbsp;</p>\n',
    questionType: 'SCQ',
    option1: 'JA$ 753886 is an EMPLOYEEc',
    option2: 'Error : mainutil is not defined in module.ts',
    option3: 'Error : mainUtility is not defined in module.ts',
    option4: 'Error : cannot use export block for classes',
    option5: '',
    option6: '',
    randomizeOption: false,
  },
  {
    _id: '627dd54153bf64adf6564517',
    type: 'objective',
    totalSubmissions: 10769,
    correctSubmissions: 6652,
    tags: ['lex_auth_012792910568456192541', 'TypeScript Assessment'],
    title: 'TypeScript Assessment-6',
    topic: 'TypeScript Assessment-6',
    problemStatement:
      '<p style="font-family:Verdana;font-size:16px;">What will be the output for the below code?</p>\n\n<pre>\n<code class="language-javascript">var var1 = 20;\nfunction fun()\n{\n    var1 = 21;\n    var a = () =&gt; {var var1=40 };\n    a();\n\n}\nfun();\nalert(var1);\n</code></pre>\n\n<p>&nbsp;</p>\n',
    questionType: 'SCQ',
    option1: '20',
    option2: '21',
    option3: '40',
    option4: 'Error: cannot redeclare var1',
    option5: '',
    option6: '',
    randomizeOption: false,
  },
  {
    _id: '627dd54153bf64adf6564516',
    type: 'objective',
    totalSubmissions: 10819,
    correctSubmissions: 7300,
    tags: ['lex_auth_012792910568456192541', 'TypeScript Assessment'],
    title: 'TypeScript Assessment-5',
    topic: 'TypeScript Assessment-5',
    problemStatement:
      '<p style="font-family:Verdana;font-size:16px;">Predict the output for the below code:</p>\n\n<pre>\n<code class="language-javascript">function fun(str: string):number{\n    return 42;\n}\nfunction fun(num: number): string{\n    return "hello! "+num;\n}\n\nlet d: string = "hello!";\nvar disp:number = fun(d);\nconsole.log(disp);\n</code></pre>\n\n<p>&nbsp;</p>\n',
    questionType: 'SCQ',
    option1: '42',
    option2: 'hello 42',
    option3: 'hello undefined',
    option4: 'Error: Duplicate function implementation',
    option5: '',
    option6: '',
    randomizeOption: false,
  },
  {
    _id: '627dd54153bf64adf656451f',
    type: 'objective',
    totalSubmissions: 10573,
    correctSubmissions: 7677,
    tags: ['lex_auth_012792910568456192541', 'TypeScript Assessment'],
    title: 'TypeScript Assessment-14',
    topic: 'TypeScript Assessment-14',
    problemStatement:
      '<p style="font-family:Verdana;font-size:16px;">Find error if any in the below code:</p>\n\n<pre>\n<code class="language-javascript">1.    class a{\n2.        parent: string = "From Parent";\n3.    }\n4.    interface b{\n5.        fromInterface: number;\n6.    }\n7.    class c implements b extends a     {\n8.        fromInterface = 20;\n9.        para = () =&gt; {\n10.            console.log(this.parent);\n11.        }\n12.    }\n13.    new c().para();\n</code></pre>\n\n<p>&nbsp;</p>\n',
    questionType: 'SCQ',
    option1: 'Lines 7 and 10 will cause errors',
    option2: 'Line 7 alone causes error because extends clause must precede implements clause',
    option3:
      "Line 7 alone causes error because we can't use implements clause and extends clause together with a single class",
    option4: 'Line 10 alone causes error because we need to call using super.parent',
    option5: '',
    option6: '',
    randomizeOption: false,
  },
  {
    _id: '627dd54153bf64adf6564524',
    type: 'objective',
    totalSubmissions: 10624,
    correctSubmissions: 6686,
    tags: ['lex_auth_012792910568456192541', 'TypeScript Assessment'],
    title: 'TypeScript Assessment-19',
    topic: 'TypeScript Assessment-19',
    problemStatement:
      '<p style="font-family:Verdana;font-size:16px;">Predict the output for the below code:</p>\n\n<pre>\n<code class="language-javascript">interface a\n{\n\ta:string;\n\tabstract fun(): string;\n\n}\nclass b implements a{\na:string;\nconstructor()\n{\nthis.a="Success!"\n}\n\tfun()\n\t{\n\t\treturn this.a;\n\n\t}\n}\nlet obj = new b;\nconsole.log(obj.fun());\n</code></pre>\n\n<p>&nbsp;</p>\n',
    questionType: 'SCQ',
    option1: 'Success!',
    option2: 'Cannot implement interface with an abstract function',
    option3: 'Error : class b has to define function fun inside the constructor',
    option4: "Error : 'abstract' modifier cannot appear on a type member",
    option5: '',
    option6: '',
    randomizeOption: false,
  },
  {
    _id: '627dd54153bf64adf6564523',
    type: 'objective',
    totalSubmissions: 10637,
    correctSubmissions: 7452,
    tags: ['lex_auth_012792910568456192541', 'TypeScript Assessment'],
    title: 'TypeScript Assessment-18',
    topic: 'TypeScript Assessment-18',
    problemStatement:
      '<p style="font-family:Verdana;font-size:16px;">What will be the output for the below code?</p>\n\n<pre>\n<code class="language-javascript">class a\n{\n\n    fun(str: string):string\n{\n    return str+" from a";\n}\n\n}\n\nclass b extends a\n{\n    fun(str: string): string{\n    super.fun(str);\n    return str+" from b";\n}\n}\n\nlet obj = new b();\nvar disp:string = obj.fun("Hello");\nalert(disp);\n</code></pre>\n\n<p>&nbsp;</p>\n',
    questionType: 'SCQ',
    option1: 'Hello from a',
    option2: 'Hello from b',
    option3: 'Hello from a and b',
    option4: 'Error : Duplicate function implementation',
    option5: '',
    option6: '',
    randomizeOption: false,
  },
  {
    _id: '627dd54153bf64adf6564529',
    type: 'objective',
    totalSubmissions: 10469,
    correctSubmissions: 7002,
    tags: ['lex_auth_012792910568456192541', 'TypeScript Assessment'],
    title: 'TypeScript Assessment-24',
    topic: 'TypeScript Assessment-24',
    problemStatement:
      '<p style="font-family:Verdana;font-size:16px;">Find the output for the below code:</p>\n\n<pre>\n<code class="language-javascript">function invoke(constructor:Function) {\n   var newconstructor : any = function (...args) {     \n     this.alterEgo="Bruce Wayne";\n     }\t \n return newconstructor;\n}\n@invoke\nclass Product {\n\tpublic alterEgo: string;\n\tconstructor(data: string) {\n\t\tthis.alterEgo = data;\n\t}\n}\nvar p = new Product("Dark Knight");\nalert(`Product name is : ${p.alterEgo}`);\n</code></pre>\n\n<p>&nbsp;</p>\n',
    questionType: 'SCQ',
    option1: 'Dark Knight',
    option2: 'Product name is : Bruce Wayne',
    option3: 'Error : cannot access class-property outside the class',
    option4: 'Error : Invalid location for a decorator',
    option5: '',
    option6: '',
    randomizeOption: false,
  },
  {
    _id: '627dd54153bf64adf6564527',
    type: 'objective',
    totalSubmissions: 10705,
    correctSubmissions: 7027,
    tags: ['lex_auth_012792910568456192541', 'TypeScript Assessment'],
    title: 'TypeScript Assessment-22',
    topic: 'TypeScript Assessment-22',
    problemStatement:
      '<p style="font-family:Verdana;font-size:16px;">What will be the output for the below code?</p>\n\n<pre>\n<code class="language-javascript">class A{\nprintData&lt;T&gt;(data: T): T{\n    if (data == "Barry Allen")\n        alert("Data Received");\nreturn data;\n}\n}\nlet obj = new A();\nlet data:string=obj.printData&lt;string&gt;(\'Barry Allen\');\n</code></pre>\n\n<p>&nbsp;</p>\n',
    questionType: 'SCQ',
    option1: 'Data Received',
    option2: 'Error : Cannot have generic functions inside a non-generic class',
    option3: "Error : Operator '==' cannot be applied to types 'T' and 'string'",
    option4: 'Both the above mentioned errors will occur',
    option5: '',
    option6: '',
    randomizeOption: false,
  },
  {
    _id: '627dd54153bf64adf6564515',
    type: 'objective',
    totalSubmissions: 10655,
    correctSubmissions: 4910,
    tags: ['lex_auth_012792910568456192541', 'TypeScript Assessment'],
    title: 'TypeScript Assessment-4',
    topic: 'TypeScript Assessment-4',
    problemStatement:
      '<p style="font-family:Verdana;font-size:16px;">Which of the following line/lines will lead to compilation error/errors?</p>\n\n<pre>\n<code class="language-javascript">var a: [string, number];\n1.  a = ["Stephen Strange", null, "Tony Stark", 2, 6];\n2.\ta = ["Stephen Strange", undefined, "Tony Stark", 2, 6];\n3.\ta = [undefined,"Tony Stark", 2, "Stephen Strange"];\n4.\ta = [null,null,4, "Tony Stark", 2, 6];\n</code></pre>\n\n<p>&nbsp;</p>\n',
    questionType: 'SCQ',
    option1: '1, 2 and 4',
    option2: '1 and 4',
    option3: '2 and 3',
    option4: 'Only 3',
    option5: '',
    option6: '',
    randomizeOption: false,
  },
  {
    _id: '627dd54153bf64adf6564528',
    type: 'objective',
    totalSubmissions: 10534,
    correctSubmissions: 6897,
    tags: ['lex_auth_012792910568456192541', 'TypeScript Assessment'],
    title: 'TypeScript Assessment-23',
    topic: 'TypeScript Assessment-23',
    problemStatement:
      '<p style="font-family:Verdana;font-size:16px;">Predict the output for the below code:</p>\n\n<pre>\n<code class="language-javascript">class Friends &lt;T&gt;{\n\tcharacterList:Array&lt;T&gt;;\naddCharacter(newCharacterList:Array&lt;T&gt;):void{\n\tthis.characterList=newCharacterList;\n    alert(characterList);\n}\n\n}\nlet show=new Friends&lt;string&gt;();\nlet characterList:Array&lt;string&gt;=["Chandler","Monica","Joe","Rachel","Ross"];\nshow.addCharacter(characterList);\n\nlet show2=new Friends&lt;number&gt;();\nlet seasons:Array&lt;number&gt;=[1,2,3,4,5,6,7,8,9,10];\nshow2.addCharacter(seasons);\n</code></pre>\n\n<p>&nbsp;</p>\n',
    questionType: 'SCQ',
    option1: 'Chandler,Monica,Joe,Rachel,Ross Chandler,Monica,Joe,Rachel,Ross',
    option2: 'Chandler,Monica,Joe,Rachel,Ross 1,2,3,4,5,6,7,8,9,10',
    option3: '1,2,3,4,5,6,7,8,9,10 1,2,3,4,5,6,7,8,9,10',
    option4: 'Error : Cannot redefine the type parameter once initialized',
    option5: '',
    option6: '',
    randomizeOption: false,
  },
  {
    _id: '627dd54153bf64adf6564525',
    type: 'objective',
    totalSubmissions: 10597,
    correctSubmissions: 6286,
    tags: ['lex_auth_012792910568456192541', 'TypeScript Assessment'],
    title: 'TypeScript Assessment-20',
    topic: 'TypeScript Assessment-20',
    problemStatement:
      '<p style="font-family:Verdana;font-size:16px;">Assume the below&nbsp;code is saved in a file &quot;a.ts&quot;. Which is the most appropriate option to be added to make the below code work?</p>\n\n<pre>\n<code class="language-javascript">class product\n{\n    prodId: number;\n    prodName: string;\n}\n\nnamespace a{\nexport let obj=new amazon()\n}\n\nobj.prodName = "Coffee Mug";\n</code></pre>\n\n<p>&nbsp;</p>\n',
    questionType: 'SCQ',
    option1: '<p>Add ///&lt;reference path=&quot;a.ts&quot;/&gt;</p>',
    option2: 'Add import { obj } from "a"',
    option3: 'Modify last line as a.obj.prodName = "Coffee Mug";',
    option4: 'All of these',
    option5: '',
    option6: '',
    randomizeOption: false,
  },
  {
    _id: '627dd54153bf64adf656451b',
    type: 'objective',
    totalSubmissions: 10647,
    correctSubmissions: 6989,
    tags: ['lex_auth_012792910568456192541', 'TypeScript Assessment'],
    title: 'TypeScript Assessment-10',
    topic: 'TypeScript Assessment-10',
    problemStatement:
      '<p style="font-family:Verdana;font-size:16px;">Predict the output for the below code:</p>\n\n<pre>\n<code class="language-javascript">1.\tinterface a{\n2.\t    var1: string;\n3.\t}\n4.\tinterface b{\n5.\t    var2: string;\n6.\t}\n7.\tfunction fun1(para1: a){\n8.\t    alert("Inside fun1");\n9.\t}\n10.\tfunction fun2(para2: b){\n11.\t    alert("Inside fun2");\n12.\t}\n13.\tvar obj = { var1: "for a", var2: "for b" };\n14.\tfun1(obj);\n15.\tfun2(obj);\n</code></pre>\n\n<p>&nbsp;</p>\n',
    questionType: 'SCQ',
    option1: 'Line 14 will get compilation error',
    option2: 'Line 15 will get compilation error',
    option3: 'Both 14 and 15 will get compilation error',
    option4: 'No error',
    option5: '',
    option6: '',
    randomizeOption: false,
  },
  {
    _id: '627dd54153bf64adf656451e',
    type: 'objective',
    totalSubmissions: 10602,
    correctSubmissions: 6467,
    tags: ['lex_auth_012792910568456192541', 'TypeScript Assessment'],
    title: 'TypeScript Assessment-13',
    topic: 'TypeScript Assessment-13',
    problemStatement:
      '<p style="font-family:Verdana;font-size:16px;">Find which lines causes compilation error from the below code:</p>\n\n<pre>\n<code class="language-javascript">1.\tclass company{\n2.\t    static empId:number=753800;\n3.\t    private _eta: boolean;\n4.\t    private _production: boolean;\n5.\t    constructor(){\n6.\t        this.empId++;\n7.\t        this._eta = false;\n8.\t        this._production = false;\n9.\t    }\n10.\t  }\n11.\tvar emp1=new company(); \n12.\tvar emp1 = new company();\n13.\tlet emp2 = new company();\n14.\talert(emp2.empId);\n</code></pre>\n\n<p>&nbsp;</p>\n',
    questionType: 'SCQ',
    option1: 'Line 6 alone',
    option2: 'Line 12 alone',
    option3: 'Line 6 and 14',
    option4: 'Line 6, 12 and 14',
    option5: '',
    option6: '',
    randomizeOption: false,
  },
  {
    _id: '627dd54153bf64adf6564518',
    type: 'objective',
    totalSubmissions: 10706,
    correctSubmissions: 8683,
    tags: ['lex_auth_012792910568456192541', 'TypeScript Assessment'],
    title: 'TypeScript Assessment-7',
    topic: 'TypeScript Assessment-7',
    problemStatement:
      '<p style="font-family:Verdana;font-size:16px;">Predict the output for the below code:</p>\n\n<pre>\n<code class="language-javascript">const alterEgo = "Slade Wilson";\nfunction outerFunction()\n{\n     let alterEgo = "Wade Wilson";\n     setTimeout(\n         function(){\n             alert(alterEgo);\n         },2000);\n}\nouterFunction();\n</code></pre>\n\n<p>&nbsp;</p>\n',
    questionType: 'SCQ',
    option1: 'Slade Wilson',
    option2: 'Wade Wilson',
    option3: 'Error in line 4',
    option4: 'Error in line 2',
    option5: '',
    option6: '',
    randomizeOption: false,
  },
  {
    _id: '627dd54153bf64adf6564514',
    type: 'objective',
    totalSubmissions: 10714,
    correctSubmissions: 7462,
    tags: ['lex_auth_012792910568456192541', 'TypeScript Assessment'],
    title: 'TypeScript Assessment-3',
    topic: 'TypeScript Assessment-3',
    problemStatement:
      '<p style="font-family:Verdana;font-size:16px;">What will be the most appropriate output for the following?</p>\n\n<pre>\n<code class="language-javascript">enum defaultPrice {Single=1000,Double=2000,Triple=3000 }\nenum cost { Red = defaultPrice.Single, Green=Blue, Blue = defaultPrice.Double+defaultPrice.Triple, White=defaultPrice.Triple };\nvar price=cost.Blue;\n</code></pre>\n\n<p>&nbsp;</p>\n',
    questionType: 'SCQ',
    option1:
      'Compilation Error : You cannot reference members initialized in one enum declaration inside another enum declaration',
    option2:
      'Compilation Error : A member initializer in a enum declaration cannot reference members declared after it.',
    option3: 'Both the errors',
    option4: 'No errors',
    option5: '',
    option6: '',
    randomizeOption: false,
  },
  {
    _id: '627dd54153bf64adf656451c',
    type: 'objective',
    totalSubmissions: 10547,
    correctSubmissions: 8301,
    tags: ['lex_auth_012792910568456192541', 'TypeScript Assessment'],
    title: 'TypeScript Assessment-11',
    topic: 'TypeScript Assessment-11',
    problemStatement:
      '<p style="font-family:Verdana;font-size:16px;">Predict the output for the below code:</p>\n\n<pre>\n<code class="language-javascript">1.     interface a\n2.       {\n3.           name: string;\n4.       }\n5.    interface b\n6.       {\n7.           age: number;\n8.       }\n9.     interface c extends a,b\n10.     {\n11.          cash: number;\n12.     }\n13.    class ab implements a,b\n14.     {\n15.         cash = 2000;\n16.         name = "Barry";\n17.         age = 20;\n18.         public a = () =&gt; alert(this.cash +" was the amount "+this.name+" had when he was "+ this.age);\n</code></pre>\n\n<p>&nbsp;</p>\n',
    questionType: 'SCQ',
    option1: '2000 was the amount Barry had when he was 20',
    option2: "We can't implement more two classes",
    option3: 'We have to use extends keyword',
    option4: 'There is an error in line 18',
    option5: '',
    option6: '',
    randomizeOption: false,
  },
];

const CODE = '<code class="language-javascript">';

const codes = questions
  .filter((q) => q.problemStatement.indexOf(CODE) !== -1)
  .map((q) => {
    const split = q.problemStatement.split(CODE);
    // console.log(split);
    return {
      title: q.title,
      code: split[1]
        .split('</code>')[0]
        .split('&gt;')
        .join('>')
        .split('alert(')
        .join('console.log(')
        .split('\n')
        .map((l, i) => (l.startsWith(`${i + 1}.`) ? l.replace(`${i + 1}.`, '') : l))
        .join('\n'),
      option1: q.option1,
      option2: q.option2,
      option3: q.option3,
      option4: q.option4,
      option5: q.option5,
      option6: q.option6,
    };
  });

const compileTS = (fileName) =>
  new Promise((resolve, reject) => {
    let stdout = '';
    const compile = spawn('..\\node_modules\\.bin\\tsc.cmd', [
      `test\\${fileName}.ts`,
      '--lib',
      'es2023,dom',
    ]);

    compile.stdout.on('data', (data) => {
      stdout += data;
    });

    compile.on('exit', (code) => {
      if (code === 0) {
        resolve(stdout);
      } else {
        reject(stdout);
      }
      resolve();
    });
  });

  const runJS = (fileName) =>
    new Promise((resolve, reject) => {
      let stdout = '';
      const run = spawn('node', [`test\\${title}.js`]);
  
      run.stdout.on('data', (data) => {
        stdout += data;
      });
  
      run.on('exit', (code) => {
        if (code === 0) {
          resolve(stdout);
        } else {
          reject(stdout);
        }
        resolve();
      });
    });

await Promise.all(
  codes.map(async ({ title, code, option1, option2, option3, option4 }) => {
    await fs.writeFile(`test${path.sep}${title}.ts`, code, 'utf-8');
    try {
    const compileOutput = await compileTS(title);
      await fs.writeFile(`test\\${title}.compile.txt`, compileOutput);
    } catch (compileError) {
      await fs.writeFile(`test\\${title}.result.`, compileError);
    }
    
      if (code === 0) {
        let runOutput = '';
        const run = spawn('node', [`test\\${title}.js`]);

        run.stdout.on('data', (data) => {
          runOutput += data;
          // console.log(`stdout: ${data}`);
        });

        run.on('exit', async () => {
          await fs.writeFile(`test\\${title}.run.txt`, runOutput);
        });
      }
      // console.log(`child process exited with code ${code}`);
    });

    // try {
    //   const compileOutput = child_process.execSync(`npx tsc "test\\${title}.ts" --lib es2023dom`);
    //   await fs.writeFile(`test${path.sep}${title}.compile.txt`, compileOutput, 'utf-8');
    //   const runOutput = child_process.execSync(`node "test\\${title}.js"`);
    //   await fs.writeFile(`test${path.sep}${title}.run.txt`, runOutput, 'utf-8');
    // } catch (e) {
    //   console.error(e);
    // }
  }),
);

// await fs.writeFile('test.html', html.join(''));
