import { ApiContent, HacoCmsClient } from "hacocms-js-sdk";
import { ResponseListPost } from "../models/ResponseListPost";
import axios from "axios";
import _ from "lodash";

const PROJECT_SUBDOMAIN = "truongcv-yoor";
const PROJECT_ACCESS_TOKEN = "AnmFzheET4Zp5qJ6xjmxkWZh";
const PROJECT_DRAFT_TOKEN = "gyPg3zBP86hhtkwBDm69hZWx";

export const PER_PAGE = 3;

const client = new HacoCmsClient(
  `https://${PROJECT_SUBDOMAIN}.hacocms.com`,
  PROJECT_ACCESS_TOKEN,
  PROJECT_DRAFT_TOKEN
);

const instance = axios.create({
  baseURL: "https://truongcv-yoor.hacocms.com/api/v1",
  timeout: 1000,
  headers: { Authorization: "Bearer AnmFzheET4Zp5qJ6xjmxkWZh" },
});

class PostContent extends ApiContent {
  constructor(json) {
    super(json);

    this.subContent = json.subContent;
    this.title = json.title;
    this.content = json.content;
    this.urlImage = json.urlImage;
    this.updatedAt = json.updatedAt;
    this.category = json.category;
  }
}

export const getListPost = async (limit, offset) => {
  try {
    const res = await instance.get("/posts", {
      params: {
        limit: limit,
        offset: offset,
        s: "-updatedAt",
      },
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getListPostHaco = async ({ keyword, limit, category }) => {
  console.log("category >>>> ", category);
  try {
    const res = await client.getListIncludingDraft(PostContent, "/posts", {
      search: _.isEmpty(keyword) ? null : keyword,
      limit: limit,
      q: _.isEmpty(category) ? null : `category[cont]:${category}`,
    });
    const resStringJson = JSON.stringify(res.data);
    return JSON.parse(resStringJson);
  } catch (error) {
    console.log(error);
  }
};

export const getPostIds = async () => {
  try {
    const res = await client.getListIncludingDraft(PostContent, "/posts");

    const resStringJson = JSON.stringify(res.data);
    const paramIds = JSON.parse(resStringJson).map((post) => ({
      params: { id: `${post.id}` },
    }));

    return paramIds;
  } catch (error) {
    console.log(error);
  }
};

export const getPostById = async (id) => {
  try {
    console.log(`postId >>>> ${id}`);
    const res = await client.getContent(PostContent, "/posts", id);

    const resStringJson = JSON.stringify(res);
    return JSON.parse(resStringJson);
  } catch (error) {
    console.log(error);
  }
};
