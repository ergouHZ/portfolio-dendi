import { Avatar, Badge, Box, Typography } from "@mui/material";
import './BadgeCustom.css';
export default function BadgeCustom({ image, desc, credential }) {

    const onHandleClickBadge = () => {
        console.log("link", credential)
        if (credential) {
            window.open(credential)
        }

    }

    return (
        <Box className="badge-container" onClick={onHandleClickBadge}>
            <Badge color='secondary'
            >
                <Avatar
                    alt='Badge'
                    src={image ? image : '/images/badge/2024-50-lg.png'}
                    sx={{ width: 48, height: 48 }}
                />
            </Badge>

            <Box
                className='popover'
            >
                <Typography sx={{
                    textAlign: 'left',
                    fontSize: '20px',
                    marginBottom: 0.5
                }}>
                    {desc ? desc : "description"}
                </Typography>
            </Box>
        </Box>
    )
}