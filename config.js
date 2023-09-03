
/**
 * ?? Replace with your actual base URL with ipfs gateway
 */
 const BASE_URL = 'https://ipfs.io/ipfs/QmYCzVFrriiRUrEpmatKzQPE29ofHbAGxSM7xfRksyApV2/';

/**
 * ?? first .json file to download
 */
 const START = 1;

/**
 * ?? last json file to download
 */
 const END = 5555;

/**
 * ?? 100 is recommended for public ipfs gateway, for dedicated ipfs gateways use 500-1000 
 */
 const BATCH_SIZE = 100;


/**
 * ?? 2 seconds delay between each BATCH_SIZE download
 */
 const DELAY = 2000;

 

module.exports = {
    BASE_URL,
    START,
    END,
    BATCH_SIZE,
    DELAY
};
