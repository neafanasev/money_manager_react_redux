export type TTransactionType = 'income' | 'expenses';

export interface IManagerState {
    transactionType: string,
    periodStart: Date,
    periodEnd: Date
}


export interface ICategory {
    name: string,
    backgroundColor: string,
    iconColor: string,
    iconName: string,
    type: TTransactionType
}

export interface ICategoriesState {
    categoriesList: ICategory[],
}

export interface ICategoryProps {
    category: ICategory,
    size: number
}