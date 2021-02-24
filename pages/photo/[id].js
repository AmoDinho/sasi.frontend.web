import ViewPhoto from "../../components/viewPhoto";
import { useRouter } from "next/router";
import App from "../../components/App";
const ViewAPhoto = (query) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <App>
      <ViewPhoto id={id} />
    </App>
  );
};

export default ViewAPhoto;

//http://localhost:3000/photo/1
