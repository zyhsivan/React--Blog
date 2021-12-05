export const switchNumberToType = (id: number) => {
  let fromTypeData: string;
  switch (id) {
    case 1:
      fromTypeData = "HTML + CSS";
      break;
    case 2:
      fromTypeData = "JavaScript";
      break;
    case 3:
      fromTypeData = "React";
      break;
    case 4:
      fromTypeData = "Vue";
      break;
    case 5:
      fromTypeData = "Node";
      break;
    case 6:
      fromTypeData = "Typescript";
      break;
    case 7:
      fromTypeData = " Arithmetic";
      break;
    default:
      fromTypeData = " ";
      break;
  }
  return fromTypeData;
};
