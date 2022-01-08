import axios from "axios";

class ApiResource {
  baseUrl = import.meta.env.VITE_BACKEND_SERVER_HOST;

  /**
   * Fetch all articles
   * @param {integer} page - Page index to get
   * @param {integer} limit - Number of articles to fetch
   * @param {string} title - A string to filter title by (optional)
   * @param {string} sort - Sort order for publishedAt (optional)
   * @returns an object with an array of articles and page information
   */
  async getArticles(page, limit, title = null, sort = null) {
    const params = {
      title,
      page,
      limit,
      sort,
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

  /**
   * Delete article by id
   * @param {id} id - the article id to delete
   * @returns the deleted model count
   */
  async deleteArticle(id) {
    try {
      const response = await axios.delete(`${this.baseUrl}/articles/${id}`);
      return response.data;
    } catch (err) {
      console.error("Error fetching article by id", err);
    }
  }
}

export default new ApiResource();
