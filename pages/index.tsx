import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: "https://www.john-liu.dev",
    permanent: true,
  },
});

export default function Index() {
  return null;
}
