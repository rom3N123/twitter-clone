import 'redux';

declare module 'redux' {
	export interface ActionPayload<P> extends Action<T> {
		type: T;
		payload: P;
	}
}
