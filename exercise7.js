
const address = { street: '123 Main St', country: 'USA'}
getAddressCity=(address)=> address.city ?? "Unknown";


console.log(getAddressCity(address));  