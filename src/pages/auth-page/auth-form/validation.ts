const REQUAIRED_FIELD = "Պարտադիր դաշտ";
const VALIDATE_SHEMA = (value: string) => {
  if (value.match(/[ա-ֆ,Ա-Ֆ,а-я,А-Я]/)) {
    return "Մուտքանունը պետք է պարունակի միայն անգլերեն տառեր";
  }
  return true;
};

export const loginValidation = {
  required: REQUAIRED_FIELD,
  validate: VALIDATE_SHEMA,
  minLength: {
    value: 4,
    message: "Նվազագույնը 4 նիշ",
  },
};

export const passwordValidation = {
  required: REQUAIRED_FIELD,
  validate: VALIDATE_SHEMA,
  minLength: {
    value: 6,
    message: "Նվազագույնը 6 նիշ",
  },
};
