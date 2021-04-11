// För att kö denna funktion installeras ett library med: npm install @azure/storage-blob
const { BlobServiceClient } = require('@azure/storage-blob');
const AZURE_STORAGE_CONNECTION_STRING = "DefaultEndpointsProtocol=https;AccountName=olsbergshelloworld2;AccountKey=ls++8fVfX/zR4bvgHRY6/32K5JbtRKW39qhkPkuVUDRy+IzJhNxKBdAzTZoiBM0bDQ1FXZicPOR01tFLKVJgkw==;EndpointSuffix=core.windows.net";

// Denna funktion skapar en JSON och laddar upp den till molnet.
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);

    let helloJSON = {
        "oioioi": "aaaaauuuur",
        "nej": "ja",
        "grupp": 8
    };

    const fileName = "HelloWorld.json";
    const data = JSON.stringify(helloJSON);

    const containerClient = blobServiceClient.getContainerClient("cookbookfiles");
    const blockBlobClient = containerClient.getBlockBlobClient(fileName);
    const uploadBlobResponse = await blockBlobClient.upload(data, data.length);
}