const { expect } = require("chai");
const { 
    validateEmail, 
    validateUsername,
    validatePassword,
    validatePhoneNumber
 } = require("../src/basic-functions.js");

describe("Tests For: validateEmail function", () => {

    // Validate Email
    it("should return true for a valid email", () => {
        const validEmail = "test@example.com";
        const result = validateEmail(validEmail);

        expect(result).to.be.true;
    });

    it("should return false for a invalid email", () => {
        const invalidEmail = "badexample.com";
        const result = validateEmail(invalidEmail);

        expect(result).to.be.false;
    });

});


// Validate password
describe("Tests For: validatePassword function", () => {

    it("should return false if password does not have capital letter", () => {
        const badPassword = "cowsareoftenroundandeathay";
        const result = validatePassword(badPassword);

        expect(result).to.be.false;
    });

    it("should return false if password is to short", () => {
        const badPassword = "cow";
        const result = validatePassword(badPassword);

        expect(result).to.be.false;
    });

    it("should return true if password long", () => {
        const badPassword = "90cowsDancingInThePasture";
        const result = validatePassword(badPassword);

        expect(result).to.be.true;
    });

});

// Validate Username
// Usernames must be at least 3 characters
// Must not be a number
describe("Tests For: validateUsername function", () => {

    it("Should return true if at least 3 characters" ,()=>{
        const testName = "rplantangenat";
        const result = validateUsername(testName);

        expect(result).to.be.true;
    });

    it("Should return false if too short",()=>{
        const testName = "po";
        const result = validateUsername(testName);

        expect(result).to.be.false;
    });

    it("Should return false if not a string",()=>{
        const testName = 3817;
        const result = validateUsername(testName);

        expect(result).to.be.false;
    });

    it("Should return false a string of only numbers",()=>{
        const testName = '3817';
        const result = validateUsername(testName);

        expect(result).to.be.false;
    });

});


describe("Tests For: validatePhoneNumber function", () => {

    // test case 1
    it("should return true for a valid phone number", () => {
      const validPhoneNumber = "1234567890";
      const result = validatePhoneNumber(validPhoneNumber);
      expect(result).to.be.true;
    });

    // test case 2
    it("should return false for a phone number with a length other than 10 digits", () => {
      const invalidPhoneNumber = "123456789";
      const result = validatePhoneNumber(invalidPhoneNumber);
      expect(result).to.be.false;
    });

        // test case 2a
        it("should return false for a phone number with a length other than 10 digits", () => {
            const invalidPhoneNumber = "123456789222";
            const result = validatePhoneNumber(invalidPhoneNumber);
            expect(result).to.be.false;
          });

    // test case 3
    it("should return false for a phone number with non-digit characters", () => {
      const invalidPhoneNumber = "123abc4567";
      const result = validatePhoneNumber(invalidPhoneNumber);
      expect(result).to.be.false;
    });
  });
  