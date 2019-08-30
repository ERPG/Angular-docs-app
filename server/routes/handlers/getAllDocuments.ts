import { IDocument } from './../../types/types';
const mongoose = require('mongoose');

declare var __base: any;

const DocsModel = require(__base + 'models/docs');

module.exports = (req, res) => {
    DocsModel.find()
        .sort()
        .then(docs => {
            console.log('All events has been sent succesfully');
            return res.status(200).json(docs);
        })
        .catch(err => res.status(500).json(err));
};
