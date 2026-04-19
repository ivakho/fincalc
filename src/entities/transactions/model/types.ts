export interface Transaction {
  id: number;
  amount: number;
  created_at: string;
  updated_at?: string;
}

export interface Transactions {
  value: Transaction[];
  total: number;
}

export interface TransactionCreateData {
  category_id: number;
  type: string;
  amount: number;
  created_at: string;
}
