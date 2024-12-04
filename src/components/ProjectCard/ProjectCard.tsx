import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";
import "./ProjectCard.css";
type Props = {
  title: string;
  link: string;
  image?: string;
  github?: string;
};

export default function ProjectCard({ title, link, image, github }: Props) {
  const openGithub = (url: string | undefined) => {
    if (url) {
      // window.open(url);
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

  return (
    <Card className="card-container" sx={{ maxWidth: 400 }}>
      <Link href={link} target="_blank">
        <CardMedia sx={{ height: 160 }} image={image} title={title} />
        <CardContent>
          <Typography
            className="text"
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography className="text" variant="body2">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Link>
      <CardActions>
        <Button
          onClick={() => openGithub(github)}
          size="small"
          variant="outlined"
          startIcon={<GitHubIcon />}
        >
          GitHub
        </Button>
        <Button size="small">Know More</Button>
      </CardActions>
    </Card>
  );
}
