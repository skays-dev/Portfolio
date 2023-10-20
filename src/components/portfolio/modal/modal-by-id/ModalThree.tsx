// external
import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// internal
import CloseImg from "../../../../../public/assets/img/cancel.svg";
import { getProjects } from '@/services/projects';
import formatDateFromDatabase from '@/helpers/formatDate';

const ModalThree: FC<{ modalId: any, setGetModal: any, slug: string }> = ({ modalId, setGetModal, slug }) => {
  console.log('ModalThree clicked')
  const [allProjects, setAllProjects] = useState<any[]>([]);

  useEffect(() => {
    // we create a function for fetch the data and set it in useState and call it @fetchRecentBlogs
    const fetchRecentBlogs = async () => {
      try {
        // step 1: variables declaration
        let allProjects;

        // step 2 : we initialize the data into variables declared
        allProjects = await getProjects();

        // step 3 we put the variables into states
        setAllProjects(allProjects);

      } catch (error) {
        console.error(`Error fetching recent blogs: ${error}`);
      }
    };
    // end function

    // we call the function for run the code
    fetchRecentBlogs();
  }, []);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };
  return (
    <div className="modal_portfolio">
      {allProjects ?
        <>
          <div
            className="modal__outside"
            onClick={() => setGetModal(false)}
          ></div>
          <div className="modal__content">
            {allProjects.filter((item) => item.node.slug === slug).map((item) => {
              const { slug, languages, link, preview, typeProject, image, image2, image3, projectName, createdAt } = item.node;
              return (
                <div key={slug} data-aos="fade">
                  <h2 className="heading mb-2">{typeProject}</h2>
                  <div className="modal__details">
                    <div key={slug} className="row open-sans-font">
                      <div className="col-12 col-sm-6 mb-2">
                        <i className="fa fa-file-text-o pr-2"></i>
                        Project:{" "}
                        <span className="ft-wt-600 uppercase">
                          {projectName}
                        </span>
                      </div>
                      <div className="col-12 col-sm-6 mb-2">
                        <i className="fa fa-user-o pr-2"></i>
                        Created At :{" "}
                        <span className="ft-wt-600 uppercase">
                          {formatDateFromDatabase(createdAt)}
                        </span>
                      </div>
                      <div className="col-12 col-sm-6 mb-2">
                        <i className="fa fa-code pr-2"></i>
                        Language :{" "}
                        <span className="ft-wt-600 uppercase">
                          {languages}
                        </span>
                      </div>
                      <div className="col-12 col-sm-6 mb-2">
                        <i className="fa fa-external-link pr-2"></i>
                        Preview :{" "}
                        <a
                          className="preview-link"
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          href={link}
                        >
                          {preview}
                        </a>
                      </div>
                    </div>
                  </div>
                  <figure className="modal__img">
                    <Slider {...settings}>
                      <div>
                        <Image src={image.url} alt="portfolio project demo" width={895} height={552}/>
                      </div>
                      <div>
                        <Image src={image2.url} alt="portfolio project demo" width={895} height={552}/>
                      </div>
                      <div>
                        <Image src={image3.url} alt="portfolio project demo" width={895} height={552}/>
                      </div>
                    </Slider>
                  </figure>

                  <button
                    className="close-modal"
                    onClick={() => setGetModal(false)}
                  >
                    <Image src={CloseImg} alt="portfolio project demo" />
                  </button>
                </div>
              );
            })}
          </div>
        </> :
        <>loading...</>
      }
    </div>
  );
};

export default ModalThree;