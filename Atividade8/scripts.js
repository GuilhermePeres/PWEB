//-----------
//1° Forma
//-----------
alert("Utilizando a 1° forma:" +
    "\n var Aluno1 = new Object();" +
    "\n Aluno1.ra = ''0030481921019'';" +
    "\n Aluno1.nome = ''Guilherme Peres'';");

var Aluno1 = new Object();
Aluno1.ra = "0030481921019";
Aluno1.nome = "Guilherme Peres";

alert("Testando a primeira forma: " +
    "\n RA: " + Aluno1["ra"] +
    "\n Nome: " + Aluno1["nome"]);


//-----------
//2° Forma
//-----------
alert("Utilizando a 2° forma:" +
    "\n var Aluno2 = {};" +
    "\n Aluno2[''ra''] = ''0030481921019'';" +
    "\n Aluno2[''nome''] = ''Guilherme Peres'';");

var Aluno2 = {};
Aluno2["ra"] = "0030481921019";
Aluno2["nome"] = "Guilherme Peres";

alert("Testando a segunda forma: " +
    "\n RA: " + Aluno2.ra +
    "\n Nome: " + Aluno2.nome);


//----------
//3°Forma
//----------
alert("Utilizando a 3° forma:" +
    "\n var Aluno3 = {" +
    "\n ra: ''0030481921019''," +
    "\n nome: ''Guilherme Peres''");

var Aluno3 = {
    ra: "0030481921019",
    nome: "Guilherme Peres"
};

alert("Testando a terceira forma: " +
    "\n RA: " + Aluno3.ra +
    "\n Nome: " + Aluno3.nome);