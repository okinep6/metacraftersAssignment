/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created

const nftCollection = [];

function mintNFT(_name, _level, _colour, _bling) {
  const newNFT = {
    name: _name,
    level: _level,
    colour: _colour
    bling: _bling
  };
  nftCollection.push(newNFT);
}

function listNFTs() {
  for (const nft of nftCollection) {
    console.log("Name: " + nft.name);
    console.log("Level: " + nft.level);
    console.log("Colour: " + nft.colour);
     console.log("Bling: " + nft.bling);
    console.log("-----------------------");
  }
}

function getTotalSupply() {
  return nftCollection.length;
}

mintNFT("NFT 1", "Level 9", "Blue", "ice");
mintNFT("NFT 2", "Level 10", "Pink", "Silver");

console.log("List of NFTs:");
listNFTs();

const totalSupply = getTotalSupply();
console.log("Total NFTs Minted: " + totalSupply);
