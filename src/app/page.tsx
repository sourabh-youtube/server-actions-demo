"use client";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height={"100vh"}
        gap={4}
      >
        <Typography variant="h5">Server Actions Use Case</Typography>

        <Button variant="contained">
          <Link
            href="/simple"
            style={{ textDecoration: "none", color: "white", width: 300 }}
          >
            Simple Data Fetching
          </Link>
        </Button>
        <Button variant="contained">
          <Link
            href="/formsubmit"
            style={{ textDecoration: "none", color: "white", width: 300 }}
          >
            Form Submission and POST request
          </Link>
        </Button>
      </Box>
    </main>
  );
}
