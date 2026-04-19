import { getTypeEndpoint } from "../../../utils";
import type { TransactionCreateData } from "../model/types";

export const fetchTransactionsApi = async (
  categoryID: number,
  type: string,
  dateFrom: string,
  dateTo: string,
) => {
  const endpoint = getTypeEndpoint(type);

  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/transactions/${endpoint}?category_id=${categoryID}&date_from=${dateFrom}&date_to=${dateTo}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch transactions");
  }

  return response.json();
};

export const fetchTransactionByIdApi = async (id: number) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/transactions/${id}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch transaction");
  }

  return response.json();
};

export const createTransactionApi = async (data: TransactionCreateData) => {
  console.log(data)
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/transactions/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to create transaction");

  return res.json();
};

export const updateTransactionApi = async (id: number, amount: number) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/transactions/`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        amount,
      }),
    },
  );

  if (!response.ok) {
    throw new Error("Failed to update transaction");
  }

  return response.json();
};

export const deleteTransactionApi = async (id: number) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/transactions/${id}`,
    {
      method: "DELETE",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to delete transaction");
  }

  return response.json();
};
