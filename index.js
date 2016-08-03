import svgTextSize from 'svg-text-size';

// Takes a string, and a width (and svg attrs, if they apply), and returns
// an array of lines, representing the break points in the string.
const svgTextWrap = (text, width, attrs, doc = document) => {
  const words = text.split(/\s+/);
  let lines = [];
  let currentLine = [];
  words.forEach(word => {
    const newLine = [...currentLine, word];
    const size = svgTextSize(newLine.join(' '), attrs, doc);
    if (size.width > width) {
      lines.push(currentLine.join(' '));
      currentLine = [word];
    } else {
      currentLine.push(word);
    }
  });
  lines.push(currentLine.join(' '));
  if (lines[0] === '') { lines.shift(); }
  return lines;
};

export default svgTextWrap;
