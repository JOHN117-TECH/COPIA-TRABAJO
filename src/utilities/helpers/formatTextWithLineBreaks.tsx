export const formatTextWithLineBreaks = (
  text: string,
  { showBreaks }: { showBreaks: boolean }
) => {
  if (!showBreaks) {
    return <span>{text.replace(/\n/g, " ")}</span>;
  }
  const lines = text.split("\n");

  return lines.map((line, index) => (
    <span key={index}>
      {line}
      {index < lines.length - 1 && <br />}
    </span>
  ));
};
