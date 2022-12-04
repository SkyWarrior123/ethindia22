// Contract address: 0x47e519E52E9d308fD0Eb0373662e34e580Df013B
async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const BikeRental = await ethers.getContractFactory("BikeRental");
  const bikerental = await BikeRental.deploy();

  console.log("Contract address:", bikerental.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });