// import "./Logo.css";
// function Logo() {
//   return (
//     <div className="logo">
//       <a href="/">
//         <img src="./Logo.png" alt="Logo" />
//       </a>
//     </div>
//   );
// }

// export default Logo;
// //
import { Box } from "@mui/material";
// import { Link } from "react-router-dom";

function Logo() {
  return (
    <Box
      // component={Link}
      // to="/"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        margin: "13px auto",
      }}
    >
      <Box
        component="img"
        src="./Logo.png"
        alt="Logo"
        sx={{ width: "100%", height: "100%" }}
      />
    </Box>
  );
}

export default Logo;
