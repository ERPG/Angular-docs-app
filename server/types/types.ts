import { Document } from 'mongoose';

export interface IDocument extends Document {
    title: string;
    text: string;
    date: string;
    type: string;
    image: string;
}
