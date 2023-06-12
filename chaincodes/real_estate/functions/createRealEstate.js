'use strict';

const { WorkloadModuleBase } = require('@hyperledger/caliper-core');

// const prices = ['10000', '20000', '30000', '40000', '50000', '60000'];
// const beds = ['1', '2', '3', '4', '5'];
// const ownerIds = ['0', '1', '2', '3', '4'];
// const baths = ['1', '2'];
// const acreLots = ['111', '222', '333', '444', '555'];
// const fullAddresses = ['123 Main St, New York, USA', '456 Elm St, London, UK', '789 Oak St, Tokyo, Japan', '1011 Pine St, Paris, France', '1213 Maple St, Sydney, Australia'];
// const streets = ['Main St', 'Elm St', 'Oak St', 'Pine St', 'Maple St'];
// const cities = ['New York', 'London', 'Tokyo', 'Paris', 'Sydney'];
// const states = ['Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Alabama', 'Delaware', 'Florida', 'Georgia',];
// const zipCodes = ['10001', '90210', '60601', '94102', '33109', '75201',];
// const houseSizes = ['1212', '2323', '3434', '4545', '5656'];

/**
 * Workload module for the benchmark round.
 */
class CreateRealEstateWorkload extends WorkloadModuleBase {
    /**
     * Initializes the workload module instance.
     */
    constructor() {
        super();
        this.txIndex = 0;
    }

    /**
     * Assemble TXs for the round.
     * @return {Promise<TxStatus[]>}
     */
    async submitTransaction() {
        this.txIndex += 1;

        const realEstateId = "9000000";
        const ownerId = "1";
        const price = "price1";
        const bed = "bed1";
        const bath = "bed1";
        const acreLot = "acreLot1";
        const fullAddress = "fullAddress1";
        const street = "street1";
        const city = "city";
        const state = "state";
        const zipcode = "zipcode1";
        const houseSize = "houseSize1";
        const isOpenToSell = "true";

        // const realEstateId = this.txIndex.toString();
        // const ownerId = ownerIds[Math.floor(Math.random() * ownerIds.length)];
        // const price = prices[Math.floor(Math.random() * prices.length)];
        // const bed = beds[Math.floor(Math.random() * beds.length)];
        // const bath = baths[Math.floor(Math.random() * baths.length)];
        // const acreLot = acreLots[Math.floor(Math.random() * acreLots.length)];
        // const fullAddress = fullAddresses[Math.floor(Math.random() * fullAddresses.length)];
        // const street = streets[Math.floor(Math.random() * streets.length)];
        // const city = cities[Math.floor(Math.random() * cities.length)];
        // const state = states[Math.floor(Math.random() * states.length)];
        // const zipcode = zipCodes[Math.floor(Math.random() * zipCodes.length)];
        // const houseSize = houseSizes[Math.floor(Math.random() * houseSizes.length)];
        // const isOpenToSell = (Math.random() < 0.5).toString();

        const args = {
            contractId: 'real_estate',
            contractVersion: 'v1',
            contractFunction: 'RealEstate_Create',
            contractArguments: [realEstateId, ownerId, price, bed, bath, acreLot, fullAddress, street, city, state, zipcode, houseSize, isOpenToSell],
            timeout: 50
        };

        await this.sutAdapter.sendRequests(args);
    }
}

/**
 * Create a new instance of the workload module.
 * @return {WorkloadModuleInterface}
 */
function createWorkloadModule() {
    return new CreateRealEstateWorkload();
}

module.exports.createWorkloadModule = createWorkloadModule;