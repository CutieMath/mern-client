import { Box } from "@mui/material";
import NavBar from "../navbar";
import UserWidget from "../widgets/UserWidget";

const HomePage = () => {
  return (
    <Box>
      <NavBar />
      <UserWidget />
    </Box>
  );
};

export default HomePage;
