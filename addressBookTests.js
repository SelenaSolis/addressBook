"use strict;"

const assert = require("assert");
const baseURL = "https://randomuser.me/api/?results=";

function get(fetch, id){
    return fetch("baseURL" + id)
      .then( response => response.json())
      .then( data => data.results[0])
      .catch(err => console.error("err"))
}


describe("get()", function () {
    it("calls fetch", function () {
        const fakeFetch = url =>{
            assert(baseURL);
            return new Promise(function(resolve){
            })
        }
        get(fakeFetch, "15")
    });
    it ('has correct base URL', function(){
        assert.deepEqual(baseURL, "https://randomuser.me/api/?results=")
    })
    it('has correct address', () => {
        const errFetch = url =>{
            assert("https://randomuser.me/api/results=");
            assert.equal(get(errFetch), "err")
        }
    })
});