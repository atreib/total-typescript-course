const myFunc = () => {
  return "hello";
};

type MyFuncReturn = ReturnType<typeof myFunc>;

const myFuncWithParamaters = (a: boolean, props: { b: string; c: number }) => {
  return true;
};

type MyFuncParameters = Parameters<typeof myFuncWithParamaters>;
type MyFirstParameter = MyFuncParameters[0];

const myPromisedFunc = () => {
  return Promise.resolve({ hey: true });
};

type MyPromisedFuncReturn = Awaited<ReturnType<typeof myPromisedFunc>>;

const myObj = {
  a: "1",
  b: "2",
  c: "3",
};

type ObjectKey = keyof typeof myObj;
