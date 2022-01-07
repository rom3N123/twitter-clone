class FilesService {
    public static async getFileUrl(file: File): Promise<string> {
        const fileReader: FileReader = new FileReader();

        const result: string = await new Promise((resolve) => {
            fileReader.onloadend = () => resolve(fileReader.result as string);
            fileReader.readAsDataURL(file);
        });

        return result;
    }
}

export default FilesService;
