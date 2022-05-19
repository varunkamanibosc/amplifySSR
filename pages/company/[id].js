function Page({ companyId }) {
  return (
    <div>
      <h1>Hi this is a SSR page</h1>
      {companyId}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  return {
    props: {
      companyId: params.id,
    },
  };
}

export default Page;
