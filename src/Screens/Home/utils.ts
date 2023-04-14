// import Colors from "../../Colors";

const handleOnPress = (
  toShow: string,
  isOperation: boolean,
  firstNumber: string,
  setFirstNumber: React.Dispatch<React.SetStateAction<string>>,
  secondNumber: string,
  setSecondNumber: React.Dispatch<React.SetStateAction<string>>,
  operation: string,
  setOperation: React.Dispatch<React.SetStateAction<string>>,
  setResult: React.Dispatch<React.SetStateAction<number>>,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setExpression: React.Dispatch<React.SetStateAction<string>>
) => {
  switch (toShow) {
    case "=":
      if (firstNumber[0] === "*" || firstNumber[0] === "/") {
        setMessage("Expresion malformada");
        break;
      }
      if (operation && !secondNumber) {
        break;
      }
      if (firstNumber && !operation && !secondNumber) {
        setResult(parseFloat(firstNumber));
        break;
      }
      getResult(
        operation,
        setResult,
        firstNumber,
        secondNumber,
        setFirstNumber,
        setSecondNumber,
        setMessage,
        setExpression
      );
      cleanAfterResult(setSecondNumber, setOperation);
      break;
    case "AC":
      setFirstNumber("");
      setSecondNumber("");
      setOperation("");
      setResult(0);
      setMessage("");
      break;
    case "C":
      if (secondNumber) {
        setSecondNumber((prev: string) => prev.slice(0, -1));
        break;
      }
      if (operation) {
        setOperation("");
        break;
      }
      setFirstNumber((prev: string) => prev.slice(0, -1));
      break;
    case "+":
    case "/":
    case "*":
      if (!firstNumber) {
        setFirstNumber(toShow);
      }
      if (!operation && firstNumber && firstNumber !== toShow) {
        setOperation(toShow);
      }
      break;
    case "-":
      if (!firstNumber) {
        setFirstNumber("-");
      }
      if (!operation && firstNumber && firstNumber !== "-") {
        setOperation(toShow);
      }
      if (operation) {
        setSecondNumber("-");
      }
      break;
    default:
      if (operation && !isOperation) {
        setSecondNumber((prev: string) => prev + toShow);
      }
      if (!operation && !isOperation) {
        setFirstNumber((prev: string) => prev + toShow);
      }
      break;
  }
};

const formatDecimalResult = (resultado: number) => {
  const text = resultado.toString();
  const decimalPart = text.split(".")[1];
  let resultDecimal: string;
  if (decimalPart && decimalPart.length > 2) {
    resultDecimal = decimalPart.slice(0, 2);
    return `${text.split(".")[0]}.${resultDecimal}`;
  }
  return text;
};

const getResult = (
  operation: string,
  setResult: React.Dispatch<React.SetStateAction<number>>,
  firstNumber: string,
  secondNumber: string,
  setFirstNumber: React.Dispatch<React.SetStateAction<string>>,
  setSecondNumber: React.Dispatch<React.SetStateAction<string>>,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setExpression: React.Dispatch<React.SetStateAction<string>>
) => {
  let resultFormatted;
  switch (operation) {
    case "+":
      resultFormatted = formatDecimalResult(
        parseFloat(firstNumber) + parseFloat(secondNumber)
      );
      setResult(+resultFormatted);
      setFirstNumber(resultFormatted);
      break;
    case "-":
      resultFormatted = formatDecimalResult(
        parseFloat(firstNumber) - parseFloat(secondNumber)
      );
      setResult(+resultFormatted);
      setFirstNumber(resultFormatted);
      break;
    case "*":
      resultFormatted = formatDecimalResult(
        parseFloat(firstNumber) * parseFloat(secondNumber)
      );
      setResult(+resultFormatted);
      setFirstNumber(resultFormatted);
      break;
    case "/":
      if (secondNumber === "0") {
        setSecondNumber("");
        setMessage("No se puede dividir por cero");
        break;
      }
      resultFormatted = formatDecimalResult(
        parseFloat(firstNumber) / parseFloat(secondNumber)
      );
      setResult(+resultFormatted);
      setFirstNumber(resultFormatted);
      break;
    default:
      break;
  }
  setExpression(
    `${firstNumber} ${operation} ${secondNumber} = ${resultFormatted}`
  );
};

const cleanAfterResult = (
  setSecondNumber: React.Dispatch<React.SetStateAction<string>>,
  setOperation: React.Dispatch<React.SetStateAction<string>>
) => {
  setSecondNumber("");
  setOperation("");
};

const BUTTONS = [
  {
    isOperation: true,
    toShow: "C",
    style: "bigButtonStyle",
  },
  {
    isOperation: true,
    toShow: "AC",
    style: "bigButtonStyle",
  },
  {
    isOperation: false,
    toShow: "7",
  },
  {
    isOperation: false,
    toShow: "8",
  },
  {
    isOperation: false,
    toShow: "9",
  },
  {
    isOperation: true,
    toShow: "/",
  },
  {
    isOperation: false,
    toShow: "4",
  },
  {
    isOperation: false,
    toShow: "5",
  },
  {
    isOperation: false,
    toShow: "6",
  },
  {
    isOperation: true,
    toShow: "*",
  },
  {
    isOperation: false,
    toShow: "1",
  },
  {
    isOperation: false,
    toShow: "2",
  },
  {
    isOperation: false,
    toShow: "3",
  },
  {
    isOperation: true,
    toShow: "+",
  },
  {
    isOperation: false,
    toShow: ".",
  },
  {
    isOperation: false,
    toShow: "0",
  },
  {
    isOperation: true,
    toShow: "=",
    style: 'equalButton',
  },
  {
    isOperation: true,
    toShow: "-",
  },
];

export { handleOnPress, getResult, BUTTONS };
