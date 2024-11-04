import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { Alert, ButtonGroup, Drawer, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Article } from "../../../utils/entity/Ariticles";
import TextRender from "../../../utils/TextRender";
import "./ArticleCard.css";
type Props = {
  index: number;
  article: Article;
};
export default function ArticleCard({ article, index }: Props) {
  //oepn the detail drawer
  const [open, setOpen] = React.useState(false);
  const [alert, setAlert] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(article.title);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  //The detail card will show up when the card is clicked
  const DrawerList = (
    <Box
      sx={{ width: 550, padding: 4, maxWidth: "45vw" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      {/* if there is link, then make the title clickable */}
      {article.url ? (
        <Link href={article.url}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              cursor: "pointer",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "blue",
              },
            }}
          >
            <TextRender text={article.title} />
          </Typography>
        </Link>
      ) : (
        <Typography variant="h5" component="div">
          <TextRender text={article.title} />
        </Typography>
      )}
      <Typography variant="h6">
        {article.author?.substring(0, article.author.length - 2)}
      </Typography>
      <br />
      <Typography variant="body1">
        <TextRender
          text={
            article.summary ? article.summary : "Sorry, no summary available"
          }
        />
        <br />
      </Typography>
      <br />
      <CardActions>
        {article.openAccess ? (
          <LockOpenRoundedIcon color="primary" />
        ) : (
          <LockIcon color="disabled" />
        )}
        <Button
          size="small"
          disabled={!article.openAccess}
          onClick={() => {
            if (article.url)
              window.open(article.url, "_blank", "noopener noreferrer");
            else console.log("No URL provided");
          }}
        >
          {article.openAccess ? "Link - Research" : null}
        </Button>
      </CardActions>
    </Box>
  );

  return (
    <Box
      sx={{
        minWidth: 275,
        marginBottom: 1,
        cursor: "pointer",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          backgroundColor: "blue",
          boxShadow: "0 6px 10px rgba(143, 143, 143, 0.224)",
        },
      }}
    >
      <Card variant="outlined">
        <React.Fragment>
          <CardContent
            sx={{
              padding: "8px",
              paddingBottom: "12px !important",
            }}
            onClick={toggleDrawer(true)}
          >
            <div className="index-year">
              <Typography variant="subtitle1" align="left">
                Article: {index + 1}
              </Typography>

              <Typography
                sx={{ color: "text.secondary", fontSize: 16, marginLeft: 40 }}
              >
                <AccessTimeFilledIcon fontSize="small" />
                Year: {article.year}
              </Typography>
              <Typography
                sx={{ color: "text.secondary", fontSize: 16, flex: "row" }}
              >
                <FormatQuoteIcon />
                Citations: {article.citations}
              </Typography>
            </div>
            <Typography variant="h6" component="div">
              {article.title}
            </Typography>
            <CardActions sx={{ padding: 0, justifyContent: "space-between" }}>
              
              <Box
                onClick={(e) => {
                  e.stopPropagation(); /* stop opening the drawer */
                  if (article.url)
                    window.open(article.url, "_blank", "noopener noreferrer");
                  else console.log("No URL provided");
                }}
              >
                {article.openAccess ? (
                  <LockOpenRoundedIcon color="primary" />
                ) : (
                  <LockIcon color="disabled" />
                )}
                <Button size="small" disabled={!article.openAccess} />
              </Box>

              <Typography sx={{ fontSize: 14, flex: "row" }}>
                {article.author?.substring(0, article.author.length - 2)}
              </Typography>
              <ButtonGroup
                size="small"
                color="info"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                variant="outlined"
                aria-label="Basic button group"
              >
                <Button onClick={handleCopy}>
                  <ContentCopyIcon />
                </Button>
                <Button>
                  <StarBorderIcon />
                </Button>
                <Button>
                  <ThumbUpOffAltIcon />
                </Button>
              </ButtonGroup>
            </CardActions>
          </CardContent>
        </React.Fragment>
      </Card>

      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>

      {/* COPY toast */}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={alert}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Title Copied!"
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Title Copied!
        </Alert>
      </Snackbar>
    </Box>
  );
}
