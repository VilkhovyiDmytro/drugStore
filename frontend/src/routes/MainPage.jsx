import { useLoaderData } from "react-router-dom";

function MainPage() {
  const data = useLoaderData();
  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1>Тут могла би бути ваша реклама), будь ласка, оберіть магазин</h1>
    </div>
  );
}

export default MainPage;
