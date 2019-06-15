export class Document {
    public title: string;
    public text: string;
    public date: string;
    public imagePath: string;

    constructor(title: string, text: string, date: string, imagePath: string) {
        this.title = title;
        this.text = text;
        this.date = date;
        this.imagePath = imagePath;
    }
}
