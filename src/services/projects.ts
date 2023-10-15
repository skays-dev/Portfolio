import axios from 'axios';

const graphqlAPI: string | undefined = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;


export const getProjects = async (): Promise<any> => {
    try {
        const response = await axios.post(graphqlAPI || 'https://api-eu-west-2.hygraph.com/v2/clnqjgbp1gus401uh2ml3bid8/master', {
            query: `
            query projects {
                projectsConnection {
                    edges {
                        node {
                            categories {
                                slug
                            }
                            createdAt
                            slug
                            image {
                                url
                            }
                            image2 {
                                url
                            }
                            image3 {
                                url
                            }
                            linkYoutube
                            languages
                            link
                            preview
                            projectName
                            typeCard
                            typeProject
                        }
                    }
                }
            }
        `,
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (response.status === 200) {
            return response.data.data.projectsConnection.edges;
        } else {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
