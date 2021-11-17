import Head from 'next/head';
import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';
import Link from 'next/link';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = await getAllIds();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
  return (
    <Layout>
      <article className="card col-6">
        <div className="card-body">
          <h1 className="card-title">{itemData.post_title}</h1>
          <h3 className="card-body">{itemData.post_content}</h3>
          <h5 className="card-body">{itemData.post_status}</h5>
          <h5 className="card-body">{itemData.post_date_gmt}</h5>
          <Link href={`${itemData?.guid}`}>
                      <a className="btn btn-primary">See this post</a>
              </Link>


          
        </div>
      </article>
    </Layout>
  );
}
