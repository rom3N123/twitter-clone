export interface IModelService<M> {
    update: (data: any, ...ids: string[]) => Promise<M>;
    get?: (...ids: string[]) => Promise<M>;
    index?: (...ids: string[]) => Promise<M[]>;
    delete?: (...ids: string[]) => Promise<void>;
    create?: (data: any, ...ids: string[]) => Promise<M>;
}

abstract class ModelService<M> implements IModelService<M> {
    abstract update(data: any, ...ids: string[]): Promise<M>;
}

export default ModelService;
