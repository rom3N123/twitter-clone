export interface IModelService<M> {
    get(...ids: string[]): Promise<M>;
    update(data: any, ...ids: string[]): Promise<M>;
    index?: (...ids: string[]) => Promise<M[]>;
    delete?: (...ids: string[]) => Promise<void>;
}

abstract class ModelService<M> implements IModelService<M> {
    abstract get(...ids: string[]): Promise<M>;
    abstract update(data: any, ...ids: string[]): Promise<M>;
}

export default ModelService;
