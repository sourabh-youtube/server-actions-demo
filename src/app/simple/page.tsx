"use client";
import { IUser } from "@/server/model/users";
import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getPing } from "../actions/query/_ping";

export default function Home() {
  const { data: pingData } = useQuery({
    queryKey: ["get-ping"],
    queryFn: async (): Promise<IUser | undefined> => getPing(),
    refetchOnMount: false,
  });

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
