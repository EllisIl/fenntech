type QuoteProps = {
  text: string;
  author: string;
};

export default function Quote({ text, author }: QuoteProps) {
  return (
    <blockquote className="quote">
      <h2>&#34;{text}&#34;</h2>
      <footer>- {author}</footer>
    </blockquote>
  );
}