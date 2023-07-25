


/**
 * @swagger
 * components:
 *   schemas:
 *     UploadResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: The ID of the student image.
 *         name:
 *           type: string
 *           description: The name of the student image.
 *         image:
 *           type: string
 *           description: The URL or path of the student image.
 *       required:
 *         - name
 *         - image
 *       description: Uploaded file information.
 *     Error:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           description: Error message.
 */

/**
 * @swagger
 * /api/imageUpload:
 *   post:
 *     summary: Upload student image.
 *     description: Upload a student's image.
 *     tags:
 *       - Users
 *     requestBody:
 *       content:
 *         multipart/form-data:  # Use multipart/form-data for file upload
 *           schema:
 *             type: object      # Use type: object for file upload
 *             properties:
 *               image:
 *                 type: string  # Use type: string for file upload
 *                 format: binary
 *     responses:
 *       '200':
 *         description: Successful upload.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UploadResponse'
 *       '400':
 *         description: Bad request. No file uploaded.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
