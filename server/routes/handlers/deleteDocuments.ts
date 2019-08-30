import { IDocument } from './../../types/types';
const mongoose = require('mongoose');

declare var __base: any;

const DocsModel = require(__base + 'models/docs');

module.exports = (req, res) => {
    const id = req.params.id;

    DocsModel.findByIdAndRemove(id)
        .then(docs => {
            console.log('Event has been removed succesfully');
            return res.status(200).json(docs);
        })
        .catch(err => res.status(500).json(err));
};
