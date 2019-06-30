export const formSerialize = formElement => {
  const values = {};
  const inputs = formElement.elements;

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type === 'checkbox') {
      values[inputs[i].name] = inputs[i].checked;
    } else {
      values[inputs[i].name] = inputs[i].value;
    }

  }
  return values;
};

export const getRandomId = () => {
  return `_${Math.floor(Math.random() * (1000000 - 10000) + 10000)}`
}
