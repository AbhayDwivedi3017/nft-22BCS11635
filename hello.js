// create a variable to hold your NFT's
const NFTs=[]
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_cloth,_bling,_height) {
    const NFT={
        "name":_name,
        "cloth":_cloth,
        "bling":_bling,
        "height":_height
    }
    NFTs.push(NFT);
    console.log("Minted: "+_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<NFTs.length;i++){
        console.log("ID: \t\t"+(i+1));
        console.log("\nName: \t\t\t"+NFTs[i].name);
        console.log("cloth: \t"+NFTs[i].cloth);
        console.log("bling: \t\t\t"+NFTs[i].bling);
        console.log("height: \t"+NFTs[i].height);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n"+NFTs.length);

}

// call your functions below this line
mintNFT("Zoro","Dark Green Coat","Sword(Enma)","181 cm");
mintNFT("Tanjiro","Black and Green Checkered Kimono","Nichirin Sword","165 cm");
listNFTs();
getTotalSupply();