function myFunc<Type>(input: Type): Type {
  return input;
}

const result = myFunc<{
  name: string;
}>({
  name: 'dana',
});

const resultArr = myFunc<string[]>(['per']);

// Note if we not generic type from arguments, the argument will have <any> type
