import styled from "styled-components";
import Title from "../components/common/Title";
import { useMain } from "@/hooks/useMain";
import HomeReview from "@/components/home/HomeReview";
import HomeNewBooks from "@/components/home/HomeNewBooks";
import HomeBest from "@/components/home/HomeBest";
import Banner from "@/components/common/banner/Banner";

function Home() {
  const { reviews, newBooks, bestBooks, banners } = useMain();

  return (
    <HomeStyle>
      <Banner banners={banners} />
      <section className="section">
        <Title size="large">베스트셀러</Title>
        <HomeBest books={bestBooks} />
      </section>
      <section className="section">
        <Title size="large">신간</Title>
        <HomeNewBooks books={newBooks} />
      </section>
      <section className="section">
        <Title size="large">리뷰</Title>
        <HomeReview reviews={reviews} />
      </section>
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default Home;