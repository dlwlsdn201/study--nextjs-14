import { fetchURL } from '@/app/(home)/page';

const getMovie = async (id: string) => {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${fetchURL}/${id}`);

  return response.json();
};

const getVideos = async (id: string) => {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${fetchURL}/${id}/videos`);

  return response.json();
};

const MovieDetail = async ({ params: { id } }: { params: { id: string } }) => {
  console.log('start Fetching');

  // 아래와 같은 방식으로 fetch 구문을 호출할 경우, getMovie 호출이 완료될 때까지 getVideos 는 호출하지 않고 대기하고 있음.
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);

  // Promise.all 은 배열 파라미터 내에 있는 async 함수들을 동시에 호출함.
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log({ videos });
  console.log('end Fetching');
  return (
    <>
      <h1>{movie.title}</h1>
      <h2>{videos.map((item) => JSON.stringify(item))}</h2>
    </>
  );
};

export default MovieDetail;
