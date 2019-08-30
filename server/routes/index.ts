import * as express from 'express';
const router = express.Router();

const addDocument = require('./handlers/addDocuments');
const deleteDocument = require('./handlers/deleteDocuments');
const getDocumentsByType = require('./handlers/getDocumentsByType');
const getAllDocuments = require('./handlers/getAllDocuments');
const getPrivate = require('./handlers/getPrivate');

router.post('/addDocument', addDocument);
router.delete('/deleteDocument/:id', deleteDocument);
router.get('/getDocumentBy/:type', getDocumentsByType);
router.get('/allDocuments', getAllDocuments);
router.get('/private', getPrivate);

module.exports = router;
