function BuildPerson({firstName,lastName}:any, ...address:any[]){
    return `${firstName} ${lastName} ${address}`;
}

const partialAddress = ["Street Name", "street Number", "Po Box"];
const firstName = 'tarik',
    lastName = 'nakdi';
const personData = {
    firstName,
    lastName
};
const address = [...partialAddress,'Staples Center'];

console.log(BuildPerson(personData,address));