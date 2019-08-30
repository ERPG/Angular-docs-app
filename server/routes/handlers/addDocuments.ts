import { IDocument } from './../../types/types';
const mongoose = require('mongoose');

declare var __base: any;

const DocsModel = require(__base + 'models/docs');

module.exports = (req, res) => {
    const { title, text, date, type, image } = req.body;
    const docs = new DocsModel({ title, text, date, type, image });

    DocsModel.save()
        .then(doc => {
            return res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json(err);
        });
};
