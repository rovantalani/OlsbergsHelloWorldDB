// Denna funktion lyssnar efter att saker händer i blobcontainern och om det är en JSON så printas den.
module.exports = async function (context, myBlob) {
    context.log("JavaScript blob trigger function processed blob \n Blob:", context.bindingData.blobTrigger, "\n Blob Size:", myBlob.length, "Bytes");

    // context är typ en massa metadata om hela incidenten i fråga.
    //console.log("CONTEXT:");
    //console.log(context);

    //Det här är filen och det är bara som en fil. Printar du den kommer det bara ut en massa nonsens som följande: myBlob: <Buffer 7b 0a 20 20 20 20 22 74 65 73 74 69 6e...
    //console.log("MYBLOB:");
    //console.log(myBlob);

    //Här tar jag filen och gör den till en JSON som sedan går att leka med.
    try {
        let helloJSON = JSON.parse(myBlob);
        console.log("parsed JSON");
        console.log(helloJSON);
    } catch(err) {
        console.log(err);
    }
    
};