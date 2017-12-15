var month = Console.log(Number(prompt("Zehmet olmasa ayi daxil edin.")))

if(month>="1" && month<="12"){
    if(month>="3" && month<="5"){
        console.log("Spring");
    }else if(month>="6" && month<="8"){
        console.log("Summer");
    }else if(month>="9" && month<="11"){
        console.log("Autumn");

    }else {console.log("Winter")}
}else (console.log("Il 12 aydan ibaretdir, zehmet olmasa reqemi duzgun daxil edin."))
