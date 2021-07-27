(async () => {
    try {

        const Web3 = require('web3')

        const web3 = new Web3('http://localhost:8545');

        let gasPrice = await web3.eth.getGasPrice()
        console.log('Current gas price is ', gasPrice);

        let addresses = await web3.eth.getAccounts()
        console.log('Accounts node controls are', addresses);

        let transaction = await web3.eth.getTransaction('0x4bf3e0ecac5826252c6e95f19f9465af26775467178d96ffb6ccd6ffab7e221f')
        console.log('Transaction is : \n', transaction);

        let transactionReceipt = await web3.eth.getTransactionReceipt('0x4bf3e0ecac5826252c6e95f19f9465af26775467178d96ffb6ccd6ffab7e221f');
        console.log('Transaction receipt is : \n', transactionReceipt);

        let block = await web3.eth.getBlock(12904428)
        console.log('Block is', block);
    } catch (e) {
        console.log(e.message);
    }
})()
