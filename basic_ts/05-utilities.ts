interface myIntface {
  property1: string;
  property2?: number;
  property3?: boolean;
}

// Using partial can set the property to optional

const object: Partial<myIntface> = {}; // we cannot have a error if we not set the property in interface because we using Pertial

const objectTwo: Omit<myIntface, 'property3' | 'property2'> = {
  property1: 'Hello dana',
};
