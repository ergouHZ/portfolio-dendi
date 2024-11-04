import { Avatar, Box, Typography } from "@mui/material";
import TextRender from "../../utils/TextRender";
type Props = {
  userMessage: string;
};

function UserMessage({ userMessage }: Props) {
  const srcUser: string =
    "https://atg-prod-scalar.s3.amazonaws.com/studentpower/media/user%20avatar.png";

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyItems: "start",
        padding: 2,
        paddingTop:0,
        paddingBottom:0,
        borderRadius: 2,
        width: "100%",
        maxWidth: 880,
        marginRight: 4,
        marginBottom: 1,
      }}
    >
      <Avatar
        className="avatar"
        alt="User Avatar"
        src={srcUser}
        sx={{ width: 46, height: 46, marginRight: 2 }}
      />
      <Box
        sx={{
          flex: 1,
          width: "100%",
          padding: 2,
          paddingTop:0,
          boxSizing: "border-box",
          fontSize: 16,
        }}
      >
        <Typography variant="body1" sx={{ textAlign: "left" }}>
          <TextRender text={userMessage} />
        </Typography>
      </Box>
    </Box>
  );
}

export default UserMessage;
