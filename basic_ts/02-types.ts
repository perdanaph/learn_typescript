type MyType = {
  learn: string;
};

enum myEnum {
  enumOne = 'first',
  enumTwo = 'second',
}

type myTypeTwo = {
  difficult: boolean;
  enumProperty: myEnum;
} & MyType;

async function myThreeFunction(input: myTypeTwo): Promise<myTypeTwo> {
  return input;
}

Object.keys(myEnum).map;
