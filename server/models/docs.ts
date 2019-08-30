import * as mongoose from 'mongoose';
import { IDocument } from '../types/types';

const collection = 'documents';

const DocsSchema: mongoose.Schema = new mongoose.Schema(
    {
        title: { type: String, require: true },
        text: { type: String, require: true },
        date: { type: String },
        type: { type: String, require: true },
        image: { type: String },
    },
    { collection }
);

// Export the model and return your IUser interface
module.exports = mongoose.model<IDocument>('Document', DocsSchema);
