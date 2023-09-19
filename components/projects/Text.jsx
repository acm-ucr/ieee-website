import React from "react";

const Text = ({ contents }) => {
  return (
    <p className="inline my-3 text-center text-sm md:text-lg font-giden items-center justify-center">
      {contents.map((content, index) => (
        <span className="inline" key={index}>
          {content.link ? (
            <a
              href={content.link}
              className="text-sm md:text-lg font-bold text-ieee-blue"
            >
              {content.text}
            </a>
          ) : (
            content.text
          )}
        </span>
      ))}
    </p>
  );
};

export default Text;
