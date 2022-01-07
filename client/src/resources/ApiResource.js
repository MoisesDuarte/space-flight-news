import axios from "axios";

class ApiResource {
  // TODO: Set baseurl as .env variable
  baseUrl = "http://localhost:3000";

  /**
   * Fetch all articles
   * @param {integer} page - Page index to get
   * @param {integer} limit - Number of articles to fetch
   * @param {string} title - A string to filter title by (optional)
   * @returns an object with an array of articles and page information
   */
  async getArticles(page, limit, title = null) {
    const params = {
      title,
      page,
      limit,
    };

    try {
      const response = await axios.get(`${this.baseUrl}/articles`, { params });
      return response.data;
    } catch (err) {
      console.error("Error fetching articles", err);
    }
  }

  /**
   * Fetch article information by id
   * @param {id} id - the article id to fetch
   * @returns an article object
   */
  async getArticleById(id) {
    try {
      const response = await axios.get(`${this.baseUrl}/articles/${id}`);
      return response.data;
    } catch (err) {
      console.error("Error fetching article by id", err);
    }
  }
}

export default new ApiResource();
