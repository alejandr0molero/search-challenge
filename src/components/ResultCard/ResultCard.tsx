import type { FC } from "react";
import "./ResultCard.scss";

interface ResultCardProps {
  version: string;
  content: string;
  text?: string;
}

export const ResultCard: FC<ResultCardProps> = ({ version, content, text }) => {
  return (
    <div className="result-card">
      <h1 className="result-card--title">{version}</h1>
      <p
        className="result-card--content"
        dangerouslySetInnerHTML={{
          __html: text
            ? content.replace(text, `<span class="selected">${text}</span>`)
            : content,
        }}></p>
    </div>
  );
};
