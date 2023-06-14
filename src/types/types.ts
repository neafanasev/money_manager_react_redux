export type TTransactionType = 'income' | 'expenses';

export interface IManagerState {
    transactionType: string,
    periodStart: Date,
    periodEnd: Date
}