import React from "react";
import Title from "../Title";
import Text from "./Text";
import Picture from "./Picture";
import { Row } from "react-bootstrap";

const ProjectPage = ({ contents }) => {
  return (
    <Row className="w-10/12 md:w-7/12 py-24">
      {contents.map((content, index) =>
        content.type === "title" ? (
          <Title key={index} title={content.text} />
        ) : content.type === "text" ? (
          <Text key={index} contents={content.content} />
        ) : content.type === "picture" ? (
          <Picture key={index} content={content.content} />
        ) : (
          <p>{content.type}</p>
        )
      )}
    </Row>
  );
};

export default ProjectPage;
