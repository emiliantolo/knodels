const request = require('supertest');
const app = require('./../app.js')

/// root

describe('Test the root path', () => {
    test('It should response the GET method', () => {
	return request(app).get("/").then(response => {
	    expect(response.statusCode).toBe(200)
	})
    });
})


/// GET /v1/tasks

describe('Test the /v1/tasks path no parameters', () => {
    test('It should response the GET method', () => {
	return request(app).get("/v1/tasks").then(response => {
	    expect(response.statusCode).toBe(200)
	})
    });
})

describe('Test the /v1/tasks path wrong parameters', () => {
    test('It should response the GET method', () => {
	return request(app).get("/v1/tasks?limit=-1&offset=-1").then(response => {
	    expect(response.statusCode).toBe(400)
	})
    });
})

describe('Test the /v1/tasks path off bound', () => {
    test('It should response the GET method', () => {
	return request(app).get("/v1/tasks?limit=10&offset=1000").then(response => {
	    expect(response.statusCode).toBe(404)
	})
    });
})

describe('Test the /v1/tasks path right parameters', () => {
    test('It should response the GET method', () => {
	return request(app).get("/v1/tasks?limit=0&offset=5").then(response => {
	    expect(response.statusCode).toBe(400)
	})
    });
})



/// POST /v1/tasks

describe('Test the /v1/tasks path create new right parameters', () => {
    test('It should response the POST method', () => {
	return request(app).post("/v1/tasks")
	    .send({
	"Question": "proident ut ad",
	"TaskType": "dolore sit Lorem",
	"TaskFile": "cillum sed quis"
	    })
	    .then(response => {
		expect(response.statusCode).toBe(201)
	})
    });
})

describe('Test the /v1/tasks path create new wrong parameters', () => {
    test('It should response the POST method', () => {
	return request(app).post("/v1/tasks")
	    .send({
	"TaskType": "dolore sit Lorem",
	"TaskFile": "cillum sed quis"
	    })
	    .then(response => {
		expect(response.statusCode).toBe(400)
	})
    });
})

/// GET /v1/tasks/:TaskId

describe('Test the /v1/tasks/:TaskId path get wrong id format', () => {
    test('It should response the GET method', () => {
	return request(app).get("/v1/tasks/abc")
	    .then(response => {
		expect(response.statusCode).toBe(400)
	})
    });
})

describe('Test the /v1/tasks/:TaskId path get right id format but not existing', () => {
    test('It should response the GET method', () => {
	return request(app).get("/v1/tasks/5c057843d7e81322eb975b55")
	    .then(response => {
		expect(response.statusCode).toBe(404)
	})
    });
})

describe('Test the /v1/tasks/:TaskId path get right id format and existing', () => {
    test('It should response the GET method', () => {
	return request(app).get("/v1/tasks/5c057843d7e81322eb975b55")
	    .then(response => {
		expect(response.statusCode).toBe(200)
	})
    });
})

/// PUT /v1/tasks/:TaskId

describe('Test the /v1/tasks/:TaskId path get wrong id format', () => {
    test('It should response the PUT method', () => {
	return request(app).put("/v1/tasks/abc")
	    .then(response => {
		expect(response.statusCode).toBe(400)
	})
    });
})

describe('Test the /v1/tasks/:TaskId path get right id format but not existing', () => {
    test('It should response the PUT method', () => {
	return request(app).put("/v1/tasks/5c057843d7e81322eb975b55")
	    .then(response => {
		expect(response.statusCode).toBe(404)
	})
    });
})

describe('Test the /v1/tasks/:TaskId path get right id format and existing', () => {
    test('It should response the PUT method', () => {
	return request(app).put("/v1/tasks/5c057843d7e81322eb975b55")
	    .then(response => {
		expect(response.statusCode).toBe(200)
	})
    });
})
/// DELETE /v1/tasks/:TaskId

describe('Test the /v1/tasks/:TaskId path get wrong id format', () => {
    test('It should response the DELETE method', () => {
	return request(app).get("/v1/tasks/abc")
	    .then(response => {
		expect(response.statusCode).toBe(400)
	})
    });
})

describe('Test the /v1/tasks/:TaskId path get right id format but not existing', () => {
    test('It should response the DELETE method', () => {
	return request(app).get("/v1/tasks/5c057843d7e81322eb975b55")
	    .then(response => {
		expect(response.statusCode).toBe(404)
	})
    });
})

describe('Test the /v1/tasks/:TaskId path get right id format and existing', () => {
    test('It should response the DELETE method', () => {
	return request(app).get("/v1/tasks/5c057843d7e81322eb975b55")
	    .then(response => {
		expect(response.statusCode).toBe(200)
	})
    });
})
/*
expect(response.type).toEqual("application/json")
expect(response.body.data).toEqual("Sending some JSON")
*/
