import { getTypeEndpoint } from "../../../utils";

export const fetchAllCategoriesApi = async () => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/category/`);

  if (!res.ok) throw new Error("Failed to fetch categories");

  return res.json();
};

export const createCategoryApi = async (name: string) => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/category/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name }),
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const message = data?.error || data?.message || "Unknown server error";

    throw new Error(message);
  }

  return data;
};

export const fetchCategoriesApi = async (
  type: string,
  dateFrom: string,
  dateTo: string,
) => {
  const endpoint = getTypeEndpoint(type);

  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/category/${endpoint}?date_from=${dateFrom}&date_to=${dateTo}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
};

export const fetchCategoryByIdApi = async (id: number) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/category/${id}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch category");
  }

  return response.json();
};

export const updateCategoryApi = async (id: number, name: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/category/`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
      }),
    },
  );

  if (!response.ok) {
    throw new Error("Failed to update category");
  }

  return response.json();
};

export const deleteCategoryApi = async (id: number) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/category/${id}`,
    {
      method: "DELETE",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to delete category");
  }

  return response.json();
};
