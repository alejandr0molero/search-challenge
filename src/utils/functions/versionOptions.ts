export const buildVersionOptions = (size: number) =>
  Array(size)
    .fill("version")
    .map((value, index) => ({
      value: `${value} ${index + 1}`,
      label: `${value} ${index + 1}`,
    }));
