export class Document {
    public title: string;
    public text: string;
    public type: string;
    public date: string;
    public imagePath: string;
    public token: string;
    constructor(
        title: string,
        text: string,
        type: string,
        date: string,
        imagePath: string,
        token: string
    ) {
        this.title = title;
        this.text = text;
        this.type = type;
        this.date = date;
        this.imagePath = imagePath;
        this.token = token;
    }
}
