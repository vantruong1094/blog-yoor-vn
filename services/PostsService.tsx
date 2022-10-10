import { ApiContent, HacoCmsClient, JsonType } from "hacocms-js-sdk";
import { ResponseListPost } from "../models/ResponseListPost";
import axios from "axios";
import _ from "lodash";
import { IPost } from "../models/Post";

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
  subContent: any;
  title: string;
  content: string;
  urlImage: string;
  category: string;

  constructor(json: any) {
    super(json);

    this.subContent = json.subContent;
    this.title = json.title;
    this.content = json.content;
    this.urlImage = json.urlImage;
    this.category = json.category;
  }
}

export const getListPost = async ({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}) => {
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

export const getListPostHaco = async ({
  keyword = "",
  limit = 1000,
  category = "",
}: HacoProps) => {
  console.log("category >>>> ", category, "keyword >>>>> ", keyword);
  try {
    const res = await client.getListIncludingDraft(PostContent, "/posts", {
      search: _.isEmpty(keyword) ? undefined : keyword,
      limit: _.isEmpty(limit) ? 1000 : limit,
      q: _.isEmpty(category) ? undefined : `category[cont]:${category}`,
      s: "-updatedAt",
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
    const posts: IPost[] = JSON.parse(resStringJson);
    const paramIds = posts.map((post) => ({
      params: { id: `${post.id}` },
    }));

    console.log("getPostIds >>> ", paramIds);

    return paramIds;
  } catch (error) {
    console.log(error);
  }
};

export const getPostById = async (id: string) => {
  try {
    console.log(`postId >>>> ${id}`);
    const res = await client.getContent(PostContent, "/posts", id);

    const resStringJson = JSON.stringify(res);
    return JSON.parse(resStringJson);
  } catch (error) {
    console.log(error);
  }
};

type HacoProps = {
  keyword?: string;
  limit?: number;
  category?: string;
};
