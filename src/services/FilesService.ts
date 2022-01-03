class FilesService {
    private fileReader: FileReader;

    constructor() {
        this.fileReader = new FileReader();
    }

    public async getFileUrl(file: File): Promise<string> {
        const result: string = await new Promise((resolve) => {
            this.fileReader.onloadend = () =>
                resolve(this.fileReader.result as string);
            this.fileReader.readAsDataURL(file);
        });

        return result;
    }
}

export default new FilesService();
