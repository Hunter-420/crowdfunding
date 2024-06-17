export const validateFormData = (data) => {
  const errors = {};

  if (!data.title.trim()) {
    errors.title = "Title is required.";
  }

  if (!data.requiredAmount.trim()) {
    errors.requiredAmount = "Required amount is required.";
  } else if (isNaN(data.requiredAmount) || Number(data.requiredAmount) <= 0) {
    errors.requiredAmount = "Required amount must be a positive number.";
  }

  if (!data.image) {
    errors.image = "Image is required.";
  }

  if (!data.story) {
    errors.story = "Story is required.";
  }

  if (!data.category.trim()) {
    errors.category = "Category is required.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
