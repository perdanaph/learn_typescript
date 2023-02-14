interface Input {
  name: string;
}

function myFunction(props: Input) {
  return props;
}

myFunction({ name: 'dana' });
