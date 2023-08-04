type Text = {
  data: string;
};

const getText = async () => {
  const res = await fetch(`http://localhost:3030/api/v1/test`, {
    cache: "no-store",
  });
  console.log("test");
  if (!res.ok) {
    throw new Error("Failed to fetch text");
  }

  return res.json() as Promise<Text>;
};

const MyServer = async () => {
  const text = await getText();
  return (
    <>
      <p>서버 컴포넌트 입니다.</p>
      <p>{text.data}</p>
    </>
  );
};

export default MyServer;
