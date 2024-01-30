export interface DataAccess<T> {
    add(t :T) :Promise<void>,

    delete(id :number) :Promise<void>,

    get(id :number) :Promise<T>,

    getAll(from? :number, to? :number, filterText? :string) : Promise<Partial<T>[]>,

    update(id :number, updateData :Partial<T>) :Promise<void>
}