import { Request, Response } from "express";
import axios from "axios";

const search = async (req: Request, res: Response) => {
  const query = req.query.q;
  try {
    if (!query) {
      return res.status(400).json({ error: "Please provide a search query" });
    }
    const response = await axios.get(
      "https://api.stackexchange.com/2.3/search",
      {
        params: {
          order: "desc",
          sort: "relevance",
          intitle: query,
          site: "stackoverflow",
        },
      }
    );
    const results = response.data.items.map((item) => ({
      title: item.title,
      link: item.link,
      is_answered: item.is_answered,
      score: item.score,
    }));
    return res.json({ results });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default { search };
