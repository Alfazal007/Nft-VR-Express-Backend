const { ethers } = require("ethers");
const { MarketAddress, NFT_MARKETPLACE_ABI } = require("../../constants.js");
const axios = require("axios");
const { asyncHandler } = require("../../utils/asyncHandler.js");

const getAllNfts = asyncHandler(async (req, res) => {
    const provider = new ethers.JsonRpcProvider(
        "https://sepolia.drpc.org",
        "sepolia"
    );
    const contract = new ethers.Contract(
        MarketAddress,
        NFT_MARKETPLACE_ABI,
        provider
    );
    const allNfts = await contract.listedItemsForSale();
    const listedNfts = await Promise.all(
        allNfts.map(
            async ({ tokenId, seller, owner, price: unformattedPrice }) => {
                const tokenURI = await contract.tokenURI(tokenId);
                const {
                    data: { image, name, description },
                } = await axios.get(`${tokenURI}`);
                const price = ethers.formatEther(unformattedPrice);
                tokenId = parseInt(tokenId);
                return `https://${process.env.PINATADOMAIN}/ipfs/${image}`;
            }
        )
    );
    return res.status(200).json(listedNfts);
});

module.exports = { getAllNfts };
