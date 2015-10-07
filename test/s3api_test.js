const chai = require("chai");
const expect = chai.expect;
const bucketPut = require('../lib/api/bucketPut.js');
// const Bucket = require("../lib/bucket_mem.js");
// const utilities = require("../lib/bucket_utilities.js");

describe("bucketPut API",function(){

	it("should return an error if no bucketname provided", function(done){
		const accessKey = 'accessKey1';
		const metastore = {};
		const testRequest = {
			lowerCaseHeaders:
			   { host: '127.0.0.1:8000',
			     'accept-encoding': 'identity',
			     'content-length': '0',
			     authorization: 'AWS accessKey1:DOiE48Tln2KxFIOWi0iafB7XG90=',
			     'x-amz-date': 'Wed, 07 Oct 2015 17:38:31 +0000' },
			 url: '/',
			 namespace: 'default',
			 post: ''
		}

		bucketPut(accessKey, metastore, testRequest, function(err, result) {
			expect(err).to.equal('Bucket name is invalid');
			done();
		})

	});

	


});