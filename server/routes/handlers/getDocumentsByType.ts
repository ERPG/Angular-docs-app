import { IDocument } from './../../types/types';
const mongoose = require('mongoose');

declare var __base: any;

const DocsModel = require(__base + 'models/docs');

module.exports = (req, res) => {
    const { date } = req.body;

    DocsModel.find({ date })
        .then(event => {
            console.log('Event by date has been sent succesfully');
            return res.status(200).json(event);
        })
        .catch(err => res.status(500).json(err));
};
