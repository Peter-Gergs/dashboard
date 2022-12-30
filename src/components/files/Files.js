import React, { useEffect } from "react";
import "./files.scss";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { RiFileWord2Fill } from "react-icons/ri";
import { IoImages } from "react-icons/io5";
import { FaAngleDoubleUp, FaDownload, FaFileCsv } from "react-icons/fa";
import { elementAnimation } from '../dashboard/Dashboard';

function Files() {
  function handleScrollAniamtion() {
    const files = document.querySelectorAll(".files-page .files-content .file");
    elementAnimation(files)
  }
  useEffect(() => {
    handleScrollAniamtion()
    window.onscroll = function () {
      handleScrollAniamtion()
    }
  })
  
  return (
    <section className="files">
      <h1>files</h1>
      <div className="files-page">
        <div className="files-stats">
          <h2>Files Statistics</h2>
          <div>
            <span className="blue">
              <BsFillFileEarmarkPdfFill />
            </span>
            <div className="info">
              <span>PDF Files</span>
              <span>130 file</span>
            </div>
            <div className="size">6.5GB</div>
          </div>
          <div>
            <span className="green">
              <IoImages />
            </span>
            <div className="info">
              <span>Images</span>
              <span>115 file</span>
            </div>
            <div className="size">3.5GB</div>
          </div>
          <div>
            <span className="red">
              <RiFileWord2Fill />
            </span>
            <div className="info">
              <span>Word Files</span>
              <span>110 file</span>
            </div>
            <div className="size">3.2GB</div>
          </div>
          <div>
            <span className="orange">
              <FaFileCsv />
            </span>
            <div className="info">
              <span>CSV Files</span>
              <span>99 file</span>
            </div>
            <div className="size">2.9GB</div>
          </div>
          <button className="upload">
            <span>
              <FaAngleDoubleUp />
            </span>
            Upload
          </button>
        </div>
        <div className="files-content">
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/pdf.svg").default}
                alt="pdf"
              />
            </div>
            <h5 className="file-name">my-file.pdf</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>5.5MB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/avi.svg").default}
                alt="avi"
              />
            </div>
            <h5 className="file-name">my-file.avi</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>12.5MB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/eps.svg").default}
                alt="eps"
              />
            </div>
            <h5 className="file-name">my-file.eps</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>2.1MB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/psd.svg").default}
                alt="psd"
              />
            </div>
            <h5 className="file-name">my-file.psd</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>16.2MB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/dll.svg").default}
                alt="dll"
              />
            </div>
            <h5 className="file-name">my-file.dll</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>120KB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/png.svg").default}
                alt="png"
              />
            </div>
            <h5 className="file-name">my-file.png</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>1.1MB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/eps.svg").default}
                alt="eps"
              />
            </div>
            <h5 className="file-name">my-file.eps</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>2.1MB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/psd.svg").default}
                alt="psd"
              />
            </div>
            <h5 className="file-name">my-file.psd</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>16.2MB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/avi.svg").default}
                alt="avi"
              />
            </div>
            <h5 className="file-name">my-file.avi</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>12.5MB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/dll.svg").default}
                alt="dll"
              />
            </div>
            <h5 className="file-name">my-file.dll</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>120KB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/png.svg").default}
                alt="png"
              />
            </div>
            <h5 className="file-name">my-file.png</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>1.1MB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/pdf.svg").default}
                alt="pdf"
              />
            </div>
            <h5 className="file-name">my-file.pdf</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>5.5MB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/pdf.svg").default}
                alt="pdf"
              />
            </div>
            <h5 className="file-name">my-file.pdf</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>5.5MB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/avi.svg").default}
                alt="avi"
              />
            </div>
            <h5 className="file-name">my-file.avi</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>12.5MB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/eps.svg").default}
                alt="eps"
              />
            </div>
            <h5 className="file-name">my-file.eps</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>2.1MB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/dll.svg").default}
                alt="dll"
              />
            </div>
            <h5 className="file-name">my-file.dll</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>120KB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/png.svg").default}
                alt="png"
              />
            </div>
            <h5 className="file-name">my-file.png</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>1.1MB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/psd.svg").default}
                alt="psd"
              />
            </div>
            <h5 className="file-name">my-file.psd</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>16.2MB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/eps.svg").default}
                alt="eps"
              />
            </div>
            <h5 className="file-name">my-file.eps</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>2.1MB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/avi.svg").default}
                alt="avi"
              />
            </div>
            <h5 className="file-name">my-file.avi</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>12.5MB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/psd.svg").default}
                alt="psd"
              />
            </div>
            <h5 className="file-name">my-file.psd</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>16.2MB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/pdf.svg").default}
                alt="pdf"
              />
            </div>
            <h5 className="file-name">my-file.pdf</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>5.5MB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/dll.svg").default}
                alt="dll"
              />
            </div>
            <h5 className="file-name">my-file.dll</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>120KB</span>
            </div>
          </div>

          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/png.svg").default}
                alt="png"
              />
            </div>
            <h5 className="file-name">my-file.png</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>1.1MB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/avi.svg").default}
                alt="avi"
              />
            </div>
            <h5 className="file-name">my-file.avi</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>12.5MB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/dll.svg").default}
                alt="dll"
              />
            </div>
            <h5 className="file-name">my-file.dll</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>120KB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/pdf.svg").default}
                alt="pdf"
              />
            </div>
            <h5 className="file-name">my-file.pdf</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>5.5MB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/png.svg").default}
                alt="png"
              />
            </div>
            <h5 className="file-name">my-file.png</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>1.1MB</span>
            </div>
          </div>
          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/eps.svg").default}
                alt="eps"
              />
            </div>
            <h5 className="file-name">my-file.eps</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>2.1MB</span>
            </div>
          </div>

          <div className="file">
            <span>
              <FaDownload />
            </span>
            <div className="icon">
              <img
                src={require("../../assets/imgs/psd.svg").default}
                alt="psd"
              />
            </div>
            <h5 className="file-name">my-file.psd</h5>
            <p>John Doe</p>
            <div className="info">
              <span>20/6/2020</span>
              <span>16.2MB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Files;
