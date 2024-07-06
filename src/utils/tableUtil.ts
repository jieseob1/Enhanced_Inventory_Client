export const disambiguateLabel = (key: any, value: any) => {
  switch (key) {
    case "type":
      return value.map((val: any) => `type: ${val}`).join(", ");
    case "status":
      return value.map((val: any) => `status: ${val}`).join(", ");
    default:
      return value;
  }
};

export const isEmpty = (value: any) => {
  if (Array.isArray(value)) {
    return value.length === 0;
  } else {
    return value === "" || value == null;
  }
}

export const sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));
