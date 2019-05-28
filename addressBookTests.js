"use strict;"

const assert = require("assert");
require('dotenv').config()
const baseURL = "https://randomuser.me/api/?results=";
const API_KEY = process.env.SECRET_KEY;

function get(fetch, id, key){
    return fetch("baseURL" + id + "&key=" + key)
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
        get(fakeFetch, "15", API_KEY)
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
    it('has correct key', () => {
        const fakeFetch = url =>{
            assert(baseURL);
            assert.equal(get(fakeFetch, "15", "lghejfslgde12k4n"), "err");
        }

    })
});