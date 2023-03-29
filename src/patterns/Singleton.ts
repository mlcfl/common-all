/**
 * Singleton software design pattern
 */
export class Singleton {
	private static _symbol = Symbol();
	private static _instance: unknown;

	constructor(symbol: symbol) {
		if (symbol !== Singleton._symbol) {
			throw new Error('This class is Singleton. Use the "Class.getInstance()" static method instead of "new Class()".');
		}
	}

	/**
	 * Return the only instance of the current class.
	 *
	 * For proper typing, don't forget to specify the type for the instance: `ClassName.getInstance<ClassName>();`
	 */
	static getInstance<T>(): T {
		return (this._instance ?? (this._instance = new this(this._symbol))) as T;
	}
}
