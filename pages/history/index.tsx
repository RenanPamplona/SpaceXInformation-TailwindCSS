import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React, { ReactNode, useEffect } from "react";
import HistoryCard from "../../src/components/Cards/HistoryCard";
import TitleWithImage from "../../src/components/shared/TitleWithImage";
import { fetchHistory, HistoryType } from "../../src/services/history";

export const getServerSideProps: GetServerSideProps = async () => {
  const historyArray = await fetchHistory();

  return {
    props: {
      historyArray,
    },
  };
};

const History: NextPage = (props: {
  children?: ReactNode;
  historyArray?: HistoryType[];
}) => {
  props.historyArray?.reverse();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>History</title>
      </Head>

      <TitleWithImage
        title="History"
        subtitle="Here you can check SpaceX's milestones in its existance as a company"
        image="https://live.staticflickr.com/8570/16698990475_7f69dca673_k.jpg"
        goBackLink="/"
      />
      <div className="flex flex-col items-center">
        <div className="flex w-full flex-col items-center gap-8 py-8 px-8 md:w-5/6 lg:w-4/6">
          {props.historyArray?.map((history) => (
            <HistoryCard key={history.id} event={history} />
          ))}
        </div>
      </div>
    </>
  );
};

export default History;
