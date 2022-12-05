const {getTotalBooksCount, getTotalAccountsCount} = require("./home");
const {expect} = require("chai");
describe("testTotalCount()", () => {
    it("should return one if the array has one book reocrd", () => {
        const actual = getTotalBooksCount([{
            id: "5f447132d487bd81da01e25e",
            title: "sit eiusmod occaecat eu magna",
            genre: "Science",
            authorId: 8,
            borrows: [
                {
                    id: "5f446f2e2cfa3e1d234679b9",
                    returned: false,
                },
                {
                    id: "5f446f2ed3609b719568a415",
                    returned: true,
                },
                {
                    id: "5f446f2e1c71888e2233621e",
                    returned: true
                }]
        }]);
        expect(actual).to.equal(1);
    });

    it("should return one if the array has one account record", () => {
        const actual = getTotalAccountsCount([{
            id: "5f446f2ecfaf0310387c9603",
            picture: "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
            age: 25,
            name: {
                first: "Esther",
                last: "Tucker",
            },
            company: "ZILLACON",
            email: "esther.tucker@zillacon.me",
            registered: "Thursday, May 28, 2015 2:51 PM",
        }]);
        expect(actual).to.equal(1);
    });

});
