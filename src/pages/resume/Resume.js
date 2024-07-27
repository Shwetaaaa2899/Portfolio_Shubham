import { Document, Page, pdfjs } from "react-pdf";
import { MdFileDownload } from "react-icons/md";
import React, { useState, useEffect } from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./Resume.css";
// import pdf2 from "../../../public/resume.pdf";
const pdf2 = "/resume.pdf";
const Resume = () => {
  const [width, setWidth] = useState(1200);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDownload = () => {
    window.open("https://drive.google.com/file/d/1flIeaj2vvvPssJLP0qw4R7TWYIdtzdmP/view?usp=drive_link", "_blank");
  };

  return (
    <div className="resume">
      <div className="pdf-container">
        <Document file="https://drive.google.com/file/d/1flIeaj2vvvPssJLP0qw4R7TWYIdtzdmP/view?usp=drive_link" className="document">
          <Page
            pageNumber={1}
            scale={width > 786 ? 1.7 : 0.6}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
      <button onClick={handleDownload}>
        DownLoad <MdFileDownload className="download-icon" size="20" />{" "}
      </button>
    </div>
  );
};
export default Resume;
