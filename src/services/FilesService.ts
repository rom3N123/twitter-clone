class FilesService {
    private static fileReader: FileReader;

    constructor() {
        FilesService.fileReader = new FileReader();
    }

    public static async getFileUrl(file: File): Promise<string> {
        const result: string = await new Promise((resolve) => {
            this.fileReader.onloadend = () =>
                resolve(this.fileReader.result as string);
            this.fileReader.readAsDataURL(file);
        });

        return result;
    }
}

export default FilesService;
