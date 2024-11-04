// use Dompurify and ReactMarkDown to format the text
import DOMPurify from "dompurify";
import ReactMarkdown from "react-markdown";
type Props = {
  text: string;
};

export default function TextRender({ text }: Props) {
  const cleanHtml = DOMPurify.sanitize(text);

  return <ReactMarkdown className="render">{cleanHtml}</ReactMarkdown>;
}
