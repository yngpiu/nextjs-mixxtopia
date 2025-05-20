export const parseWithZod = (schema, input) => {
  const result = schema.safeParse(input);
  if (!result.success) throw result.error;
  return result.data;
};
