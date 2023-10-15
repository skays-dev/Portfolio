import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PortfolioData from "./portfolioData";
import Image from "next/image";
import ModalMain from "./modal/ModalMain";
import { getProjects } from "@/services/projects";

const Portfolio = () => {
  const [getModal, setGetModal] = useState(false);
  const [modalId, setModalId] = useState(1);
  const [slug, setSlug] = useState("");
  // States Of Data Fetch it
  const [allProjects, setAllProjects] = useState();

  const handleModal = (id, slug) => {
    setGetModal(true);
    setModalId(id);
    setSlug(slug);
  };

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
  return (
    <>
      {allProjects ? <>
        <div className="portfolio-main">
          <Tabs>
            <TabList className="portfolio-tab-list" data-aos="fade-up">
              <Tab>ALL</Tab>
              <Tab>Front end</Tab>
              <Tab>Back end</Tab>
              <Tab>UI/UX</Tab>
              <Tab>ALX Tasks</Tab>
            </TabList>

            <div className="container">
              <TabPanel>
                <div className="tab-container">
                  {allProjects.map((item) => {
                    let delayAnimation = -100;
                    const { slug, image, typeProject, typeCard } = item.node;
                    return (
                      <div
                        key={slug}
                        data-aos="fade-right"
                        data-aos-delay={delayAnimation + 100}
                      >
                        <div
                          className="tab-content"
                          onClick={() => handleModal(typeCard, slug)}
                        >
                          <Image src={image.url} alt="portfolio project demo" width={895} height={552} />
                          <h3>
                            <span className="conent-title">{typeProject}</span>
                          </h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </TabPanel>

              <TabPanel>
                <div className="tab-container">
                  {allProjects.map((item) => {
                    const { categories } = item.node;
                    const frontEndCategories = categories.filter(category => category.slug === "front-end");

                    if (frontEndCategories.length > 0) {
                      let delayAnimation = -100;
                      const { slug, image, typeProject, typeCard } = item.node;

                      return (
                        <div
                          key={slug}
                          data-aos="fade-right"
                          data-aos-delay={delayAnimation + 100}
                        >
                          <div
                            className="tab-content"
                            onClick={() => handleModal(typeCard, slug)}
                          >
                            <Image src={image.url} alt="portfolio project demo" width={895} height={552} />
                            <h3>
                              <span className="content-title">{typeProject}</span>
                            </h3>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </TabPanel>

              <TabPanel>
                <div className="tab-container">
                  {allProjects.map((item) => {
                    const { categories } = item.node;
                    const frontEndCategories = categories.filter(category => category.slug === "back-end");

                    if (frontEndCategories.length > 0) {
                      let delayAnimation = -100;
                      const { slug, image, typeProject, typeCard } = item.node;

                      return (
                        <div
                          key={slug}
                          data-aos="fade-right"
                          data-aos-delay={delayAnimation + 100}
                        >
                          <div
                            className="tab-content"
                            onClick={() => handleModal(typeCard, slug)}
                          >
                            <Image src={image.url} alt="portfolio project demo" width={895} height={552} />
                            <h3>
                              <span className="content-title">{typeProject}</span>
                            </h3>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </TabPanel>

              <TabPanel>
                <div className="tab-container">
                  {allProjects.map((item) => {
                    const { categories } = item.node;
                    const frontEndCategories = categories.filter(category => category.slug === "ui-ux");

                    if (frontEndCategories.length > 0) {
                      let delayAnimation = -100;
                      const { slug, image, typeProject, typeCard } = item.node;

                      return (
                        <div
                          key={slug}
                          data-aos="fade-right"
                          data-aos-delay={delayAnimation + 100}
                        >
                          <div
                            className="tab-content"
                            onClick={() => handleModal(typeCard, slug)}
                          >
                            <Image src={image.url} alt="portfolio project demo" width={895} height={552} />
                            <h3>
                              <span className="content-title">{typeProject}</span>
                            </h3>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </TabPanel>

              <TabPanel>
                <div className="tab-container">
                  {allProjects.map((item) => {
                    const { categories } = item.node;
                    const frontEndCategories = categories.filter(category => category.slug === "alx");

                    if (frontEndCategories.length > 0) {
                      let delayAnimation = -100;
                      const { slug, image, typeProject, typeCard } = item.node;

                      return (
                        <div
                          key={slug}
                          data-aos="fade-right"
                          data-aos-delay={delayAnimation + 100}
                        >
                          <div
                            className="tab-content"
                            onClick={() => handleModal(typeCard, slug)}
                          >
                            <Image src={image.url} alt="portfolio project demo" width={895} height={552} />
                            <h3>
                              <span className="content-title">{typeProject}</span>
                            </h3>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
        {getModal && <ModalMain slug={slug} modalId={modalId} setGetModal={setGetModal} />}{" "}
      </> :
        <>Loading...</>
      }
    </>
  );
};

export default Portfolio;