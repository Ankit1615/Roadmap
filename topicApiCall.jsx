import axios from "axios";

const apiBaseUrl = 'https://learn-anything-learn-anything.grafbase.app/graphql';

const apiCall = async (query) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.post(
      apiBaseUrl,
      { query },
      { headers }
    );
    return response.data.data    ; // Assuming the relevant data is within the 'data' field of the response
  } catch (error) {
    console.log('error: ', error);
    return {};
  }
};

const fetchTopic = async (topic) => {
  const query = `{
    publicGetGlobalTopic(topicName: "${topic}") {
      prettyName
      topicSummary
      latestGlobalGuide {
        sections {
          title
          summary
          links {
            id
            title
            url
            year
            protocol
            description
          }
        }
      }
      links {
        id
        title
        url
        year
        protocol
        description
      }
      notesCount
    }
  }`;

  return apiCall(query);
};

export default fetchTopic;
