const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const appConfig = require('./../../config/appConfig')
const auth = require('../middlewares/auth')

let setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}/users`;

    // params: firstName, lastName, isAdmin, mobileNumber, email, password, userName, countryName
    app.post(`${baseUrl}/signup`, userController.signUpFunction);
    /**
     * @apiGroup users
     * @apiVersion 1.0.0
     * @api {post} /api/v1/users/signup api for new user signUp
     * 
     * @apiParam {string} firstName First Name of user. (body params)(required)
     * @apiParam {string} lastName Last Name of user. (body params)(required)
     * @apiParam {string} email Email of user. (body params)(required)
     * @apiParam {number} mobileNumber Mobile Number of user. (body params)(required)
     * @apiParam {string} userName User Name of user. (body params)(required)
     * @apiParam {string} countryName Country Name of user. (body params)(required)
     * @apiParam {boolean} isAdmin boolean value either true/false of user. (body params)(required)
     * @apiParam {string} password Password of user. (body params)(required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
     * {
      "error": false,
      "message": "User created",
      "status": 200,
      "data": {
          "countryCode": 91
          "countryName": "IN"
          "createdOn": "2019-01-15T09:28:19.000Z"
          "email": "rohit.sharma@xyz.com"
          "firstName": "virat"
          "isAdmin": false
          "lastName": "rohit"
          "mobileNumber": 1234567890    
          "userId": "u-JSLXVEh"
          "userName": "sharma"
          "__v": 0
          "_id": "5c3da7b3cf9e321178b71f3d"
      }
  }
    */

    // params: email, password
    app.post(`${baseUrl}/login`, userController.loginFunction);
    /**
     * @apiGroup users
     * @apiVersion 1.0.0
     * @api {post} /api/v1/users/login api for user login.
     * 
     * @apiParam {string} email Email of the user. (body params)(required)
     * @apiParam {string} password Password of the user. (body params)(required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
     * {
      "error": false,
      "message": "Login Successful",
      "status": 200,
      "data": {
          "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IjFCeENfYm1xcSIsImlhdCI6MTU0NzU0NDgyMDY3OSwiZXhwIjoxNTQ3NjMxMjIwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJJZCI6InUtSlNMWFZFaCIsImZpcnN0TmFtZSI6InZpcmF0IiwibGFzdE5hbWUiOiJyb2hpdCIsIm1vYmlsZU51bWJlciI6MTIzNDU2Nzg5MCwiaXNBZG1pbiI6ZmFsc2UsInVzZXJOYW1lIjoic2hhcm1hIiwiZW1haWwiOiJyb2hpdC5zaGFybWFAeHl6LmNvbSIsImNvdW50cnlOYW1lIjoiSU4iLCJjb3VudHJ5Q29kZSI6OTF9fQ.uoxyloDAY7A8KttX-VcQZOGGTYNR1qEGZRWK0dCHxKs",
          "userDetails": {
              "countryCode": 91
              "countryName": "IN"
              "email": "rohit.sharma@xyz.com"
              "firstName": "virat"
              "isAdmin": false
              "lastName": "rohit"
              "mobileNumber": 1234567890
              "userId": "u-JSLXVEh"
              "userName": "sharma"
          }
      }
  }
     */

    app.post(`${baseUrl}/logout/:userId`, userController.logout);
    /**
     * @apiGroup users
     * @apiVersion 1.0.0
     * @api {post} /api/v1/users/logout/:userId api to log out
     * 
     * @apiParam {string} userId User ID of the user (body params)(required)
     * @apiParam {string} authToken Authorization Token of user (body params)(required) 
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
     * {
      "error": false,
      "message": "Logged Out Successfully",
      "status": 200,
      "data": null
  }
     */

    // params: email
    app.post(`${baseUrl}/forgotPassword`, userController.forgotPassword)
    /**
     * @apiGroup users
     * @apiVersion 1.0.0
     * @api {post} /api/v1/users/forgotPassword api to send link for resetting the password
     * 
     * @apiParam {string} email Email of the user (body params)(required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
     * {
      "error": false,
      "message": "email send successfully for password reset",
      "status": 200,
      "data": {
          "error": false,
          "message": "Email sent successfully to reset the password",
          "status": 200,
          "data": "email sent"
      }
  }
     */

    // params: password
    app.post(`${baseUrl}/resetPassword`, userController.resetPassword)
    /**
     * @apiGroup users
     * @apiVersion 1.0.0
     * @api {post} /api/v1/users/resetPassword api to reset the password 
     * 
     * @apiParam {string} password Password of the user (body params)(required)
     * @apiParam {userId} userId User Id of the user (body params)(required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
     * { 
      "error": false,
      "message": "email successfully reset",
      "status": 200,
      "data": { 
          "error": false,
          "message": "password changed successfully",
          "status": 200,
          "data": "password changed successfully" 
      } 
  }
     */

    app.get(`${baseUrl}/view/all`, userController.getAllUsers)
    /**
     * @apiGroup users
     * @apiVersion 1.0.0
     * @api {get} /api/v1/users/view/all api to get all users
     * 
     * @apiParam {string} authToken authToken of the user. (query params/body params/header)(required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
     * {
      "error": false,
      "message": "All User Details Found",
      "status": 200,
      "data": [
          {
            "userId": "u-JSLXVEh",
            "firstName": "virat",
            "lastName": "rohit",
            "mobileNumber": 1234567890,
            "password": "$2a$10$I/mOPRhahQxxybdQIDFxLO0yNxLjg6hiVjjhnNRoRO6SwFspas4Ri",
            "isAdmin": false,
            "createdOn": "2019-01-15T09:28:19.000Z",
            "userName": "sharma",
            "email": "rohit.sharma@xyz.com",
            "countryName": "IN",
            "countryCode": 91
          },
          {
            "userId": "MVJIQYRZK",
            "firstName": "anil",
            "lastName": "rana",
            "mobileNumber": 1234567890,
            "password": "$2a$10$zItkcA5uAaO/SiAHe5hkLelizdlvLj/66AoVzx8XfiLRqWdSOvj5y",
            "isAdmin": true,
            "createdOn": "2019-01-14T18:45:06.000Z",
            "userName": "anil-admin",
            "email": "anil.rana@xyz.com",
            "countryName": "IN",
            "countryCode": 91
          }
      ]
  }
     */

    app.post(`${baseUrl}/:userId/delete`, auth.isAuthorized, userController.deleteUser);
    /**
     * @apiGroup users
     * @apiVersion 1.0.0
     * @api {get} /api/v1/users/view/all api to delete a user
     * 
     * @apiParam {string} authToken authToken of the user. (query params/body params/header)(required)
     * @apiParam {string} userId User Id of the user (body params)(required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
     * {
      "error": false,
      "message": "Deleted the user successfully",
      "status": 200,
      "data": [
          {
            "userId": "u-JSLXVEh",
            "firstName": "virat",
            "lastName": "rohit",    
            "mobileNumber": 1234567890,
            "password": "$2a$10$I/mOPRhahQxxybdQIDFxLO0yNxLjg6hiVjjhnNRoRO6SwFspas4Ri",
            "isAdmin": false,
            "createdOn": "2019-01-15T09:28:19.000Z",
            "_id": "5c3da7b3cf9e321178b71f3d",
            "userName": "sharma",
            "email": "rohit.sharma@xyz.com",
            "countryName": "IN",
           "countryCode": 91,
            "__v": 0
          }
      ]
  }
     */
    app.get(baseUrl +'/view/:userId',auth.isAuthorized, userController.getSingleUser);

    /**
	 * @api {get} /api/v1/users/view/:userId Get a single user
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} userId The userId should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "User Details Found",
	    "status": 200,
	    "data": {
	    			"userId": "MVJIQYRZK",
                    "firstName": "anil",
                    "lastName": "rana",
                    "mobileNumber": 1234567890,
                    "isAdmin": true,
                    "createdOn": "2019-01-14T18:45:06.000Z",
                    "userName": "anil-admin",
                    "email": "anil.rana@xyz.com",
                    "countryName": "IN",    
                    "countryCode": 91
				}
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "No User Found",
	    "status": 404,
	    "data": null
	   }
	 */

    app.put(baseUrl + '/:userId/edit', userController.editUser);

    /**
	 * @api {put} /api/v1/users/:userId/edit Edit user by userId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} userId userId of the user passed as the URL parameter
     * @apiParam {Object} options parameters passed for editing
     *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
        "message": "User details edited",
        "status": 200,
        "data": {
                    "n": 1,
                    "nModified": 1,
                    "ok": 1 
                }
	    }
	  
	 */






}

module.exports = {
    setRouter: setRouter
}