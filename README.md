# REST API NODEJS

simple nodejs rest api mongodb based, created with postman

## Installation

- npm install
- npm start

### Usage

#### CREATE

You can send a request to this address to create a tweet.

- POST | **http://localhost:9000/api/tweet**

required parameters

- :title > String
- :content > String

Response:

```
    {
        "_id": "5f5585df03060f2a18787359",
        "title": "first tweet",
        "content": "hello from my first tweet",
        "__v": 0
    }
```

this code will be created your tweet and returns a tweet. ( response code 200 )

#### READ

The address you need to send a request to view all tweets using the API

- GET | **http://localhost:9000/api/tweets**

Response:

```
    [
        {
            "_id": "5f557f247ba69a1bd44c3ef0",
            "title": "Simple tweet",
            "content": "my simple tweet",
            "__v": 0
        }
    ]
```

this code automatically pulls all tweets from the corresponding address

#### UPDATE

You can send a request to this address to update a tweet.

- PATCH | **http://localhost:9000/api/tweet/:id**

required parameters

- :id > Integer
- :title > String
- :content > String

Response:

```
    {
    "_id": "5f5585df03060f2a18787359",
    "title": "my tweet2",
    "content": "hello updated",
    "__v": 0
}
```

this code will be updated your tweet and returns a tweet. ( response code 200 )

#### DELETE

If you want to delete a tweet, you can send a request to

- DELETE | **http://localhost:9000/api/tweet/:id**

required parameters

- :id > Integer

this code will delete the tweet you sent.
