//get the list of the all student

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API endpoints related to users
 */




/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       properties:
 *         _id:
 *           type: integer
 *         title:
 *           type: string
 *         timestamp:
 *           type: string
 *           format: date-time
 */



/**
 * @swagger
 * /api/student:
 *   get:
 *     summary: This API is used to show the list of users.
 *     description: This API is used to check if the GET method is working or not.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Success. The GET method is working.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 */

//get student by id


// /**
//  * @swagger
//  * /api/student/{id}:
//  *   get:
//  *     summary: This API is used to show the user from the user list by ID.
//  *     description: This API is used to check if the GET by ID method is working or not.
//  *     tags:
//  *       - Users
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         description: Enter your Id
//  *         schema:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: Success. The GET method is working.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/Student'
//  */




//adding the data in the student list

/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: Title of the student.
 *         id:
 *           type: integer
 *           description: ID of the student.
 *           format: int64
 *       required:
 *         - title
 *         - id
 */

/**
 * @swagger
 * /api/student:
 *   post:
 *     summary: Create a new student.
 *     description: Create a new student with the given title and ID.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       '200':
 *         description: Success. The student has been created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       '400':
 *         description: Bad Request. Invalid or missing data.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

