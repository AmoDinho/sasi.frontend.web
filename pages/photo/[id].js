import ViewPhoto from "../../components/viewPhoto";
import { useRouter } from "next/router";

const ViewAPhoto = (query) => {
  const router = useRouter();
  const { id } = router.query;
  return <ViewPhoto id={id} />;
};

export default ViewAPhoto;

//http://localhost:3000/photo/1
