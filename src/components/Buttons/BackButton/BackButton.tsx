import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const handleBack = () => {
    const path = location.pathname;

    if (path.startsWith("/transaction")) {
      const categoryId = searchParams.get("category_id");

      if (categoryId) {
        navigate(`/category/${categoryId}?${searchParams.toString()}`);
        return;
      }
    }

    if (path.startsWith("/category")) {
      navigate(`/?${searchParams.toString()}`);
      return;
    }

    navigate("/");
  };

  return (
    <Button
      variant="outline"
      size="md"
      leftSection={<IconArrowLeft size={16} />}
      onClick={handleBack}
    >
      Back
    </Button>
  );
};
