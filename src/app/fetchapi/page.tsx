import { Box, Typography } from "@mui/material";

export default async function Home() {
  const pingDataResponse = await fetch("http://localhost:3000/api/ping", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const pingData = await pingDataResponse.json();

  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        flexDirection="column"
      >
        <Typography variant="h5">
          GET <code>/api/ping</code>
        </Typography>
        <pre style={{ backgroundColor: "beige", padding: 15 }}>
          <code style={{ fontSize: 20, color: "red" }}>
            {JSON.stringify(pingData, null, 4)}
          </code>
        </pre>
      </Box>
    </div>
  );
}
