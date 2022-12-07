import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import prettier from "prettier/standalone";
import babylon from "prettier/parser-babel";

const Code = ({ codeString }) => {
  const formatCode = (code) => {
    const formattedCode = prettier.format(code, {
      parser: "babel",
      plugins: [babylon],
    });

    return formattedCode;
  };
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {formatCode(codeString)}
    </SyntaxHighlighter>
  );
};

export default Code;
