interface myInterface {
  lastName?: string;
  age: number;
  isSingle: boolean;
}

// extend interface
interface mySecondInterface extends myInterface {
  firstName: string;
}

async function mySecondFunction(input: mySecondInterface): Promise<myInterface> {
  return input;
}

mySecondFunction({
  firstName: 'perdana',
  lastName: 'Putro',
  age: 20,
  isSingle: true,
});
