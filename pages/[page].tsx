import type {
  GetStaticPropsContext,
  InferGetStaticPropsType,
  GetStaticProps,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import PostItemComponent from "../components/PostItemComponent";
import styles from "../styles/Home.module.scss";
import Pagination from "@mui/material/Pagination";
import { IPost } from "../models/Post";
import { getListPost } from "../services/PostsService";
import { IPagination, ResponseListPost } from "../models/ResponseListPost";
import { ParsedUrlQuery } from "querystring";
import _ from "lodash";
import { PER_PAGE } from "./constants";
import { useRouter } from "next/router";

type Props = {
  posts: IPost[];
  pagination: IPagination;
};

interface IParams extends ParsedUrlQuery {
  page: string;
}

function PageContent({
  posts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const totalPages = Math.ceil(pagination.total / pagination.limit);
  const router = useRouter();

  let currentPage = pagination.offset / PER_PAGE + 1;
  currentPage = currentPage > totalPages ? totalPages : currentPage;

  const handleChangePager = (page: number) => {
    console.log("handleChangePager >>>>> ", page);
    router.push(`/${page}`);
  };

  return (
    <Layout>
      <div className={styles.rootContainer}>
        <div className={styles.container}>
          <div className={styles.leftContainer}>
            <div>
              {posts.map((post, index) => (
                <div key={`post-${index}`}>
                  <PostItemComponent post={post} />
                </div>
              ))}
            </div>
            {_.isEmpty(posts) ? (
              <div />
            ) : (
              <div className={styles.paginationContainer}>
                <Pagination
                  count={totalPages}
                  defaultPage={currentPage}
                  variant="outlined"
                  shape="rounded"
                  onChange={(e, page) => handleChangePager(page)}
                />
              </div>
            )}
          </div>
          <div className={styles.rightContainer}>rightContainer</div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props, IParams> = async (
  context
) => {
  const page = Number((context.params as IParams).page);
  console.log("page >>>>> ", page, context);
  if (_.isNaN(page)) {
    return {
      notFound: true,
    };
  }

  if (page === 0) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const response = await getListPost(PER_PAGE, PER_PAGE * (page - 1));
  const resListPost: ResponseListPost = {
    pagination: response.meta,
    listPost: response.data,
  };
  console.log(" pagination >>> ", JSON.stringify(resListPost.pagination));
  return {
    props: {
      posts: resListPost.listPost,
      pagination: resListPost.pagination,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = Array.from({ length: 5 }).map((_, index) => ({
    params: {
      page: `${index + 1}`,
    },
  }));
  console.log("paths >>>>> ", paths);
  return {
    paths,
    fallback: "blocking",
  };
};

export default PageContent;
